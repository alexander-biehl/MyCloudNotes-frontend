import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: unknown = useRouteError()
  console.log(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isRouteErrorResponse(error) ? error.statusText : error + ''}</i>
      </p>
    </div>
  )
}
