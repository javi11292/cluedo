import localForage from "localforage"

export const cardsDB = localForage.createInstance({ storeName: "cards" })
export const marksDB = localForage.createInstance({ storeName: "marks" })
export const playersDB = localForage.createInstance({ storeName: "players" })