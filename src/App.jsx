// src/App.jsx
import React from "react";
import DiwaliCard from "./components/DiwaliCard";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

function App() {
  const [width, height] = useWindowSize();

  return (
    <div className="App relative">
      <Confetti
        width={width}
        height={height}
        colors={["#FFD700", "#FF8C00", "#FF4500", "#FFC107", "#FF6347"]}
      />
      <DiwaliCard />
    </div>
  );
}

export default App;
