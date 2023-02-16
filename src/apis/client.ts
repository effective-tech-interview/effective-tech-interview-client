import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

const DEV_SERVER_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_SERVER_URL;
const PROD_SERVER_URL = process.env.NEXT_PUBLIC_PRODUCTION_SERVER_URL;

const axiosClient = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? DEV_SERVER_URL : PROD_SERVER_URL,
});

const interceptorResponseFulfilled = (res: AxiosResponse) => {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }

  return Promise.reject(res.data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interceptorResponseRejected = (error: AxiosError<any>) => {
  return Promise.reject(new Error(error.response?.data?.message ?? error));
};

axiosClient.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

export const get = <T>(...args: Parameters<typeof axiosClient.get>) => {
  return axiosClient.get<T, T>(...args);
};

export const post = <T>(...args: Parameters<typeof axiosClient.post>) => {
  return axiosClient.post<T, T>(...args);
};

export const put = <T>(...args: Parameters<typeof axiosClient.put>) => {
  return axiosClient.put<T, T>(...args);
};

export const patch = <T>(...args: Parameters<typeof axiosClient.patch>) => {
  return axiosClient.patch<T, T>(...args);
};

export const del = <T>(...args: Parameters<typeof axiosClient.delete>) => {
  return axiosClient.delete<T, T>(...args);
};
