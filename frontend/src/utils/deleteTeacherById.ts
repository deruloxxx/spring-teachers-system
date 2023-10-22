const API_URL = import.meta.env.VITE_API_URL
export const deleteTeacherById = async (id: number) => {
  try {
    // TODO Importing URLs to be fetched
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error('Failed to delete the teacher')
    }
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
