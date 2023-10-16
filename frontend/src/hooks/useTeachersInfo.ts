import { useEffect, useState } from 'react'
import { TeacherInfo } from '../types/TeachersInfo.ts'

const useTeachersInfo = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Array<TeacherInfo> | null>(null)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    ;(async () => {
      try {
        // TODO Separate URLs to be fetched for production and development
        const res = await fetch(
          `http://localhost:8080/api/v1/teachers?page=${page}`,
        )
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
