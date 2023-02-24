import { useState } from "react";
import "./App.css";
import HeartLogoFilled from "./assets/heart-svg-red.svg";
import HeartLogoOutline from "./assets/heart-outlined-svg.svg";
import avi from "./IMG_20221109_211721_174.jpg";
import {
  Avatar,
  Background,
  CountdownDays,
  CountdownHours,
  HeartListContainer,
  HeartSvg,
  LiveCountDown,
  PageWrapper,
  Subtitle,
  Title,
} from "./App.styledComponents";

function App() {
  const arrival = new Date(2023, 2, 10, 20, 10).getTime();
  const startDate = new Date(2023, 1, 24, 20, 10).getTime();

  const [timeLeft, setTimeLeft] = useState(arrival - Date.now());

  const daysBetween = (arrival - startDate) / (1000 * 60 * 60 * 24);
  const staticDaysLeft = (arrival - Date.now()) / (1000 * 60 * 60 * 24);
  const daysPass = daysBetween - staticDaysLeft;
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
  const Hearts = () => {
    let HeartList = [];
    for (let heart = 0; heart < daysPass; heart++) {
      HeartList.push(<HeartSvg src={HeartLogoFilled} key={heart} />);
    }
    for (let heart = 0; heart < staticDaysLeft - 1; heart++) {
      HeartList.push(<HeartSvg src={HeartLogoOutline} key={heart} />);
    }
    return <>{HeartList}</>;
  };
  return (
    <Background>
      <PageWrapper>
        <Title>{"Time until I can hold my Ana in my arms again"}</Title>
        <CountdownDays>{`Days until I see my Love again:${daysLeft}`}</CountdownDays>
        <CountdownHours>{`Hours until I can finally see my Love again ${hoursLeft}`}</CountdownHours>
        <Subtitle>
          <Avatar src={avi}></Avatar>
        </Subtitle>
        <LiveCountDown>{`Countdown for Happiness : ${CountDown}`}</LiveCountDown>
        <HeartListContainer>
          <Hearts />
        </HeartListContainer>
      </PageWrapper>
    </Background>
  );
}

export default App;
