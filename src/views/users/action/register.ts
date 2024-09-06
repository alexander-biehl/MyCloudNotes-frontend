import { redirect } from 'react-router-dom'
import type { ActionFunction } from 'react-router-dom'
import userService from '../../../network/api/service/UserService'
import { User } from '../../../types'
import Paths from '../../../router/paths'

export const registerUserAction: ActionFunction = async ({ request }: { request: Request }) => {
  // get the key:value formdata from the request
  const formData: FormData = await request.formData()

  // populate user object from the form data pairs
  const toRegister: User = {
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  }

  const user: User = await userService.register(toRegister)
  // if no id or failure response, throw error
  if (!user.id) {
    throw new Response('', {
      status: 500,
      statusText: 'An error occurred registering',
    })
  }
  // otherwise redirect to home
  return redirect(Paths.userLogin)
}
