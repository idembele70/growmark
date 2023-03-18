import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  font-family: "Montserrat", "sans-serif";
  font-weight:400;
  line-height:1.5;
  background-color:#fff;
  color: #555;
}
* {
  box-sizing: border-box;
  margin:0;
}
h1 {
  font-family:"Roboto", "sans-serif";
  font-weight:700;
  line-height:1.2;
}
h2 {
  font-family:"Roboto", "sans-serif";
  font-weight:700;
  line-height:1.2;
}
h3 {
  font-family:"Roboto", "sans-serif";
  font-weight:600;
  line-height:1.2;
}
h4 {
  font-family:"Roboto", "sans-serif";
  font-weight:600;
  line-height:1.2;
  font-size:1.5rem;
}
h5 {
  font-family: "Roboto", "sans-serif";
  font-weight:500;
  font-size:1.25rem;
  line-height:1.2;
}
h6 {
  font-family: "Roboto", "sans-serif";
  font-weight:500;
  font-size:1.25rem;
  line-height:1.2;
}
a {
  text-decoration: none;
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
}
p {
  font-size:1rem;
  font-family: "Montserrat", "sans-serif";
  font-weight:400;
  line-height:1.5;
  font-size:1rem;
}
button {
  font-size:1rem;
  font-family: "Open Sans",sans-serif;
  line-height:1.5;
  font-weight:500;
  cursor:pointer;
  user-select:none;
}
input {
    font-family: "Open Sans",sans-serif;
    line-height:1.5;
}
`;

export default GlobalStyle;