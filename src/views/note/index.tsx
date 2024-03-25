import { useLoaderData } from 'react-router-dom'
import type { Note } from '../../types'
import type { NoteResponse } from '../../network/api/types'
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react'

export default function Note() {
  const { note } = useLoaderData() as NoteResponse

  return (
    <>
      <Card size="lg" height="95vh">
        <CardHeader>
          <Heading as="h1">{note.title}</Heading>
        </CardHeader>
        <CardBody>{note.content}</CardBody>
        <CardFooter>
          <ButtonGroup>
            <Button variant="solid" colorScheme="teal">
              Edit
            </Button>
            <Button variant="outline" colorScheme="red">
              Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}
