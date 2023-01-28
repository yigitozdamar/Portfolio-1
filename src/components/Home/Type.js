import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "iOS Software Developer",
          "System Engineer",
          "Cessna T-182/UH-1/T-129 ATAK Helicopter Pilot",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
