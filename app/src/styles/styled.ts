import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const slide = (X = 1387.96, windowx = 100) => keyframes`
    0% {
        transform: translate(${windowx}px);
    }
    100% {
        transform: translate(-${X}px); 
    }
`;

interface BackgroundProps {
  height: number;
  width: number;
  windowWidth: number;
}

export const StyledBackgroundLogo = styled.div<BackgroundProps>`
  animation: ${(props) => slide(props.width, props.windowWidth)} 35s linear
    infinite;
  background: url("/assets/Slice.svg") repeat-x;
  background-size: cover;
  height: ${(props) => props.height}px;
  left: 0;
  margin: 0 0 0 0;
  position: fixed;
  top: 0;
  width:${(props) => props.width}px;
`;
