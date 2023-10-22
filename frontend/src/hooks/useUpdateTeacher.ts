import { useState } from 'react'
import { TeacherCreateData, TeacherInfo } from '../types/TeachersInfo.ts'
const API_URL = import.meta.env.VITE_API_URL

type sendRequest = {
  apiPath?: string
  method: 'POST' | 'PUT'
  data: TeacherCreateData | TeacherInfo
}

export const useUpdateTeacher = () => {
  const [hasError, setHasError] = useState(false)

  const sendRequest = async ({ apiPath, method, data }: sendRequest) => {
    const url = apiPath ? `${API_URL}/${apiPath}` : API_URL
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to post data')
      }

      const text = await response.text()
      if (text) {
        return JSON.parse(text)
      }
      return null
    } catch (error) {
      console.error('There was an error:', error)
      setHasError(true)
    }
  }

  return { sendRequest, hasError }
}
