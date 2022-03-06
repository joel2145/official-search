import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

export const SearchPage = () => {

  const [meetingID, setMeetingID] = useState('')

  const meetingIDChange = (e) => {
    setMeetingID(() => e.target.value)
  }

  const submit = () => {
    window.open('https://www.google.com/search?q=site%3Aac.jp+OR+site%3Ago.jp+OR+site%3Alg.jp+ウクライナ', '_blank');
  }

  return (
    <>
      <FormControl>

        <FormLabel htmlFor=''>zoomミーティングのID</FormLabel>
        <Input id='zoomID' type='number' placeholder='例 718 8545 7059' size='md' value={meetingID} onChange={meetingIDChange} />


      </FormControl>
      <Button onClick={() => submit()} colorScheme='teal' size='md' marginTop="20" marginRight="100" marginLeft="100">サンプルボタン１</Button>
    </>
  )
}
