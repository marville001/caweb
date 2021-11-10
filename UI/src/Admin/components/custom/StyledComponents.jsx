import { styled } from "@mui/material";

const MainContainer = styled("div")(({ theme }) => ({
  padding: "20px",
  [theme.breakpoints.up("md")]: {
    padding: "24px 30px",
  },
}));

export { MainContainer };
