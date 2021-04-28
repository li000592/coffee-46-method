import React from "react"
import { ButtonGroup, BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AccessAlarm from "@material-ui/icons/AccessAlarm"
import LibraryBooks from "@material-ui/icons/LibraryBooks"
const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    position: "fixed",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },
})
export default function TabNavigation({ value, setValue }) {
  const classes = useStyles()

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      className={classes.root}
    >
      <BottomNavigationAction label='Timer' icon={<AccessAlarm />} />
      <BottomNavigationAction label='Story' icon={<LibraryBooks />} />
    </BottomNavigation>
  )
}
