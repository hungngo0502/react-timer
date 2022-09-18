import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true; //disable vô hiệu hóa button start
    isStart.current = true;
    //setInterval là một phương thức gọi 1 hàm tại các khoảng thời gian xác định
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    isStart.current = false;
    //clearInterval là phương thức để dừng hay xóa bộ hẹn giờ với setInterval
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
