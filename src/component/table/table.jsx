import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Mata from "@mui/icons-material/VisibilityOutlined";
import { Container } from "@mui/material";

function createData(id, nama, tanggal, lokasi) {
  return { id, nama, tanggal, lokasi };
}

const rows = [
  createData(1, "Bintang", "1 jan", "Bekasi"),
  createData(2, "rapip", "1 jan", "Bekasi"),
  createData(3, "Aldo", "1 jan", "Bekasi"),
  createData(4, "hakam", "1 jan", "Bekasi"),
  createData(5, "farel", "1 jan", "Bekasi"),
];

export default function BasicTable() {
  return (
    <Container sx={{ maxWidth: "md" }}>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: 4,
          marginBottom: 2,
          fontFamily: "Montserrat, sans-serif",
          boxShadow: 5,
        }}
      >
        <Table sx={{ minWidth: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Tanggal</TableCell>
              <TableCell>Lokasi</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ border: 1 }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.tanggal}</TableCell>
                <TableCell>{row.lokasi}</TableCell>
                <TableCell>
                  <Mata sx={{ color: "#00A9AD", cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
