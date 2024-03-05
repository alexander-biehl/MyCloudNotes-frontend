import { NavLink, Outlet /*useNavigation*/ } from 'react-router-dom'

export default function Root() {
  // const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">
        <h1>Menu</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={`notes/`}>All Notes</NavLink>
            </li>
            <li>
              <NavLink to={`categories/`}>Categories</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div id="detail" className={
                navigation.state === "loading" ? "loading" : ""
            }>
                <Outlet />
            </div> */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
