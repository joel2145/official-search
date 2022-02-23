import React from "react";
import { useLocation } from "react-router-dom";

export const WaitingRoomPage = (props) => {

  const location = useLocation();
  // console.log(location)
  const { meetingID, passcode, year, month, date, hour, minute } = { ...location.state }

  const exec = require('child_process');
  // 授業時間の設定
  // const lesson = new Date(year, (month - 1), date, hour, minute); // 授業開始時刻
  // const lessonTime = parseInt(lesson / 1000); // timestampに変更する
  // const lessonTime2 = lesson.toLocaleString()
  // ${ meetingID }${ passcode }

  // zoomに入る関数
  // const { exec } = require('child_process')
  const EnterTheRoom = () => {
    console.log(exec)
    console.log(meetingID)
    // exec(`open 'zoommtg://zoom.us/join?confno=71885457059&pwd=8a1SZu'`, (error, stdout, stderr) => {
    //   if (error) {
    //     console.log(error);
    //     console.log(stderr);
    //   }
    //   console.log(stdout);
    // })
  };

  // 授業開始時間になったら自動的にzoomへ入る関数
  // const AutoZoomEnter = () => {

  // }


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
      <button onClick={() => EnterTheRoom()}> テスト</button>
    </>
  );
};
