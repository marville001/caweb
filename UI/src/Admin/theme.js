import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#50ac56",
      light: "#c6f3cd",
      dark: "#327b56",
    },
    secondary: {
      main: "#ffc342",
    },
  },
  components:{
    MuiButton:{
      variants:[
        {
          props:{variant:'contained'},
          style:{
            color:"#fff",
            textTransform: 'none',
          }
        }
      ]
    }
  }
});

export default theme;
