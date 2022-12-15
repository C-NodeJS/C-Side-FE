import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, styled, Stack, Link, Typography } from "@mui/material";

const RoomImgStyle = styled('img')({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
})

export default function RoomCard(props) {
  const { room } = props;
  const { name, image } = room;
  const linkTo = `/admin/rooms/${name}`;
  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        <RoomImgStyle alt={name} src={image} />
      </Box>

      <Stack>
        <Link to={linkTo} component={RouterLink} color="inherit">
          <Typography variant="subtitle2">
            {name}
          </Typography>
        </Link>
      </Stack>
      {/* <div>{room.name}</div> */}
    </Card>
  )
}