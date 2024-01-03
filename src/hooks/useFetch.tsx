/* eslint-disable @typescript-eslint/no-floating-promises */
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Pokemon {
  name: string
  url: string
}

interface FetchData {
  data: Pokemon | null
  loading: boolean
}

const useFetch = (url: string): FetchData => {
  const [data, setData] = useState({
    data: null,
    loading: true
  })

  const getData = async (): Promise<void> => {
    const resp = await axios.get(url)
    console.log(resp.data.results)
    setData({
      data: resp.data.results,
      loading: false
    })
  }
  useEffect(() => {
    getData()
  }, [url])

  return data
}

export default useFetch
