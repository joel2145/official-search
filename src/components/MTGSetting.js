import React from 'react'

export const MTGSetting = (props) => {
  return (
    <>
      <div> MTGSettingコンポーネントです。</div>
      <div> {props.meetingID}</div>
      <div> {props.passcode}</div>
    </>
  )
}
