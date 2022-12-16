import { useEffect } from "react";
import RoomsTable from "../../../../components/Room/RoomsTable";
import { useAuth } from "../../../../hook";
import { useDispatch, useSelector } from "react-redux";
import { getPendingRooms } from "../../../../redux/slices/room";

export default function PendingRooms() {
  const { isAuthenticated } = useAuth();
  

  return (
    <div>
      <div>Pending room</div>
      <RoomsTable />
    </div>
  );
}
