import React, { useState } from "react";
import "./Stopwatch.css";
import TimeBtn from "./Components/TimeBtn";
import { Start, Stop, Resume, Pause } from "../Constants.jsx";

function Stopwatch() {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  // const [id, setId] = useState(0);
  const [secPassed, setSecPassed] = useState(0);
  const [timerId, setTimerId] = useState(null);
  // const startTimer = (_) => {
  //   setTimerId((_) => {
  //     setInterval(() => {
  //       setSecPassed((sec) => sec + 1);
  //     }, 1000);
  //   });
  // };
  const startTimer = (_) => {
    setTimerId((_) => {
      setInterval(() => {
        setSecPassed((sec) => sec + 1);
      }, 1000);
    });
    // setTimerId(tId);
  };
  // const startTimer = (_) => {
  //   setInterval(() => {
  //     setSecPassed((sec) => sec + 1);
  //   }, 1000);
  // };
  // const stopTimer = () => {
  //   clearInterval(timerId);
  // };
  const stopTimer = () => {
    clearInterval(timerId);
    // setSecPassed(0);
  };

  return (
    <>
      <div className="container">
        {/* <div className="text">Start</div>
        <div className="text">Stop</div>
        <div className="text">pause</div>
        <div className="text">Resume</div>
        <div className="text">00:00:00</div> */}
        {stopwatchTime === 0 && (
          <TimeBtn
            type={Start.type}
            text={Start.text}
            handleClick={() => {
              setStopwatchTime(() => stopwatchTime + 1);
              startTimer();
            }}
          />
        )}
        {stopwatchTime === 1 && (
          <>
            <TimeBtn
              type={Stop.type}
              text={Stop.text}
              handleClick={() => {
                stopTimer();
                // setStopwatchTime(0);
              }}
            />
            <TimeBtn type="time" text={secPassed} />
            <TimeBtn
              type={Pause.type}
              text={Pause.text}
              handleClick={() => setStopwatchTime(2)}
            />
          </>
        )}
        {stopwatchTime === 2 && (
          <>
            <TimeBtn
              type={Stop.type}
              text={Stop.text}
              handleClick={() => setStopwatchTime(0)}
            />
            <TimeBtn type="time" text="00:00:00" />
            <TimeBtn
              type={Resume.type}
              text={Resume.text}
              handleClick={() => setStopwatchTime(1)}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Stopwatch;
