import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderColor: "",
  borderRadius: {
    small: "0.5rem",
    medium: "50rem"
  },
  boxShadow: "rgba(99,121,255,0.5)",
  palette: {
    common: {
      black: "#555",
      white: "#FFF"
    },
    primary: {
      main: "#4761FF",
      darker: "#3c52d9",
      light: ""
    },
    secondary: {
      main: "#1C2035"
    }
  }
}

/* inspiration : https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3 */