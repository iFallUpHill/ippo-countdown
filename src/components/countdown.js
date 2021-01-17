import React, { useEffect, useState } from "react";

function Countdown() {
    const getTimeLeft = () => {
      const endtime = 'January 18 2021 00:00:00 GMT-0800'
      const difference = Date.parse(endtime) - Date.parse(new Date());
      let timeLeft = {
        days: ('0' + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
        hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
        minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
        seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2),
      };

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
      const tick = setInterval(() => setTimeLeft(getTimeLeft), 1000); 
      return () => clearInterval(tick) 
    });

  return(
    <div className="flex justify-center items-start text-white text-shadow mb-8">
      <div className="flex flex-col mr-4 font-bold">
        <h1 className="text-4xl sm:text-8xl">{timeLeft.days}</h1>
        <h4 className="text-xl">days</h4>
      </div>
      <div className="mt-2 sm:mt-8">
        <h1 className="text-2xl md:text-4xl">{`//`}</h1>
      </div>
      <div className="flex flex-col mx-4 font-bold">
        <h1 className="text-4xl sm:text-8xl">{timeLeft.hours}</h1>
        <h4 className="text-xl">hours</h4>
      </div>
      <div className="mt-2 sm:mt-8">
        <h1 className="text-2xl md:text-4xl">{`//`}</h1>
      </div>
      <div className="flex flex-col mx-4 font-bold">
        <h1 className="text-4xl sm:text-8xl">{timeLeft.minutes}</h1>
        <h4 className="text-xl">minutes</h4>
      </div>
      <div className="mt-2 sm:mt-8">
        <h1 className="text-2xl md:text-4xl">{`//`}</h1>
      </div>
      <div className="flex flex-col ml-4 font-bold">
        <h1 className="text-4xl sm:text-8xl">{timeLeft.seconds}</h1>
        <h4 className="text-xl">seconds</h4>
      </div>
    </div>
  )
}

export default Countdown;
