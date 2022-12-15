import RoomsList from "../../../../components/Room/RoomsList"

const rooms = [
  {
    id: '1',
    name: 'Phong 1',
    address: 'Dia chi 1',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '2',
    name: 'Phong 2',
    address: 'Dia chi 2',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '3',
    name: 'Phong 3',
    address: 'Dia chi 3',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  {
    id: '4',
    name: 'Phong 4',
    address: 'Dia chi 4',
    price: '120$',
    image: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  },
  
  
];

export default function AllRooms() {
  return (
    <div>All Rooms
      <RoomsList rooms={rooms} />
    </div>
  )
}