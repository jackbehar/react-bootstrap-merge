// eslint-disable-next-line no-unused-vars
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

export default function UXPinWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
