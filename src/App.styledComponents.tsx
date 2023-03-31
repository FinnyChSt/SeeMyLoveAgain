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
  text-align: center;
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
  height: 200vh;
  width: 100vw;
`;

export const HeartSvg = styled.img`
  width: 32px;
  height: 32px;
`;

export const HeartListContainer = styled.div`
  padding-bottom: 12px;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ButtonWrapperLeft = styled.div`
  button {
    transform: rotate(90deg);
  }
`;
export const ButtonWrapperRight = styled.div`
  button {
    transform: rotate(-90deg);
  }
`;
export const ButtonIcon = styled.button`
  background: none;
  border: none;
  margin: 0 12px;
`;
export const WeekCounter = styled.h2`
  align-items: center;
  text-align: center;
  color: darkred;
`;

