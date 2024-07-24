import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

import { axiosBaseOptions } from './axios-setup'
import Paths from '../../router/paths'
import { TokenRequest } from '../../types'

export interface ApiContract {
  get<T>(url: string, data?: object): Promise<T>
  post<T>(url: string, data?: object, params?: object): Promise<T>
  put<T>(url: string, data?: object, params?: object): Promise<T>
  delete<T>(url: string, data?: object): Promise<T>
  healthCheck(): Promise<string>
}

class MyAxios implements ApiContract {
  private readonly axiosInstance: AxiosInstance
  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    this.initInterceptors()
  }

  private initInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        console.log(`config: ${JSON.stringify(config)}`)
        if (config.url != Paths.userRegister && config.url != Paths.userLogin) {
          const token: string = this.getLocalAccessToken()
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
          }
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
        console.log(`response: ${JSON.stringify(response)}`)
        console.log(`data: ${JSON.stringify(data)}`)
        if (data instanceof Blob) {
          return response
        } else {
          return data
        }
      },
      async (error) => {
        console.log(`axios error`, error)
        const originalConfig = error.config

        if (error.response) {
          // If access token expired
          if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true

            try {
              const rs: TokenRequest = await this.refreshToken()
              const { accessToken, refreshToken } = rs.data
              window.localStorage.setItem('accessToken', accessToken)
              window.localStorage.setItem('refreshToken', refreshToken)
              this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

              return this.axiosInstance(originalConfig)
            } catch (_error: unknown) {
              if (_error instanceof AxiosError && _error.response && _error.response.data) {
                return Promise.reject(_error.response.data)
              }

              return Promise.reject(_error)
            }
          }

          if (error.response.status === 400) {
            console.log('400 error')
          } else if (error.response.status === 402) {
            console.log('402 error')
          } else if (error.response.status === 403) {
            console.log('403 error')
          }
        }

        return Promise.reject(error)
      },
    )
  }

  private getLocalAccessToken(): string {
    const accessToken = window.localStorage?.getItem('accessToken')
    if (accessToken == null) {
      throw new Error('Access Token Not Set')
    }
    return accessToken
  }

  private getLocalRefreshToken(): string {
    const refreshToken = window.localStorage.getItem('refreshToken')
    if (refreshToken == null) {
      throw new Error('Refresh Token Not Set')
    }
    return refreshToken
  }

  refreshToken<T>(): Promise<T> {
    return this.axiosInstance.post(Paths.refreshToken, {
      refreshToken: this.getLocalRefreshToken(),
    })
  }

  healthCheck(): Promise<string> {
    return this.axiosInstance.get(Paths.healthCheck, {})
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
