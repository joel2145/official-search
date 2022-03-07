import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Checkbox,
} from '@chakra-ui/react'

export const SearchPage = () => {

  const [searchWord, setSearchWord] = useState('')

  const [checkedItems, setCheckedItems] = useState({})
  // const [url, setUrl] = useState(`https://www.google.com/search?q=site%3Aac.jp+OR+site%3Ago.jp+OR+site%3Alg.jp+${searchWord}`)
  const [go, setGo] = useState('')
  const [ac, setAc] = useState('')
  const [lg, setLg] = useState('')

  const searchWordChange = (e) => {
    setSearchWord(() => e.target.value)
  }
  console.log(checkedItems)

  const goChange = (e) => {
    setGo("+OR+site%3Ago.jp")
  }
  const acChange = (e) => {
    setAc("+OR+site%3Aac.jp")
  }
  const lgChange = (e) => {
    setLg("+OR+site%3Alg.jp")
  }

  const submit = () => {
    window.open(`https://www.google.com/search?q=${ac}${go}${lg}+${searchWord}`, '_blank');
  }

  return (
    <>
      <FormControl>
        <FormLabel htmlFor=''>検索したいワードを入力してください</FormLabel>
        <Input id='searchWord' type='search' placeholder='例) 新型コロナウイルス' size='md' value={searchWord} onChange={searchWordChange} />
        <FormLabel as='legend'>検索する範囲を絞る</FormLabel>

        <Stack spacing={5} direction='row'>
          <Checkbox colorScheme='green' onChange={goChange} value="go.jp" id="go" checked={goChange}>
            日本の政府機関（厚生労働省・内閣官房など）
          </Checkbox>
          <Checkbox colorScheme='green' onChange={acChange} value="ac.jp" id="ac" checked={acChange}>
            日本の高等教育機関（大学など）
          </Checkbox>
          <Checkbox colorScheme='green' onChange={lgChange} value="lg.jp" id="lg" checked={lgChange}>
            地方公共団体
          </Checkbox>
        </Stack>
      </FormControl>
      <Button onClick={() => submit()} colorScheme='blue' size='md' marginTop="20" marginRight="100" marginLeft="100">信頼できる情報を検索</Button>
    </>
  )
}
