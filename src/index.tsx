import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/globalstyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename="growmark">
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
