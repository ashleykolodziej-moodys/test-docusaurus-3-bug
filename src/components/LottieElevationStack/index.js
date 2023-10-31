import React, { useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import lottieFile from "./elevation-stack.json";

export function LottieElevationStack(props) {
  const lottieRef = useRef();
  const [lottie, setLottie] = useState();

  return (
    <div {...props}>
      <Player
        id="lottie-elevation-stack"
        ref={lottieRef}
        lottieRef={(instance) => {
          setLottie(instance);
        }}
        src={lottieFile}
        onEvent={(event, instance) => {
          if (event === "load") {
            create({
              mode: "scroll",
              player: lottie,
              actions: [
                {
                  visibility: [0, 0.5],
                  type: "seek",
                  frames: [0, 60],
                },
              ],
            });
          }
        }}
      />
    </div>
  );
}
