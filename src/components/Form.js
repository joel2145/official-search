import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Grid, GridItem
} from '@chakra-ui/react'

import { MTGSetting } from "../components/MTGSetting"

export const Form = () => {
  const [meetingID, setMeetingID] = useState('')
  const [passcode, setPasscode] = useState('')

  const meetingIDChange = (e) => {
    setMeetingID(() => e.target.value)
  }
  const passcodeChange = (e) => {
    setPasscode(() => e.target.value)
  }


  return (
    <>
      <FormControl>

        <FormLabel htmlFor=''>ミーティングID</FormLabel>
        <Input id='zoomID' type='number' placeholder='例 718 8545 7059' size='md' value={meetingID} onChange={meetingIDChange} />

        <FormLabel htmlFor=''>パスコード</FormLabel>
        <Input id='passcode' type='text' placeholder='例 8a1SZu' size='md' value={passcode} onChange={passcodeChange} />

        <FormLabel htmlFor=''>授業開始時刻</FormLabel>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>年</FormLabel>
            <Select placeholder=''>
              <option value='option1'>2022</option>
              <option value='option2'>2023</option>
            </Select>
          </GridItem>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>月</FormLabel>
            <Select placeholder='' color="" border="black" >
              {[...Array(12)].map((_, i) => i + 1).map((value) => <option value='option1' key={value}>{value}</option>)}
            </Select>
          </GridItem>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>日付</FormLabel>
            <Select placeholder=''>
              {[...Array(31)].map((_, i) => i + 1).map((value) => <option value='option1' key={value}>{value}</option>)}
            </Select>
          </GridItem>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>時</FormLabel>
            <Select placeholder=''>
              {[...Array(24)].map((_, i) => i + 1).map((value) => <option value='option1' key={value}>{value}</option>)}
            </Select>
          </GridItem>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>分</FormLabel>
            <Select placeholder=''>
              {[...Array(60)].map((_, i) => i).map((value) => <option value='option1' key={value}>{value}</option>)}
            </Select>
          </GridItem>
        </Grid>
      </FormControl>
      <Button onClick={() => alert("ボタンが押されました")} colorScheme='teal' size='md' marginTop="20" marginRight="100" marginLeft="100">zoom授業を設定</Button>
      <MTGSetting meetingID={meetingID} passcode={passcode}></MTGSetting>
    </>
  )
}
