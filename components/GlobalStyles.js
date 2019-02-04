import React from "react";
import { css, Global } from "@emotion/core";

const globalStyles = css`
  html {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24px;
  }
  * {
    box-sizing: border-box;
  }
`;

export default () => <Global styles={globalStyles} />;
