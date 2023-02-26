import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://fteam-env-1.eba-ciibaeid.ap-northeast-2.elasticbeanstalk.com/api',
});

export async function postEmail(email: string) {
  return await axiosClient.post('/v1/auth/email/send', { email });
}

export async function postEmailAndCode(email: string, verificationCode: number) {
  return await axiosClient.post('/v1/auth/email/authenticate', { email, verificationCode });
}

export async function postSignUp(email: string, password: string, confirmPassword: string) {
  return await axiosClient.post('/v1/signup', { email, password, confirmPassword });
}
