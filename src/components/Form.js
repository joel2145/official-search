import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Input,
  Button,
  Select
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
      <Select placeholder='年'>
        <option value='option1'>2022</option>
        <option value='option2'>2023</option>
        <option value='option2'>2024</option>
      </Select>
      <Select placeholder='月'>
        {[...Array(12)].map((_, i) => i + 1).map((value) => <option value='option1'>{value}</option>)}
      </Select>
      <Select placeholder='日付'>
        {[...Array(31)].map((_, i) => i + 1).map((value) => <option value='option1'>{value}</option>)}
      </Select>
      <Select placeholder='時刻'>
        <option value='option1'>2022</option>
        <option value='option2'>2023</option>
      </Select>
      <Select placeholder='Select option'>
        <option value='option1'>2022</option>
        <option value='option2'>2023</option>
      </Select>
      <Button onClick={() => alert("ボタンが押されました")} colorScheme='teal' size='md'>zoom授業を設定</Button>
    </FormControl>
  )
}
