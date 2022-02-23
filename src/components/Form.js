import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Grid, GridItem
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();

  const [meetingID, setMeetingID] = useState('')
  const [passcode, setPasscode] = useState('')
  const [year, setYear] = useState(2022)
  const [month, setMonth] = useState(1)
  const [date, setDate] = useState(1)
  const [hour, setHour] = useState(1)
  const [minute, setMinute] = useState(0)

  const meetingIDChange = (e) => {
    setMeetingID(() => e.target.value)
  }
  const passcodeChange = (e) => {
    setPasscode(() => e.target.value)
  }
  const yearChange = (e) => {
    setYear(() => e.target.value)
  }
  const monthChange = (e) => {
    setMonth(() => e.target.value)
  }
  const dateChange = (e) => {
    setDate(() => e.target.value)
  }
  const hourChange = (e) => {
    setHour(() => e.target.value)
  }
  const minuteChange = (e) => {
    setMinute(() => e.target.value)
  }

  const submit = () => {
    navigate("/waitting", { state: { meetingID: meetingID, passcode: passcode, year: year, month: month, date: date, hour: hour, minute: minute } })
  }

  return (
    <>
      <FormControl>

        <FormLabel htmlFor=''>zoomミーティングのID</FormLabel>
        <Input id='zoomID' type='number' placeholder='例 718 8545 7059' size='md' value={meetingID} onChange={meetingIDChange} />

        <FormLabel htmlFor=''>パスコード</FormLabel>
        <Input id='passcode' type='text' placeholder='例 8a1SZu' size='md' value={passcode} onChange={passcodeChange} />
        <br />
        <FormLabel htmlFor=''>授業開始時刻</FormLabel>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>年</FormLabel>
            <Select placeholder='' onChange={yearChange} id="year">
              <option value={2022} >2022</option>
              <option value={2023} >2023</option>
            </Select>
          </GridItem>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>月</FormLabel>
            <Select placeholder='' color="" onChange={monthChange}>
              {[...Array(12)].map((_, i) => i + 1).map((value) => <option value={value} key={value}>{value}</option>)}
            </Select>
          </GridItem>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>日付</FormLabel>
            <Select placeholder='' onChange={dateChange}>
              {[...Array(31)].map((_, i) => i + 1).map((value) => <option value={value} key={value}>{value}</option>)}
            </Select>
          </GridItem>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>時</FormLabel>
            <Select placeholder='' onChange={hourChange}>
              {[...Array(24)].map((_, i) => i).map((value) => <option value={value} key={value}>{value}</option>)}
            </Select>
          </GridItem>
          <GridItem w='100%' h='10' bg='' >
            <FormLabel htmlFor=''>分</FormLabel>
            <Select placeholder='' onChange={minuteChange}>
              {[...Array(60)].map((_, i) => i).map((value) => <option value={value} key={value}>{value}</option>)}
            </Select>
          </GridItem>
        </Grid>
      </FormControl>
      <Button onClick={() => submit()} colorScheme='teal' size='md' marginTop="20" marginRight="100" marginLeft="100">zoom授業を設定</Button>
    </>
  )
}
