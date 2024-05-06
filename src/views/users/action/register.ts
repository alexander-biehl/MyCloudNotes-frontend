import { redirect } from 'react-router-dom'
// TODO create UserService
// TODO create User type
import type { ActionFunction } from 'react-router-dom'

export const registerUserAction: ActionFunction = async (/*{ request }: { request: Request }*/) => {
  // get the key:value formdata from the request
  // const formData: FormData = await request.formData()

  // populate user object from the form data pairs
  // const toRegister = {}
  // formData.forEach((value: FormDataEntryValue, key: string) => {
  //     toRegister[key /*as keyof User*/] = value as string
  // })
  // const user: User = awaite userService.registerUser(toRegister)
  // if no id or failure response, throw error
  /*if (!user.id) {
        throw new Response('', {
            status: 500,
            statusText: 'An error occurred registering'
        })
    }*/
  // otherwise redirect to home
  return redirect(`/`)
}

export const loginUserAction: ActionFunction = async (/*{ request }: { request: Request }*/) => {
  // TODO login with json payload, retrieve the token and store in localStorage?
}
