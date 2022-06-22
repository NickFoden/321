import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const slide = (X = 1387.96, windowx = 100) => keyframes`
    0% {
        transform: translate(${windowx}px);
    }
    100% {
        transform: translate(-${X}px); /* The image width */
    }
`;

interface BackgroundProps {
  height: number;
  width: number;
  windowWidth: number;
}

export const StyledBackgroundLogo = styled.div<BackgroundProps>`
  animation: ${(props) => slide(props.width, props.windowWidth)} 30s linear
    infinite;
  background: url("/assets/WORDMARK.svg") repeat-x;
  background-size: cover;
  height: calc(${(props) => props.height}px + 8vh);
  left: 0;
  margin-top:-4vh;
  position: fixed;
  top: 0;
  width: ${(props) => props.width}px;
`;
