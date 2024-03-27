/**
 * List of paths in the app
 *
 * @param :noteId {string | empty}
 */
const Paths = {
  noteList: '/notes',
  noteDetail: '/notes/:noteId',
  noteCreate: '/notes/create',
  noteDestroy: '/notes/:noteId/destroy',
  noteEdit: '/notes/:noteId/edit',
}

export default Paths
