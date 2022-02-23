import React from "react";
import { useLocation } from "react-router-dom";

export const WaitingRoomPage = (props) => {
  // console.log(year)
  const location = useLocation();
  console.log(location)
  return (
    <>
      <div>WaitingRoomPage</div>
      <div>{location.state.year}</div>
      <div>{location.state.month}</div>
      <div>{location.state.date}</div>
      <div>{location.state.hour}</div>
      <div>{location.state.minute}</div>
    </>
  );
};
