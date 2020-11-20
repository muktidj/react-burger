import React from 'react'
import LogoBurger from '../../Logo/Logo'
import classes from './Toolbar.module.css'
import NavigationsItem from '../NavigationsItems/NavigationsItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DraweToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
        <div>Menu</div>
        <div className={classes.Logo}>
            <LogoBurger />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationsItem />
        </nav>
    </header>
)

export default toolbar