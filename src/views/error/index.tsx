import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

/**
 *
 * @returns Error page component displaying the statusText, if any
 */
export default function ErrorPage() {
  const error: unknown = useRouteError()
  console.log(error)

  // TODO make this nicer
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
