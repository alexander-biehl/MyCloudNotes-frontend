import { Outlet } from 'react-router-dom'
import SimpleSideBar from '../../components/Sidebar'

/**
 *
 * @returns Root element, containing the sidebar and the Router Outlet
 */
export default function Root() {
  return (
    <>
      <SimpleSideBar>
        <div id="detail">
          <Outlet />
        </div>
      </SimpleSideBar>
    </>
  )
}
