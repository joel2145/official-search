import React from 'react'

export const WaitingRoomPage = (props) => {
  return (
    <>
      <div>WaitingRoomPage</div>
      <div> {props.meetingID}</div>
      <div> {props.passcode}</div>
    </>
  )
}
