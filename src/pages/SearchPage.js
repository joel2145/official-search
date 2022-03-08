import React, { useState } from 'react'
import {
  FormControl,
  Input,
  Button,
  Stack,
  Checkbox,
} from '@chakra-ui/react'

import classes from "./SearchPage.module.scss"

export const SearchPage = () => {

  const [searchWord, setSearchWord] = useState('')

  // const [url, setUrl] = useState(`https://www.google.com/search?q=site%3Aac.jp+OR+site%3Ago.jp+OR+site%3Alg.jp+${searchWord}`)
  const [go, setGo] = useState("+OR+site%3Ago.jp")
  const [ac, setAc] = useState("+OR+site%3Aac.jp")
  const [lg, setLg] = useState("+OR+site%3Alg.jp")

  const searchWordChange = (e) => {
    setSearchWord(() => e.target.value)
  }
  const goChange = (e) => {
    if (go === "") {
      setGo("+OR+site%3Ago.jp")
    }
    if (go === "+OR+site%3Ago.jp") {
      setGo("")
    }
  }
  const acChange = (e) => {
    if (ac === "") {
      setAc("+OR+site%3Aac.jp")
    }
    if (ac === "+OR+site%3Aac.jp") {
      setAc("")
    }
  }
  const lgChange = (e) => {
    if (lg === "") {
      setLg("+OR+site%3Alg.jp")
    }
    if (lg === "+OR+site%3Alg.jp") {
      setLg("")
    }
  }

  const submit = () => {
    window.open(`https://www.google.com/search?q=${go}${ac}${lg}+${searchWord}`, '_blank');
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.box}>
          <FormControl className={classes.contents}>
            <h1 className={classes.title}>Official Search App</h1>
            <p className={classes.subtitle}>信頼できる公式情報のみを検索できるアプリ</p>
            <Input id='searchWord' type='search' placeholder='例) ウクライナ' size='md' value={searchWord} onChange={searchWordChange} className={classes.textBox} />

            <Button onClick={() => submit()} colorScheme='blue' size='md' marginTop="2" marginBottom="10" className={classes.submitButton}>検索</Button>

            <p className={classes.selectText} >種類を選択</p>
            <Stack spacing={5} direction='column' className={classes.checkList}>
              <Checkbox colorScheme='green' onChange={goChange} value="go.jp" id="go" defaultChecked>
                日本の政府機関（厚生労働省・内閣官房など）
              </Checkbox>
              <Checkbox colorScheme='green' onChange={acChange} value="ac.jp" id="ac" defaultChecked>
                日本の高等教育機関（大学など）
              </Checkbox>
              <Checkbox colorScheme='green' onChange={lgChange} value="lg.jp" id="lg" defaultChecked>
                地方公共団体
              </Checkbox>
            </Stack>
          </FormControl>

        </div>
      </div>
    </>
  )
}
