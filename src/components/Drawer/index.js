import React, { useRef } from "react"
import {
  SwipeableDrawer,
  Button,
  Dialog,
  DialogContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import Add from "@material-ui/icons/AddCircle"
import { WHO, WHERE, WEAPON } from "libraries/constants"
import useLogic from "./useLogic"
import styles from "./index.module.css"

function PressButton({ onPress, id, ...props }) {
  const timeout = useRef()

  function handlePress() {
    timeout.current = setTimeout(() => onPress({ id }), 750)
  }

  function handleRelease() {
    clearTimeout(timeout.current)
  }

  return <Button
    onPointerDown={handlePress}
    onPointerUp={handleRelease}
    {...props} />
}

function ItemList({ items, children, handleClick }) {
  const type = items === WHO ? "who" : items === WHERE ? "where" : "weapon"

  return (
    <List className={styles.column}>
      <ListItem>
        {children}
      </ListItem>
      {items.map(item => (
        <ListItem
          key={item}
          button
          onClick={handleClick}
          data-type={type}
          data-id={item}>
          <ListItemText primary={item} className={styles.item} />
        </ListItem>
      ))}
    </List>
  )
}

function Drawer({ open, handleClose, handleOpen }) {
  const {
    openDialog,
    toggleDialog,
    handleClick,
    handleDelete,
    cards,
    handleReset,
  } = useLogic()

  return (
    <SwipeableDrawer
      swipeAreaWidth={75}
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}>
      <Dialog open={openDialog} onClose={toggleDialog} className={styles.root} >
        <DialogContent>
          <Typography variant="h5">Selecciona una carta</Typography>
          <div className={styles.columns}>
            <ItemList items={WHO} handleClick={handleClick}>
              <Typography variant="button">Quién</Typography>
            </ItemList>

            <ItemList items={WEAPON} handleClick={handleClick}>
              <Typography variant="button">Arma</Typography>
            </ItemList>

            <ItemList items={WHERE} handleClick={handleClick}>
              <Typography variant="button">Dónde</Typography>
            </ItemList>
          </div>
        </DialogContent>
      </Dialog>

      <div className={styles.cards}>
        {Object.values(cards).map(({ id }) => (
          <PressButton
            key={id}
            className={styles.card}
            id={id}
            onPress={handleDelete}>{id}</PressButton>
        ))}

        <PressButton className={styles.addCard} onClick={toggleDialog} onPress={handleReset}>
          <Add className={styles.add} />
        </PressButton>
      </div>
    </SwipeableDrawer>
  )
}

export default Drawer