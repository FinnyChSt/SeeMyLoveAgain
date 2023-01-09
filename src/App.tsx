import { useState } from "react";
import "./App.css";
import avi from "./IMG_20221109_211721_174.jpg";
import {
  Avatar,
  Background,
  CountdownDays,
  CountdownHours,
  LiveCountDown,
  PageWrapper,
  Subtitle,
  Title,
} from "./App.styledComponents";

function App() {
  const arrival = new Date(2023, 1, 11, 22, 30).getTime();

  const [timeLeft, setTimeLeft] = useState(0);
  setTimeout(() => {
    const actual = Date.now();
    setTimeLeft(() => arrival - actual);
  }, 1000);
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
  const CountDown = `${daysLeft}:${hours.toLocaleString("en-Us", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${minutes.toLocaleString("en-Us", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${seconds.toLocaleString("en-Us", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
  return (
    <Background>
      <PageWrapper>
        <Title>{"Time until I can hold my Ana in my arm"}</Title>
        <CountdownDays>{`Days until I see my Love again:${daysLeft}`}</CountdownDays>
        <CountdownHours>{`Hours until I can finally see my Love again ${hoursLeft}`}</CountdownHours>
        <Subtitle>
          <Avatar src={avi}></Avatar>
        </Subtitle>
        <LiveCountDown>{`Countdown for Happiness : ${CountDown}`}</LiveCountDown>
      </PageWrapper>
    </Background>
  );
}

export default App;
