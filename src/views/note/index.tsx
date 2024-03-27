import { Form, useLoaderData } from 'react-router-dom'
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
            <Form action="edit">
              <Button variant="solid" colorScheme="teal" type="submit">
                Edit
              </Button>
            </Form>
            <Form
              method="post"
              action="destroy"
              onSubmit={(event) => {
                if (!confirm('Are you sure you want to delete this note?')) {
                  event.preventDefault()
                }
              }}
            >
              <Button variant="outline" colorScheme="red" type="submit">
                Delete
              </Button>
            </Form>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}
