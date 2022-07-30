import React, { useState } from "react";
import "./Stopwatch.css";
import TimeBtn from "./Components/TimeBtn";

function Stopwatch() {
  const [stopwatchTime, setStopwatchTime] = useState(0);
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
            type="start"
            text="Start"
            handleClick={() => setStopwatchTime(() => stopwatchTime + 1)}
          />
        )}
        {stopwatchTime === 1 && (
          <>
            <TimeBtn
              type="stop"
              text="Stop"
              handleClick={() => setStopwatchTime(0)}
            />
            <TimeBtn type="time" text="00:00:00" />
            <TimeBtn
              type="pause"
              text="pause"
              handleClick={() => setStopwatchTime(2)}
            />
          </>
        )}
        {stopwatchTime === 2 && (
          <>
            <TimeBtn
              type="stop"
              text="Stop"
              handleClick={() => setStopwatchTime(0)}
            />
            <TimeBtn type="time" text="00:00:00" />
            <TimeBtn
              type="resume"
              text="Resume"
              handleClick={() => setStopwatchTime(1)}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Stopwatch;
