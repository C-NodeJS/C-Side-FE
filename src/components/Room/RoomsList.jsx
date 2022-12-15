import { Grid } from "@mui/material";
import RoomCard from "./RoomCard";

export default function RoomsList(props) {
  const { rooms } = props;

  return (
    <Grid container spacing={3}>
      {rooms.map((room) => {
        return (
          <Grid key={room.id} item xs={12} sm={6} md={3}>
            <RoomCard room={room} />
          </Grid>
        );
      })}
    </Grid>
  );
}
