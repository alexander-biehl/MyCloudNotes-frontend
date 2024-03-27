import { Outlet /*useNavigation*/ } from 'react-router-dom'
import SimpleSideBar from '../../components/Sidebar'

export default function Root() {
  // const navigation = useNavigation();

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
