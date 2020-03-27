import React from "react"
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  Input,
} from "@material-ui/core"
import green from "@material-ui/core/colors/green"
import blue from "@material-ui/core/colors/blue"
import Drawer from "components/Drawer"
import { WHO, WHERE, WEAPON } from "libraries/constants"
import useLogic from "./useLogic"
import styles from "./index.module.css"

const PLAYERS_NUMBER = 6

function getColor(marks, item, player, cards) {
  if (!player) return cards[item] ? green[500] : "white"
  const value = marks[item] && marks[item][player]
  switch (value) {
    case 1:
      return "var(--paletteBackgroundPaper)"
    case 2:
      return blue[500]
    case 3:
      return green[500]
    default:
      return "white"
  }
}

function getRowColor(marks, item, cards) {
  const players = marks[item] || {}
  return cards[item] ? green[500] : Object.values(players).find(player => player === 3) ? green[500] : null
}

function ItemTable({ items, handleClick, marks, cards }) {
  return (
    <TableContainer className={styles.tableContainer} component={Paper}>
      <Table className={styles.table} padding="none">
        <TableBody>
          {items.map(item => (
            <TableRow key={item} style={{ "--color": getRowColor(marks, item, cards) }}>
              <TableCell className={styles.rowTitle}>{item}</TableCell>
              {[...Array(PLAYERS_NUMBER).keys()].map(index => (
                <TableCell key={index} className={styles.cell}>
                  <Button
                    style={{ "--color": getColor(marks, item, index, cards) }}
                    data-player={index}
                    data-id={item}
                    onClick={index > 0 ? handleClick : undefined}
                    centerRipple
                    className={styles.button}
                    variant="contained"> </Button>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function Main() {
  const {
    openDrawer,
    handleOpen,
    handleClose,
    handleChange,
    players,
    addRef,
    handleClick,
    handleFocus,
    marks,
    cards,
  } = useLogic()

  return (
    <div className={styles.root}>
      <Drawer open={openDrawer} handleClose={handleClose} handleOpen={handleOpen} />

      <Table className={styles.playersTable} padding="none">
        <TableBody>
          <TableRow>
            {[...Array(PLAYERS_NUMBER).keys()].map(index => (
              index > 0
                ?
                <TableCell key={index} className={styles.player}>
                  <Button
                    disableFocusRipple
                    onClick={handleFocus}
                    data-id={index}
                    variant="contained"
                    className={styles.button}>
                    <Input
                      inputRef={addRef}
                      inputProps={{ "data-id": index }}
                      value={players[index] || ""}
                      onChange={handleChange} />
                    {players[index]}
                  </Button>
                </TableCell>
                : null
            ))}
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="button">¿Quién?</Typography>
      <ItemTable items={WHO} handleClick={handleClick} marks={marks} cards={cards} />

      <Typography variant="button">¿Qué arma?</Typography>
      <ItemTable items={WEAPON} handleClick={handleClick} marks={marks} cards={cards} />

      <Typography variant="button">¿Dónde?</Typography>
      <ItemTable items={WHERE} handleClick={handleClick} marks={marks} cards={cards} />
    </div>
  )
}

export default React.memo(Main)