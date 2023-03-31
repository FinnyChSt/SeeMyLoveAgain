import { useState } from "react";
import "./App.css";
import HeartLogoFilled from "./assets/heart-svg-red.svg";
import HeartLogoOutline from "./assets/heart-outlined-svg.svg";
import avi from "./IMG_20221109_211721_174.jpg";
import avi2 from "../src/assets/IMG_20230112_230338_050.jpg";
import {
  Avatar,
  AvatarWrapper,
  Background,
  ButtonIcon,
  ButtonWrapperLeft,
  ButtonWrapperRight,
  CountdownDays,
  CountdownHours,
  HeartListContainer,
  HeartSvg,
  LiveCountDown,
  PageWrapper,
  Subtitle,
  Title,
  WeekCounter,
} from "./App.styledComponents";

function App() {
  const arrival = new Date(2023, 3, 18, 10, 35).getTime();
  const startDate = new Date(2023, 2, 23, 8, 20).getTime();
  const dayWeMet = new Date(2022, 9, 27).getTime();
  const currentDate = Date.now();
  const [timeLeft, setTimeLeft] = useState(arrival - currentDate);
  const [shownAvatar, setShownAvatar] = useState(avi);
  const daysBetween = (arrival - startDate) / (1000 * 60 * 60 * 24);
  const staticDaysLeft = (arrival - currentDate) / (1000 * 60 * 60 * 24);
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
  const weeksWeKnowEachOther = Math.floor(
    (currentDate - dayWeMet) / (1000 * 60 * 60 * 24 * 7)
  );
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
      HeartList.push(
        <HeartSvg src={HeartLogoFilled} key={`${heart}-filled`} />
      );
    }
    for (let heart = 0; heart < staticDaysLeft - 1; heart++) {
      HeartList.push(
        <HeartSvg src={HeartLogoOutline} key={`${heart}-outline`} />
      );
    }
    return <>{HeartList}</>;
  };
  const pictureList = [avi, avi2];
  const changeAvatarLeft = () => {
    const index = pictureList.indexOf(shownAvatar);
    if (index === 0) {
      setShownAvatar(pictureList[pictureList.length - 1]);
    } else {
      setShownAvatar(pictureList[index - 1]);
    }
  };
  const changeAvatarRight = () => {
    const index = pictureList.indexOf(shownAvatar);
    if (index === pictureList.length - 1) {
      setShownAvatar(pictureList[0]);
    } else {
      setShownAvatar(pictureList[index + 1]);
    }
  };
  const IconButton = ({
    icon,
    onClick,
  }: {
    icon: any;
    onClick: () => void;
  }) => {
    return (
      <ButtonIcon onClick={onClick}>
        <HeartSvg src={icon} />
      </ButtonIcon>
    );
  };

  return (
    <Background>
      <PageWrapper>
        <Title>{"Time until I can hold my Ana in my arms again"}</Title>
        <CountdownDays>{`Days until I see my Love again:${daysLeft}`}</CountdownDays>
        <CountdownHours>{`Hours until I can finally see my Love again ${hoursLeft}`}</CountdownHours>
        <WeekCounter>
          {`🌹 Weeks since we first met: ${weeksWeKnowEachOther} 🌹`}
        </WeekCounter>
        <Subtitle>
          <AvatarWrapper>
            <ButtonWrapperLeft>
              <IconButton
                icon={HeartLogoFilled}
                onClick={changeAvatarLeft}
                key={"clickLeft"}
              />
            </ButtonWrapperLeft>
            <Avatar src={shownAvatar}></Avatar>
            <ButtonWrapperRight>
              <IconButton
                icon={HeartLogoFilled}
                onClick={changeAvatarRight}
                key={"clickRight"}
              />
            </ButtonWrapperRight>
          </AvatarWrapper>
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
