import styled from "styled-components";
import heartBackground from "./assets/heartbg.jpeg";

export const LiveCountDown = styled.h2`
  color: darkred;
`;
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 10%;
  left: 25%;
  position: fixed;
`;
export const Title = styled.h1`
  color: red;
`;
export const CountdownDays = styled.h2`
  color: blue;
`;
export const CountdownHours = styled.h2`
  color: blue;
`;
export const Subtitle = styled.div``;
export const Avatar = styled.img`
  border-radius: 20px;
  height: 400px;
  width: 300px;
`;

export const Background = styled.div`
  background: url(${heartBackground});
  height: 100vw;
  width: 100vw;
`;
