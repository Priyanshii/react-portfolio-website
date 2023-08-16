import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "React Developer",
          "MERN Stack Developer",
        ],
      deleteSpeed: 60,
      loop: true,
      autoStart: true,
    }}/>
  );
}

export default Type;
