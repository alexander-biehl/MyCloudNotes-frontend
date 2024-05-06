import { Button, ButtonGroup, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Form } from 'react-router-dom'

/**
 * @returns Form for registering new Users
 */
export const RegisterUser = () => {
  return (
    <>
      <Form id="user-register" method="post" action="register">
        <FormControl>
          <FormLabel htmlFor="username">User name</FormLabel>
          <Input id="username" name="username" placeholder="abc123" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" name="password" type="password" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
          <Input id="confirm_password" name="confirm_password" type="password" />
        </FormControl>
        <ButtonGroup>
          <Button variant={'solid'} colorScheme={'teal'} type={'submit'}>
            Submit
          </Button>
        </ButtonGroup>
      </Form>
    </>
  )
}

export const LoginUser = () => {
  return (
    <>
      <Form id="user-register" method="post" action="register">
        <FormControl>
          <FormLabel htmlFor="username">User name</FormLabel>
          <Input id="username" name="username" placeholder="abc123" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" name="password" type="password" />
        </FormControl>
        <ButtonGroup>
          <Button variant={'solid'} colorScheme={'teal'} type={'submit'}>
            Submit
          </Button>
        </ButtonGroup>
      </Form>
    </>
  )
}
