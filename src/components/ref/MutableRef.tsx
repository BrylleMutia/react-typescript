import React, { useState, useEffect, useRef } from "react";

const MutableRef = () => {
   const [timer, setTimer] = useState(0);
   const intervalRef = useRef<number | null>(null);

   const stopTimer = () => {
      if (intervalRef.current) {
         window.clearInterval(intervalRef.current);
      }
   };

   useEffect(() => {
      // setinterval returns a numeric ID for interval
      intervalRef.current = window.setInterval(() => {
         setTimer((timer) => timer + 1);
      });

      // cleanup function
      // function runs when the component unmounts
      return () => {
         stopTimer();
      };
   }, []);

   return (
      <div>
         HookTimer - {timer} -<button onClick={stopTimer}>Stop Timer</button>
      </div>
   );
};

export default MutableRef;
