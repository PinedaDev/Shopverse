import { useState } from 'react'

export function useForm() {
  const [editState, setEditState] = useState({ isEditing: false, id: '' })

  const openEditForm = (id: string) => {
    setEditState({ isEditing: true, id: id })
  }
  const closeEditForm = () => {
    setEditState({ isEditing: false, id: '' })
  }
  return { editState, openEditForm, closeEditForm }
}
