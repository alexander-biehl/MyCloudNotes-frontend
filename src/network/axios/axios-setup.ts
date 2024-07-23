import { AxiosRequestConfig } from 'axios'

const apiURL = import.meta.env.VITE_API_BASE_URL as string
const port = import.meta.env.VITE_API_BASE_PORT as string

let fullURL: string
if (port) {
  fullURL = `${apiURL}:${port}/api`
} else {
  fullURL = `${apiURL}/api`
}
// console.log(`full url: ${fullURL}`)
export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: fullURL,
  headers: {
    'Content-Type': 'application/json',
  },
}
