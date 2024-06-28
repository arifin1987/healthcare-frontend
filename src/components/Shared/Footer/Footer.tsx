import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Typography color="#fff" component={Link} href="/consultation">
            facebook
          </Typography>
          <Typography color="#fff">Twiter</Typography>
          <Typography color="#fff">Instagram</Typography>
          <Typography color="#fff">Youtube</Typography>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          py={3}
        >
          <Typography component="p" color="white">
            &copy; 2024 Health Care. All Rights Reserved
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            <Box component="span" color="primary.main">
              H
            </Box>
            ealth Care
          </Typography>
          <Typography component="p" color="white">
            Privacy policy; terms and conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
