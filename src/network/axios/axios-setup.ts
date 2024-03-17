import { AxiosRequestConfig } from 'axios'

const apiURL = import.meta.env.VITE_API_BASE_URL as string
const port = import.meta.env.VITE_API_BASE_PORT as string
// console.log(`env: ${JSON.stringify(process.env)}`);
console.log(`meta: ${JSON.stringify(import.meta.env)}`)
console.log(`apiURL: ${apiURL}`)
console.log(`port: ${port}`)

let fullURL: string
// if (!apiURL) {
//   apiURL = process.env.API_BASE_URL as string;
// }
if (port) {
  fullURL = `${apiURL}:${port}/api`
} else {
  fullURL = `${apiURL}/api`
}
console.log(`full url: ${fullURL}`)
export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: fullURL,
}
