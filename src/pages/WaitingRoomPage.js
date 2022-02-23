import React from "react";
import { useLocation } from "react-router-dom";

export const WaitingRoomPage = (props) => {
  // console.log(year)
  const location = useLocation();
  console.log(location)
  const { year, month, date, hour, minute } = { ...location.state }
  return (
    <>
      <div>WaitingRoomPage</div>
      <p>{`${year}年 ${month}月${date}日 ${hour}時${minute}分に入室の設定をしました。`}</p>
      <p>{`授業開始時刻までお待ち下さい。`}</p>
    </>
  );
};
