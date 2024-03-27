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
  VisuallyHiddenInput,
} from '@chakra-ui/react'
import { Form, useLoaderData, useNavigate } from 'react-router-dom'
import { NoteResponse } from '../../network/api/types'

/**
 *
 * @returns Form for Editing a note record
 */
export default function EditNote() {
  const { note } = useLoaderData() as NoteResponse
  const navigate = useNavigate()

  return (
    <>
      <Form method="post" id="contact-form">
        <Card size="lg" height="95vh">
          <CardHeader>
            <Heading as="h1">
              <FormControl>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input id="title" name="title" placeholder="Title" type="text" defaultValue={note.title} />
              </FormControl>
            </Heading>
          </CardHeader>
          <CardBody>
            <FormControl>
              <FormLabel htmlFor="content">Content</FormLabel>
              <Textarea id="content" name="content" placeholder="Lorem Ipsum" defaultValue={note.content} />
            </FormControl>
            <VisuallyHiddenInput id="id" name="id" defaultValue={note.id} />
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button variant="solid" colorScheme="teal" type="submit">
                Save
              </Button>
              <Button variant="outline" colorScheme="red" type="button" onClick={() => navigate(-1)}>
                Cancel
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Form>
    </>
  )
}
