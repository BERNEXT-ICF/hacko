import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

let authProvider: { setIsAuthenticated: (value: boolean) => void } | null =
  null;
export const setAuthProvider = (provider: typeof authProvider) => {
  authProvider = provider;
};

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL_DEV,
  withCredentials: true,
};

const createApi = (): AxiosInstance => {
  const api = axios.create(config);

  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        authProvider?.setIsAuthenticated(false);
      }

      return Promise.reject(error);
    }
  );

  return api;
};

export const api = createApi();
