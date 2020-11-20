import React from 'react'

import classes from './NavigationsItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationsItems = (props) => (
    <ul className={classes.NavigationsItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Check out</NavigationItem>
    </ul>
)

export default navigationsItems