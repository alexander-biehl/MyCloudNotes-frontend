import { request } from '../../axios'
import type { ApiContract } from '../../axios'
import type { User } from '../../../types'

enum APIs {
  USERS = '/users',
  USER_BY_ID = '/users/:id',
  USER_BY_USERNAME = '/users/:username',
  REGISTER = '/users/register',
}

class UserService {
  private readonly api: ApiContract

  constructor(request: ApiContract) {
    this.api = request
  }

  async getUsers(): Promise<User[]> {
    return await this.api.get<User[]>(APIs.USERS)
  }

  async getUserById(id: string): Promise<User> {
    return await this.api.get<User>(APIs.USER_BY_ID.replace(':id', id))
  }

  async getUserByUsername(username: string): Promise<User> {
    return await this.api.get<User>(APIs.USER_BY_USERNAME.replace(':username', username))
  }

  async register(user: User): Promise<User> {
    return await this.api.post<User>(APIs.REGISTER, user)
  }
}

const userService = new UserService(request)
export default userService
