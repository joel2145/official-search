import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

export const Form = () => {
  return (
    <FormControl>
      <FormLabel htmlFor=''>ミーティングID</FormLabel>
      <Input id='zoomID' type='number' placeholder='例 718 8545 7059' size='md' />
      <FormLabel htmlFor=''>パスコード</FormLabel>
      <Input id='zoomID' type='number' placeholder='例 8a1SZu' size='md' />
      <FormLabel htmlFor=''>授業開始時刻</FormLabel>
      <Input id='zoomID' type='number' placeholder='12345678' size='md' />
    </FormControl>
  )
}
