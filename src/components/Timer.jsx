import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Timer2 = ({ targetDate }) => {
  const [countDownTime, setCountDownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = new Date(targetDate).getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountDownTime({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        setCountDownTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex mx-0 sm:p-10 p-4 rounded-md justify-center flex-col shadow-[5px_5px_50px_rgba(47,46,60,1)]">
      <div className="flex justify-between sm:px-4">
        <div className="flex flex-col justify-center items-center gap-3 mx-1">
          <span className="py-3 px-3 flex justify-center items-center bg-primary text-white text-3xl font-semibold rounded-md">
            {countDownTime?.days}
          </span>
          <span className="text-sm text-[#FBFAF8] font-bold">
            {countDownTime?.days === 1 ? "Dzień" : "Dni"}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mx-1">
          <span className="py-3 px-3 bg-primary text-white text-3xl font-semibold rounded-md">
            {countDownTime?.hours}
          </span>
          <span className="text-sm text-[#FBFAF8] font-bold">
            {countDownTime?.hours === 1 ? "Godzina" : "Godzin"}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mx-1">
          <span className="py-3 px-3 bg-primary text-white text-3xl font-semibold rounded-md">
            {countDownTime?.minutes}
          </span>
          <span className="text-sm text-[#FBFAF8] font-bold">
            {countDownTime?.minutes === 1 ? "Minuta" : "Minut"}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mx-1">
          <span className="py-3 px-3 bg-primary text-white text-3xl font-semibold rounded-md">
            {countDownTime?.seconds}
          </span>
          <span className="text-sm text-[#FBFAF8] font-bold">
            {countDownTime?.seconds === 1 ? "Sekunda" : "Sekund"}
          </span>
        </div>
      </div>
    </div>
  );
};

Timer2.propTypes = {
  targetDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
};

export default Timer2;
