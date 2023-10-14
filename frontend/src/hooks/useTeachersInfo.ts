import { useEffect, useState } from 'react'

const useTeachersInfo = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        // TODO Separate URLs to be fetched for production and development
        const res = await fetch('http://localhost:8080/api/v1/teachers')
        const result = await res.json()
        setData(result)
      } catch (error) {
        // TODO Create error handling
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { loading, data }
}

export default useTeachersInfo
