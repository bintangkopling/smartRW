import React from "react";
import { Box, Card, CardContent, Typography, Container } from "@mui/material";

const detailTable = () => {
  return (
    <div>
      <Container
        maxWidth="md"
        sx={{
          maxWidth: "1200px", marginTop: 2,marginBottom:2, bgcolor: "#EFEFEF",
          padding: 1, borderRadius: "10px",
        }}>
        <Box
          sx={{
            display: "flex", justifyContent: "center",
            alignContent: "center",
          }}>
          <h3 style={{ marginBottom: "0" }}>Detail Warga</h3>
        </Box>
        <Card sx={{ maxWidth: 800, margin: "20px auto", borderRadius: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex", flexDirection: "column",
                textAlign: "start", marginTop: 1,
              }}>
              <Typography variant="body1" color="#333333">
                Nama : Farrel Savero Suta
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex", flexDirection: "column",
                textAlign: "start", marginTop: 1,
              }}>
              <Typography variant="body1" color="#333333">Lahir : 1 Januari 2000</Typography>
              <Typography variant="body1" color="#333333">Lokasi : Bekasi</Typography>
              <Typography variant="body1" color="#333333">
                Kepribadian : orangnya baik,pintar dan suka menolong</Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default detailTable;
