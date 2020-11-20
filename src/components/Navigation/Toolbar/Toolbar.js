import React from 'react'
import LogoBurger from '../../Logo/Logo'
import classes from './Toolbar.module.css'
import NavigationsItem from '../NavigationsItems/NavigationsItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
       <LogoBurger />
        <nav>
            <NavigationsItem />
        </nav>
    </header>
)

export default toolbar