export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2); //thời gian time chia cho 60 giây lấy số dư và lấy ngược từ dưới lên
  const minutes = `${Math.floor(time / 60)}`; //số phút chia làm tròn dưới, phần dư sẽ là giây
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2); //cũng có thể lấy số phút chia cho 60

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
