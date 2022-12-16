const rooms = {
  id: "rooms",
  title: "Rooms",
  child: [
    {
      id: 'list',
      title: 'List Rooms',
      type: '',
      url: '/admin/rooms/getAlls',
    },
    {
      id: 'pendingRooms',
      title: 'Pending Rooms',
      type: '',
      url: '/admin/rooms/pendingRooms',
    }
  ]
}

export default rooms;