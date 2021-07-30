import React from "react";

const CountDown = ({ hours = 0, minutes = 0, seconds = 10 }) => {
    const [paused, setPaused] = React.useState(true);
    const [over, setOver] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
  
    const tick = () => {
      if (paused || over) return;
      if (h === 0 && m === 0 && s === 0) setOver(true);
      else if (m === 0 && s === 0) {
        setTime([h - 1, 59, 59]);
      } else if (s == 0) {
        setTime([h, m - 1, 59]);
      } else {
        setTime([h, m, s - 1]);
      }
    };
  
    const reset = () => {
      setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
      setPaused(false);
      setOver(false);
    };
  
    React.useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    });
  
    return (
      <div>
        <p>{s.toString().padStart(2, '0')}</p>
        <div>{over ? "Time's up!" : ''}</div>
        {!over ? <button onClick={() => setPaused(!paused)}>
          {paused ? 'start' : 'pause'}
        </button> : null}
        {over ? <button onClick={() => reset()}>Restart</button> : null}
      </div>
    );
  };

  export default CountDown;