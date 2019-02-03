import React, { Fragment } from "react";
import { css, Global } from "@emotion/core";

const LayoutMap = {
  "/": css`
    html,
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Helvetica, Arial, sans-serif;
    }
  `,
  "/hello": css`
    body {
      display: flex;
      justify-content: center;
      margin: 0;
      background: darkslategrey;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Helvetica, Arial, sans-serif;
    }
  `
};

const Layout = ({ children, path }) => (
  <Fragment>
    <Global styles={LayoutMap[path]} />
    {children}
  </Fragment>
);

export default Layout;
