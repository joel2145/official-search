import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

export const SearchPage = () => {

  const [searchWord, setSearchWord] = useState('')

  const searchWordChange = (e) => {
    setSearchWord(() => e.target.value)
  }

  const submit = () => {
    window.open(`https://www.google.com/search?q=site%3Aac.jp+OR+site%3Ago.jp+OR+site%3Alg.jp+${searchWord}`, '_blank');
  }

  return (
    <>
      <FormControl>
        <FormLabel htmlFor=''>検索したいワードを入力してください</FormLabel>
        <Input id='searchWord' type='search' placeholder='例) 新型コロナウイルス' size='md' value={searchWord} onChange={searchWordChange} />
      </FormControl>
      <Button onClick={() => submit()} colorScheme='blue' size='md' marginTop="20" marginRight="100" marginLeft="100">信頼できる情報を検索</Button>
    </>
  )
}
