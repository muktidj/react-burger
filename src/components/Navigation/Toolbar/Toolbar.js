import React from 'react'
import LogoBurger from '../../Logo/Logo'
import classes from './Toolbar.module.css'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
       <LogoBurger />
        <nav>
            ...
        </nav>
    </header>
)

export default toolbar