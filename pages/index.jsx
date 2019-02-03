import React from "react";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/core";

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid darkgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 darkgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  padding: 1rem;
  margin: 3rem;
`;
const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;
const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

const Basic = styled.div`
  ${basicStyles};
`;

const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`;
const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`;

const LandingBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("/static/assets/images/landing-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const DynamicCounter = dynamic(() => import("../components/Counter.jsx"), {
  loading: () => <p>...</p>,
  ssr: false
});

export default () => {
  const [count, setCount] = React.useState(0);
  return (
    <LandingBackground>
      <Basic>
        <DynamicCounter />
      </Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
      <Animated animation={bounce}>Let's bounce.</Animated>
    </LandingBackground>
  );
};
