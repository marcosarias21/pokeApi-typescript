/* eslint-disable @typescript-eslint/no-floating-promises */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { type FetchData } from '../types'

const useFetch = (url: string): FetchData => {
  const [data, setData] = useState({
    data: null,
    loading: true
  })

  const getData = async (): Promise<void> => {
    const resp = await axios.get(url)
    setData({
      data: resp.data,
      loading: false
    })
  }
  useEffect(() => {
    getData()
  }, [url])

  return data
}

export default useFetch
