import getStore from "eztore"
import { cardsDB } from "libraries/database"

export default getStore({
  cards: {
    state: {},
    reducer: (state, { action, value }) => {
      switch (action) {
        case "add":
          cardsDB.setItem(value.id, value)
          state[value.id] = value
          break
        case "delete":
          cardsDB.removeItem(value.id)
          delete state[value.id]
          break
        default:
          break
      }
    },
  },
})