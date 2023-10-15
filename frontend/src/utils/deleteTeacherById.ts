export const deleteTeacherById = async (id: number) => {
  try {
    // TODO Importing URLs to be fetched
    const response = await fetch(
      `http://localhost:8080/api/v1/teachers/${id}`,
      {
        method: 'DELETE',
      },
    )
    if (!response.ok) {
      throw new Error('Failed to delete the teacher')
    }
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
