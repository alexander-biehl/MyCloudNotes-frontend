import { useLoaderData } from 'react-router-dom'

export default function HealthCheck() {
  const success: string = useLoaderData() as string
  return (
    <>
      <p>I'm a health check!</p>
      <p>Healt Check was {success}</p>
    </>
  )
}
