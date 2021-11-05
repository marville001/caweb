import React from "react";
import "../styles/events.scss";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import { tableCellClasses } from '@mui/material/TableCell';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    fontSize:"16px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const EventsAndActivities = () => {
  return (
    <div className="events-containers">
      <div className="container eventss-container">
        <h2 style={{ margin: "30px", textAlign: "center" }}>
          Weekly Activities
        </h2>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%", minWidth:"500px" }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Activity</StyledTableCell>
                <StyledTableCell>Day</StyledTableCell>
                <StyledTableCell>Time</StyledTableCell>
                <StyledTableCell>Venue</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                <TableRow key={e}>
                  <StyledTableCell>{e}</StyledTableCell>
                  <StyledTableCell>jhhddjh</StyledTableCell>
                  <StyledTableCell>jhhddjh</StyledTableCell>
                  <StyledTableCell>jhhddjh</StyledTableCell>
                  <StyledTableCell>jhhddjh</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default EventsAndActivities;
