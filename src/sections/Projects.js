import React from 'react';
import Card from '../component/Card'
import classes from './Projects.module.scss'

const Data = [
    {urlPhoto:'images/hangman.png',title:'Hangman',description:'A simple hangman browser game, with a random word from random-word-api.',urlDemo:'https://fanishangman.netlify.app/',urlCode:'https://github.com/Tfanios/hangman',tech:'React, Redux, Sass'},
    {urlPhoto:'images/mernshop.png',title:'Mernshop',description:'A CRUD e-commerce application created with MERN stack.',urlDemo:'',urlCode:'',tech:'React, Bootstrap, NodeJs, ExpressJS, MongoDB'},
    {urlPhoto:'images/CryptoApp.png',title:'CryptoApp',description:'Cryptocurrency price list application with 1 year price change candlestick graph. With pagination and searchbar.',urlDemo:'https://faniscryptoapp.netlify.app/',urlCode:'https://github.com/Tfanios/cryptoapp',tech:'React, Redux, ApexCharts, Material UI, CoinPaprika.js'}
]

const Projects = () =>{
    return(
        <section id='projects' style={{marginBottom:'5%'}}>
            <div style={{width:'80%',margin:'auto',marginTop:'10%',display:'flex',flexDirection:'column'}}>
                <h1 style={{fontSize:'3em',color:'#fff',textAlign:'center'}}>Projects</h1>
                <div className={classes.CardsContainer} >
                    {Data.map((item,index) =>
                        <Card 
                        key={index}
                        image={item.urlPhoto} 
                        title={item.title} 
                        demo={item.urlDemo} 
                        code={item.urlCode}
                        tech={item.tech} 
                        description={item.description}/>
                    )}  
                </div>
            </div>
        </section>
    )
}

export default Projects