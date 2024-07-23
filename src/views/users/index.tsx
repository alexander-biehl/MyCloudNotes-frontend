import { Text, Flex, Stack, Button, Spacer } from '@chakra-ui/react'
import Paths from '../../router/paths'
import { NavLink } from 'react-router-dom'

export default function UserList() {
  // TODO need to check if user is logged in

  return (
    <>
      <Text>Welcome to the Users!</Text>
      <Flex justifyContent="center" align="end" height={'25vh'}>
        <Stack w={'15%'} h={'90%'}>
          <NavLink to={Paths.userRegister}>
            <Button
              flex={1}
              // style={{ position: 'fixed', bottom: '40px' }}
              px={4}
              fontSize={'lg'}
              rounded={'md'}
              bg={'blue.400'}
              color={'white'}
              variant={'solid'}
              boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              Register
            </Button>
          </NavLink>
          <Spacer />
          <NavLink to={Paths.userLogin}>
            <Button
              flex={1}
              // style={{ position: 'fixed', bottom: '20px' }}
              px={4}
              variant={'outline'}
              fontSize={'lg'}
              rounded={'md'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              Login
            </Button>
          </NavLink>
        </Stack>
      </Flex>
    </>
  )
}
