import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const Header = () => {
  return (
    <AppBar
      sx={{
        position: "static",
        bgcolor: "#fff",
        color: "#000000",
        minHeight: "50px",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <Box>
        <Container>MANTIS 2.0</Container>
      </Box>
    </AppBar>
  );
};
