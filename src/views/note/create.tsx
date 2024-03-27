import { Button, ButtonGroup, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { Form } from 'react-router-dom'

/**
 *
 * @returns Form for creating new note records
 */
export default function CreateNote() {
  return (
    <>
      <Form id="note-form" method="post" action="create">
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" name="title" placeholder="Title" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea id="content" name="content" placeholder="Lorem Ipsum" />
        </FormControl>
        <ButtonGroup>
          <Button variant={'solid'} colorScheme="teal" type="submit">
            Submit
          </Button>
        </ButtonGroup>
      </Form>
    </>
  )
}
