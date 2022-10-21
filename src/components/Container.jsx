import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const container = ({ children }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={11} mt={10}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 350,
            }}
          >
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default container;
