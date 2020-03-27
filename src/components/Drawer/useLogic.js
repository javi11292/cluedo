import { useState } from "react"
import useStore from "hooks/useStore"
import localForage from "localforage"

function useLogic() {
  const [openDialog, setOpenDialog] = useState(false)
  const [cards, setCards] = useStore("cards")

  function toggleDialog() {
    setOpenDialog(!openDialog)
  }

  function handleClick({ currentTarget }) {
    setCards({ action: "add", value: { ...currentTarget.dataset } })
    setOpenDialog(false)
  }

  function handleDelete(value) {
    setCards({ action: "delete", value })
  }

  function handleReset() {
    localForage.dropInstance({ name: "localforage" })
    window.location.reload()
  }

  return { openDialog, toggleDialog, handleClick, handleDelete, cards, handleReset }
}

export default useLogic