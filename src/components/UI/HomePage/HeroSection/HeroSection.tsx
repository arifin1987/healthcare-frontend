import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", direction: "row", my: 16 }}>
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />{" "}
        </Box>
        <Typography variant="h3" component="h1">
          Healtheir Hearts
        </Typography>
        <Typography variant="h3" component="h1">
          Comes from
        </Typography>
        <Typography color="primary.main" variant="h3" component="h1">
          Preventive Care
        </Typography>
        <Typography
          component="p"
          variant="h6"
          fontWeight={400}
          sx={{ width: "60%" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum
          modi iure delectus ratione? Maxime eaque tempore, dolores, commodi
          saepe itaque deserunt quos nobis omnis eum delectus ab voluptate.
          Provident.
        </Typography>
        <Button>Make Appointment</Button>
        <Button variant="outlined" sx={{ marginLeft: "5px" }}>
          Contact Us
        </Button>
      </Box>

      <Box>Right</Box>
    </Container>
  );
};

export default HeroSection;
