import React from 'react';
import classes from './Card.module.scss'



const Card = (props) =>{
    const demoHandler = () =>{
        window.open(props.demo,'_blank')
    }
    const codeHandler = () =>{
        window.open(props.code,'_blank')
    }
    return(
        <div className={classes.CardContainer}>
            <img src={process.env.PUBLIC_URL + props.image}  alt="project"/>
            <div>
                <h1>{props.title}</h1>
                <span>{props.tech}</span>
                <p>{props.description}</p>
                <div style={{display: 'flex',flexDirection:'row',alignItems: 'flex-end',height:'50px'}}>
                    <button onClick={demoHandler} style={{border:'none',
                        backgroundImage: 'linear-gradient(to right,rgba(255, 127, 34, 1),rgba(255, 65, 65, 1))'}}>View Demo</button>
                    <button onClick={codeHandler}>View Code</button>
                </div>
            </div>
        </div>
    )
}

export default Card