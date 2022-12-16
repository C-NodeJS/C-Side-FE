import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

export default function RoomTableHead({ headLabels }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        {headLabels.map((head) => {
          return (
            <TableCell key={head.id} align={head.alignRight ? "right" : "left"}>
              <TableSortLabel>{head.label}</TableSortLabel>
            </TableCell>
          );
        })}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
}
