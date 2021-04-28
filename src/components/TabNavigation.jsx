import React from "react"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AccessAlarm from "@material-ui/icons/AccessAlarm"
import LibraryBooks from "@material-ui/icons/LibraryBooks"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    position: "fixed",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    left: 0,
  },
})
export default function TabNavigation() {
  const classes = useStyles()

  return (
    <BottomNavigation className={classes.root}>
      <NavLink to='/'>
        <BottomNavigationAction label='Timer' icon={<AccessAlarm />} />
      </NavLink>
      <NavLink to='/story'>
        <BottomNavigationAction label='Story' icon={<LibraryBooks />} />
      </NavLink>
    </BottomNavigation>
  )
}
