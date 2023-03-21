import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

export const DEV_SERVER_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_SERVER_URL;
const PROD_SERVER_URL = process.env.NEXT_PUBLIC_PRODUCTION_SERVER_URL;

export const authToken = {
  access: (() => {
    try {
      return localStorage.getItem('accessToken');
    } catch (err) {
      return null;
    }
  })(),
  refresh: (() => {
    try {
      return localStorage.getItem('refreshToken');
    } catch (err) {
      return null;
    }
  })(),
  refetch: () => {
    authToken.access = localStorage.getItem('accessToken');
    authToken.refresh = localStorage.getItem('refreshToken');
    return;
  },
  destroy: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    authToken.access = null;
    authToken.refresh = null;
  },
};

export const axiosClient = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? DEV_SERVER_URL : PROD_SERVER_URL,
  headers: {
    Authorization: `Bearer ${authToken.access}`,
    'Content-Type': 'application/json; charset=utf-8',
    timeout: 5000,
  },
});

const REDIRECT_URL_STORAGE = 'redirectUrl';

export const redirectToLoginPage = () => {
  const isDev = window.location.hostname === 'localhost';
  const isLoginPage = window.location.href.includes('/login');

  if (isLoginPage) {
    return;
  }

  window.localStorage.setItem(
    REDIRECT_URL_STORAGE,
    JSON.stringify({
      host: isDev ? 'http://localhost:3000' : '',
      path: window.location.pathname,
    })
  );

  window.location.href = isDev ? 'http://localhost:3000/login' : '/login';
};

//에러 커스텀 로직
// effective-interview 에러 타입
export interface EffErrorResponse {
  code: number;
  message: string;
}

// 커스텀 에러 타입
export interface EffError extends AxiosError<EffErrorResponse> {
  response: AxiosResponse<EffErrorResponse>;
  isEffError: true;
  message: string;
  code: string;
  status: number;
  errorCode: number;
}

// effective-interview에서 정의한 에러인지 확인
export function isEffError(error: unknown): error is EffError {
  try {
    return (error as EffError).isEffError === true;
  } catch {
    return false;
  }
}

//axios 에러인지 확인
function isAxiosErrorWithResponseData(
  error: unknown
): error is AxiosError & { response: AxiosResponse } {
  try {
    return axios.isAxiosError(error) && error.response?.data != null;
  } catch {
    return false;
  }
}

//axios에러를 커스텀한 에러로 변환
function createEffErrorFromAxiosError(error: AxiosError): EffErrorResponse | AxiosError {
  if (isAxiosErrorWithResponseData(error)) {
    const effError = error as EffError;

    effError.isEffError = true;
    effError.message = effError.response.data.message ?? '';
    effError.errorCode = effError.response.data.code;
  }

  return error;
}

// 매 응답마다 axios error를 커스텀한 에러로 변환
axiosClient.interceptors.response.use(
  response => response,
  originalError =>
    Promise.reject(
      isAxiosErrorWithResponseData(originalError)
        ? createEffErrorFromAxiosError(originalError)
        : originalError
    )
);

// 1. 요청 인터셉터
axiosClient.interceptors.request.use(
  function (config) {
    if (config?.headers == null) {
      throw new Error(`config.header is undefined`);
    }

    if (config.headers['Authorization'] == `Bearer ${null}`) {
      authToken.refetch();
    }

    if (axiosClient.defaults.headers.common['Authorization'] == `Bearer ${null}`) {
      authToken.refetch();
    }

    config.headers['Authorization'] = `Bearer ${authToken.access}`;
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${authToken.access}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 2. 응답 인터셉터
axiosClient.interceptors.response.use(
  response => response,
  async function (error: EffError) {
    if (isEffError(error) && error.errorCode === 401) {
      const headers = {
        Authorization: `Bearer ${authToken.refresh}`,
      };
      try {
        const {
          data: { accessToken, refreshToken },
        } = await axios.post(`${DEV_SERVER_URL}/auth/refresh`, null, { headers });
        if (error?.config?.headers === undefined) {
          return null;
        } else {
          error.config.headers['Authorization'] = `Bearer ${accessToken}`;
          //localStorage에 새 토큰 저장
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          const originalResponse = await axios.request(error.config);
          return originalResponse.data.data;
        }
      } catch (err) {
        if (isEffError(err) && err.errorCode === 401) {
          console.log(err);
          redirectToLoginPage();
          await delay(500);
          return null;
        }
      }
    } else {
      throw error;
    }
  }
);

function delay(time: number) {
  return new Promise(res => setTimeout(res, time));
}

// const interceptorResponseFulfilled = (res: AxiosResponse) => {
//   if (200 <= res.status && res.status < 300) {
//     return res.data;
//   }

//   return Promise.reject(res.data);
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const interceptorResponseRejected = (error: AxiosError<any>) => {
//   return Promise.reject(new Error(error.response?.data?.message ?? error));
// };

// axiosClient.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

// export const get = <T>(...args: Parameters<typeof axiosClient.get>) => {
//   return axiosClient.get<T, T>(...args);
// };

// // export const post = <T>(...args: Parameters<typeof axiosClient.post>) => {
// //   return axiosClient.post<T, T>(...args);
// // };

// export const put = <T>(...args: Parameters<typeof axiosClient.put>) => {
//   return axiosClient.put<T, T>(...args);
// };

// export const patch = <T>(...args: Parameters<typeof axiosClient.patch>) => {
//   return axiosClient.patch<T, T>(...args);
// };

// export const del = <T>(...args: Parameters<typeof axiosClient.delete>) => {
//   return axiosClient.delete<T, T>(...args);
// };
