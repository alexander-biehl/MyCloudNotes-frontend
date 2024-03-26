import type { ActionFunctionArgs, ParamParseKey, Params } from 'react-router-dom'
import Paths from '../router/paths'

export interface Note {
  id: string
  title: string
  content?: string
}

/**
 * For use when defining React Router loader functions
 */
export interface LoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.noteDetail>>
}

export type NoteParams = {
  title: string
  content: string
}
