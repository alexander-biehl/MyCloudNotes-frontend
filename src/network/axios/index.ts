import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

import { axiosBaseOptions } from './axios-setup'

class MyAxios {
  private readonly axiosInstance: AxiosInstance
  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    this.initInterceptors()
  }

  private initInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token: string | null = localStorage.getItem('token')
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        console.log(`Axios Config:`, config)
        return config
      },
      (error) => {
        console.log(`Axios Error:`, error)
        return Promise.reject(error)
      },
    )

    this.axiosInstance.interceptors.response.use(
      (response) => {
        const { data } = response
        console.log(`data`, data)
        if (data.rsCode !== 0) {
          alert(`${data.rsCause}`)
          return Promise.reject(data.data)
        }
        if (data instanceof Blob) {
          return response
        } else {
          return data.data
        }
      },
      (error: AxiosError) => {
        console.log(`axios error`, error)

        if (error?.response) {
          switch (error.response.status) {
            case 400:
              console.log(`400 error`)
              break
            case 401:
              console.log(`401 error`)
              break
            case 404:
              console.log('404 error')
              break
            default:
              console.log(`Error ${error.response.status}`)
          }
        }

        return Promise.reject(error)
      },
    )
  }

  get<T>(url: string, data?: object): Promise<T> {
    return this.axiosInstance.get(url, { params: data })
  }

  post<T>(url: string, data?: object, params?: object): Promise<T> {
    return this.axiosInstance.post(url, data, { params })
  }

  put<T>(url: string, data?: object, params?: object): Promise<T> {
    return this.axiosInstance.put(url, data, { params })
  }

  delete<T>(url: string, data?: object): Promise<T> {
    return this.axiosInstance.delete(url, { params: data })
  }
}

export const request = new MyAxios(axiosBaseOptions)
