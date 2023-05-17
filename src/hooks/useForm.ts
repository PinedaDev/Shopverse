import { useState } from 'react'

export function useForm() {
  const [formIsOpen, setEditState] = useState({ formIsOpen: false, id: '' })

  const openForm = (id: string) => {
    setEditState({ formIsOpen: true, id: id })
  }
  const closeForm = () => {
    setEditState({ formIsOpen: false, id: '' })
  }
  return { formIsOpen, openForm, closeForm }
}
