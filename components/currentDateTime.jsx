"use client";
import moment from "moment";
import { useEffect, useState } from "react";

const CurrentDateTime = () => {
  const [currentTime, setCurrentTime] = useState(
    moment().format("dddd, MMMM D, YYYY  hh:mm:ss A")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("dddd, MMMM D, YYYY  hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Suppress hydration warning for time-dependent content */}
      <p suppressHydrationWarning={true} className="text-white">
        {currentTime}
      </p>
    </>
  );
};

export default CurrentDateTime;
