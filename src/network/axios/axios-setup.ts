import { AxiosRequestConfig } from 'axios'

const apiURL = import.meta.env.API_BASE_URL as string
const port = import.meta.env.API_BASE_PORT as string
console.log(`apiURL: ${apiURL}`)
console.log(`port: ${port}`)

let fullURL
if (port) {
  fullURL = `${apiURL}:${port}`
} else {
  fullURL = `${apiURL}`
}
console.log(`full url: ${fullURL}`)
export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: fullURL,
}
