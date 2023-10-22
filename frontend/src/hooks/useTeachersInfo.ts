import { useEffect, useState } from 'react'
import { TeacherInfo } from '../types/TeachersInfo.ts'

// TODO Consider where arrange API URL
const API_URL = import.meta.env.VITE_API_URL

const useTeachersInfo = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Array<TeacherInfo> | null>(null)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    ;(async () => {
      try {
        // TODO Separate URLs to be fetched for production and development
        const res = await fetch(`${API_URL}?page=${page}`)
        const result = await res.json()
        setData(result.content)
        setTotalPages(result.totalPages)
      } catch (error) {
        // TODO Create error handling
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [page])

  return { loading, data, setData, page, setPage, totalPages, setTotalPages }
}

export default useTeachersInfo
