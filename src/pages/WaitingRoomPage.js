import React from "react";
import { useLocation } from "react-router-dom";

export const WaitingRoomPage = (props) => {
  // console.log(year)
  const location = useLocation();
  console.log(location)
  const { meetingID, passcode, year, month, date, hour, minute } = { ...location.state }
  return (
    <>
      <div>WaitingRoomPage</div>
      <br />
      <p>{`授業開始予定時刻:${year}年 ${month}月${date}日 ${hour}時${minute}分`}</p>
      <br />
      <p>{`zoomミーティングのID:${meetingID}`}</p>
      <p>{`パスコード:${passcode}`}</p>
      <br />
      <p>{`授業開始時刻までお待ち下さい。`}</p>
    </>
  );
};
