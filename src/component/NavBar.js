import React from 'react';
import classes from './NavBar.module.scss'

const NavBar = () =>{
    return(
        <nav className={classes.NavContainer}>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>       
        </nav>
    )
}

export default NavBar;