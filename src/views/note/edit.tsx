import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { Form, useLoaderData } from 'react-router-dom'
import { NoteResponse } from '../../network/api/types'

export default function EditNote() {
  const { note } = useLoaderData() as NoteResponse

  return (
    <>
      <Form method="post" id="contact-form">
        <Card size="lg" height="95vh">
          <CardHeader>
            <Heading as="h1">
              <FormControl>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input id="title" placeholder="Title" type="text" defaultValue={note.title} />
              </FormControl>
            </Heading>
          </CardHeader>
          <CardBody>
            <FormControl>
              <FormLabel htmlFor="content">Content</FormLabel>
              <Textarea id="content" placeholder="Lorem Ipsum" defaultValue={note.content} />
            </FormControl>
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button variant="solid" colorScheme="teal" type="submit">
                Save
              </Button>
              <Button variant="outline" colorScheme="red" type="button">
                Cancel
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Form>
    </>
  )
}
