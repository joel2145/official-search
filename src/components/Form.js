import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react'

export const Form = () => {
  const [meetingID, setMeetingID] = useState('')

  const meetingIDChange = (e) => {
    setMeetingID(() => e.target.value)
  }
  return (
    <FormControl>
      <FormLabel htmlFor=''>ミーティングID</FormLabel>
      <Input id='zoomID' type='number' placeholder='例 718 8545 7059' size='md' value={meetingID} onChange={meetingIDChange} />
      <FormLabel htmlFor=''>パスコード</FormLabel>
      <Input id='passcode' type='text' placeholder='例 8a1SZu' size='md' />
      <FormLabel htmlFor=''>授業開始時刻</FormLabel>
      <Input id='lessonTime' type='number' placeholder='12345678' size='md' />
      <Button onClick={() => alert("ボタンが押されました")} colorScheme='teal' size='md'>zoom授業を設定</Button>
    </FormControl>
  )
}
