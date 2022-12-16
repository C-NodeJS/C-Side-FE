import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  styled,
  Container,
  Card,
  TablePagination,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import RoomTableHead from "../Table/RoomTableHead";
import RoomTableToolbar from "../Table/RoomTableToolbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeStatusRoom, getPendingRooms } from "../../redux/slices/room";
import { APPROVE_ROOM, REJECT_ROOM } from "../../constants/index";

const TABLE_HEAD = [
  { id: "roomName", label: "Room Name", alignRight: false },
  { id: "ownerRoom", label: "Room Owner", alignRight: false },
  { id: "price", label: "Price", alignRight: false },
  { id: "status", label: "Room status", alignRight: false },
  { id: "actions", label: "Actions", alignRight: false },
];

const ThumbImgStyle = styled("img")(({ theme }) => ({
  width: 64,
  height: 64,
  objectFit: "cover",
  margin: theme.spacing(0, 2),
  borderRadius: theme.shape.borderRadiusSm,
}));

export default function RoomsTable() {
  const [page, setPage] = useState(null);
  const [perPage, setPerPage] = useState(null);
  const dispatch = useDispatch();
  const { pendingRooms } = useSelector((state) => state.room);

  const handleApproveRoom = (id, status_id) => {
    dispatch(changeStatusRoom(id, status_id));
  };

  useEffect(() => {
    dispatch(getPendingRooms());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth="lg">
        <Card>
          <RoomTableToolbar />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2 }}
          >
            <TextField
              placeholder="Per Page"
              type="number"
              value={perPage}
              onChange={(e) => setPerPage(e.target.value)}
            />
            <TextField
              placeholder="Page"
              type="number"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </Stack>

          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <RoomTableHead headLabels={TABLE_HEAD} />
              <TableBody>
                {pendingRooms.map((room) => {
                  return (
                    <TableRow key={room.id} hover tabIndex={-1}>
                      <TableCell padding="checkbox">
                        <Checkbox></Checkbox>
                      </TableCell>

                      <TableCell component="th" scope="row" padding="none">
                        <Box
                          sx={{
                            py: 2,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ThumbImgStyle alt={room.name} src={room.image} />
                          <Typography variant="subtitle2">
                            {room.name}
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>{room.owner}</TableCell>
                      <TableCell>{room.price}$</TableCell>
                      <TableCell>{room.status}</TableCell>
                      <TableCell align="right">
                        <Box
                          sx={{
                            py: 2,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            onClick={handleApproveRoom(room.id, APPROVE_ROOM)}
                            variant="outlined"
                          >
                            Approve
                          </Button>
                          <Button
                            onClick={handleApproveRoom(room.id, REJECT_ROOM)}
                            variant="contained"
                            color="error"
                          >
                            Reject
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </div>
  );
}
