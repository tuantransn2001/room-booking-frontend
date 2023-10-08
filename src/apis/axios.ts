import { AUTH_TOKEN_KEY } from '@/constants/common';
import env from '@/constants/env';
import axios from 'axios';
import { getCookie } from 'cookies-next';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const baseURL = env.API_BASE_URL,
  isServer = typeof window === 'undefined';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async (config) => {
    if (isServer) {
      const { cookies } = await import('next/headers'),
        tokens = cookies().get(AUTH_TOKEN_KEY)?.value;

      if (tokens) {
        const { token_type, access_token } = JSON.parse(tokens);
        config.headers['Authorization'] = `${token_type} ${access_token}`;
      }
    } else if (config.headers) {
      const tokens = JSON.parse((getCookie(AUTH_TOKEN_KEY) as string) || '{}');
      if (tokens) {
        config.headers.Authorization = `${tokens.token_type} ${tokens.access_token}`;
      }

      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default api;
