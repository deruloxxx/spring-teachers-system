import { useEffect, useState } from 'react'
import { TeacherInfo } from '../types/TeachersInfo.ts'
import axios from 'axios'

// TODO Consider where arrange API URL
const API_URL = import.meta.env.VITE_API_URL

const useTeachersInfo = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Array<TeacherInfo> | null>(null)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const fetchTeachers = async () => {
    try {
      const res = await axios(`${API_URL}?page=${page}`)
      const result = res.data
      setData(result.content)
      setTotalPages(result.totalPages)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTeachers()
  }, [page])

  return {
    loading,
    data,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchTeachers,
  }
}

export default useTeachersInfo
