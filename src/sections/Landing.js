import React from 'react';
import {ReactComponent as Me} from '../assets/me.svg'
import classes from './Landing.module.scss'

const Landing = () =>{
    return(
        <section id='home' className={classes.SectionContainer}>
            <div>
                <div class="container" className={classes.Container}>
                    <div className={classes.TextContainer}>
                        <h1>Hello, i'm <span>Theofanis</span></h1>
                        <h3>Web Developer & React Developer</h3>
                        <button className={classes.Button}>Contact me</button>
                    </div>
                    <div className={classes.SVGContainer}>
                        <Me style={{width:'100%'}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing