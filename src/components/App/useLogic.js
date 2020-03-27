import { useState, useEffect } from "react"
import useStore from "hooks/useStore"
import { cardsDB } from "libraries/database"

function useLogic() {
  const [update, setUpdate] = useState()
  const setCards = useStore("cards", false)

  useEffect(() => {
    cardsDB.iterate(value => {
      setCards({ action: "add", value })
    })
  }, [setCards])

  useEffect(() => {
    function callback({ detail }) {
      setUpdate(() => () => {
        detail.postMessage({ type: "SKIP_WAITING" })
        window.location.reload()
      })
    }

    window.addEventListener("update", callback)
    return () => window.removeEventListener("update", callback)
  }, [])

  function handleClose({ currentTarget }) {
    if (currentTarget.dataset.confirm) {
      update()
    } else {
      setUpdate()
    }
  }

  return { update, handleClose }
}

export default useLogic