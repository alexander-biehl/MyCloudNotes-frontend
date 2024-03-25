import { NavLink, useLoaderData } from 'react-router-dom'
import { NotesResponse } from '../../network/api/types'
import { SimpleGrid, Card, CardHeader, CardBody, Text } from '@chakra-ui/react'
import Paths from '../../router/paths'

export default function NotesList() {
  const { notes } = useLoaderData() as NotesResponse

  return (
    <>
      <SimpleGrid minChildWidth="100px" spacing="20px">
        {notes.map((note) => {
          return (
            <>
              <NavLink to={Paths.noteDetail.replace(':noteId', note.id)}>
                <Card key={note.id}>
                  <CardHeader>
                    <Text as="b">{note.title}</Text>
                  </CardHeader>
                  <CardBody>{note.content?.slice(0, 20) + '...'}</CardBody>
                </Card>
              </NavLink>
            </>
          )
        })}
      </SimpleGrid>
    </>
  )
}
