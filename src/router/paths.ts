/**
 * List of paths in the app
 *
 * @param :noteId {string | empty}
 */
const Paths = {
  home: '/',
  healthCheck: '/health-check',
  // notes endpoints
  noteList: '/notes',
  noteDetail: '/notes/:noteId',
  noteCreate: '/notes/create',
  noteDestroy: '/notes/:noteId/destroy',
  noteEdit: '/notes/:noteId/edit',

  // user endpoings
  userList: '/users',
  userDetail: '/users/:userId',
  userRegister: '/users/register',
  userLogin: '/auth/login',
  refreshToken: '/auth/refreshtoken',
}

export default Paths
