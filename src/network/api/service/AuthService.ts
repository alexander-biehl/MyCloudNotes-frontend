import { request } from '../../axios'
import { TokenResponse } from '../../../types'
import { ApiContract } from '../../axios'

enum APIs {
  LOGIN = '/auth/login',
  REFRESH_TOKEN = '/auth/refreshtoken',
}

class AuthService {
  private readonly api: ApiContract

  constructor(request: ApiContract) {
    this.api = request
  }

  async login(username: string, password: string): Promise<TokenResponse> {
    const tokenResponse: TokenResponse = await this.api.post<TokenResponse>(APIs.LOGIN, {
      username: username,
      password: password,
    })
    const { accessToken, refreshToken } = tokenResponse
    window.localStorage.setItem('accessToken', accessToken)
    window.localStorage.setItem('refreshToken', refreshToken)
    return Promise.resolve(tokenResponse)
  }
}

const authService = new AuthService(request)
export default authService
