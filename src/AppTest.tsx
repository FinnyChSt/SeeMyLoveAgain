import React from "react";
import { AirplaneIcon, IconsContainer } from "./App.styledComponents";

const AnimatedIcons = () => {
  return (
    <IconsContainer>
      <div>🇪🇪</div>
      <AirplaneIcon>🛩️</AirplaneIcon>
      <div>🇩🇪</div>
    </IconsContainer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Animated Icons</h1>
      <AnimatedIcons />
    </div>
  );
};

export default App;
