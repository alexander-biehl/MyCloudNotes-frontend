import { NavLink, useLoaderData } from 'react-router-dom'
import { NotesResponse } from '../../network/api/types'
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Text,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import Paths from '../../router/paths'
import CreateNote from '../note/create'

export default function NotesList() {
  const { notes } = useLoaderData() as NotesResponse
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* Simple grid of notes */}
      <SimpleGrid minChildWidth="100px" spacing="20px" id="notes-grid">
        {notes.map((note) => {
          return (
            <>
              <div key={note.id}>
                <NavLink to={Paths.noteDetail.replace(':noteId', note.id)}>
                  <Card>
                    <CardHeader>
                      <Text as="b">{note.title}</Text>
                    </CardHeader>
                    <CardBody>{note.content?.slice(0, 20) + '...'}</CardBody>
                  </Card>
                </NavLink>
              </div>
            </>
          )
        })}
      </SimpleGrid>
      {/* Floating Action button for new Note */}
      <Flex justifyContent="end" alignItems="end">
        <Button
          onClick={onOpen}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
          px={4}
          fontSize={'lg'}
          rounded={'full'}
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
          New
        </Button>
      </Flex>

      {/* Modal to create a new note, hidden by default */}
      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateNote />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" variant={'outline'} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
