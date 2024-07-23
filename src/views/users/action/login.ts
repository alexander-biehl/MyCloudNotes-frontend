import { ActionFunction, redirect } from 'react-router-dom'
import authService from '../../../network/api/service/AuthService'

export const loginUserAction: ActionFunction = async ({ request }: { request: Request }) => {
  const formData: FormData = await request.formData()

  const username: string = formData.get('username') as string
  const password: string = formData.get('password') as string

  const isLoggedIn: boolean = await authService.login(username, password)
  if (!isLoggedIn) {
    throw new Response('', {
      status: 500,
      statusText: 'An Error Occurred loggin in',
    })
  }
  return redirect('/')
}
