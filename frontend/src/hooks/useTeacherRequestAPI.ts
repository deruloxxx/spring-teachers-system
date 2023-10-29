import { useState } from 'react'
import { TeacherCreateData, TeacherInfo } from '../types/TeachersInfo.ts'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

type sendRequest = {
  apiPath?: string
  method: 'POST' | 'PUT'
  data: TeacherCreateData | TeacherInfo
}

export const useTeacherRequestAPI = () => {
  const [hasError, setHasError] = useState(false)

  const sendRequest = async ({ apiPath, method, data }: sendRequest) => {
    const url = apiPath ? `${API_URL}/${apiPath}` : API_URL
    try {
      await axios({
        url: `${url}`,
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      })
    } catch (error) {
      console.error('There was an error:', error)
      setHasError(true)
    }
  }

  return { sendRequest, hasError }
}
