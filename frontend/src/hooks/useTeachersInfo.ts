import { useEffect, useState } from 'react'
import { TeachersInfoType } from '../types/TeachersInfo.ts'

const useTeachersInfo = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<TeachersInfoType | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        // TODO Separate URLs to be fetched for production and development
        const res = await fetch('http://localhost:8080/api/v1/teachers')
        const result = await res.json()
        setData(result.content)
      } catch (error) {
        // TODO Create error handling
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { loading, data, setData }
}

export default useTeachersInfo
