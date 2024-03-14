// import { Note } from "../../types";

const baseURL: string = import.meta.env.BASE_URL

export const getNotes = async () => {
  const response = await fetch(`${baseURL}/notes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
  const data = await response.json()
  return data
}
