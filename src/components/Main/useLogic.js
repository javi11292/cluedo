import { useState, useRef, useEffect } from "react"
import { playersDB, marksDB } from "libraries/database"
import useStore from "hooks/useStore"

function useLogic() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const inputsRef = useRef({})
  const [players, setPlayers] = useState({})
  const [marks, setMarks] = useState({})
  const [cards] = useStore("cards")

  useEffect(() => {
    playersDB.iterate((value, key) => {
      setPlayers(players => ({ ...players, [key]: value }))
    })

    marksDB.iterate(({ "0": player, ...value }, key) => {
      setMarks(marks => ({ ...marks, [key]: { ...(marks[key] || {}), ...value } }))
    })
  }, [])

  function handleOpen() {
    setOpenDrawer(true)
  }

  function handleClose() {
    setOpenDrawer(false)
  }

  function handleChange({ currentTarget }) {
    setPlayers({ ...players, [currentTarget.dataset.id]: currentTarget.value })
    playersDB.setItem(currentTarget.dataset.id, currentTarget.value)
  }

  function handleFocus({ currentTarget }) {
    inputsRef.current[currentTarget.dataset.id].focus()
  }

  function handleClick({ currentTarget: { dataset } }) {
    const players = marks[dataset.id] || {}
    const value = ((players[dataset.player] || 0) + 1) % 4

    const newPlayers = {
      ...players,
      [dataset.player]: value,
    }

    setMarks({ ...marks, [dataset.id]: newPlayers })
    marksDB.setItem(dataset.id, newPlayers)
  }

  function addRef(element) {
    if (!element) return
    inputsRef.current[element.dataset.id] = element
  }

  return {
    openDrawer,
    handleOpen,
    handleClose,
    handleFocus,
    players,
    handleChange,
    addRef,
    handleClick,
    marks,
    cards,
  }
}

export default useLogic