import type { ActionFunctionArgs, ParamParseKey, Params } from 'react-router-dom'
import Paths from '../router/paths'

export interface Note {
  id: string
  title: string
  content?: string
}

export interface User {
  id?: string
  username: string
  password?: string
  active?: boolean
}

export interface NoteParams {
  title: string
  content: string
}

/**
 * Type definition for Action function params
 */
export interface ActionParams extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.noteDetail>>
}

/**
 * For use when defining React Router loader functions
 */
export interface LoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.noteDetail>>
}

export interface TokenRequest {
  data: TokenRequestData
}

export interface TokenRequestData {
  accessToken: string
  refreshToken: string
}

export interface TokenResponse {
  accessToken: string
  refreshToken: string
}
