import { AxiosRequestConfig } from 'axios'

export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: import.meta.env.BASE_URL as string,
}
