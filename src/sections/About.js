import React from 'react';
import {ReactComponent as Blob1} from '../assets/blob1.svg'
import {ReactComponent as Blob2} from '../assets/blob2.svg'
import { SiJavascript, SiGithub, SiHtml5, SiCss3, SiReact, SiRedux,SiNodeDotJs, SiSass, SiBootstrap } from 'react-icons/si'
import classes from './About.module.scss'



const About = () =>{
    return(
        <section id='about' >
            <div className={classes.SectionContainer}>
                <div className={classes.SVGContainer} style={{flex:'1'}}>
                    <div>
                        <Blob1 className={classes.svgspin1} />
                        <Blob2 className={classes.svgspin2} />
                        <div className={classes.AboutTxt}>
                            <h1>About</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <div style={{flex:'1',height:'100%'}}>
                    <div className={classes.techContainer}>
                        <div>
                            <SiJavascript className={classes.svgJS} />
                        </div>
                        <div>
                            <SiGithub className={classes.svgGH}/>
                        </div>
                        <div>
                            <SiHtml5 className={classes.svgHTML}/>
                        </div>
                        <div>
                            <SiCss3 className={classes.svgCSS}/>
                        </div>
                        <div>
                            <SiReact className={classes.svgREACT}/>
                        </div>
                        <div>
                            <SiRedux className={classes.svgREDX}/>
                        </div>
                        <div>
                            <SiNodeDotJs className={classes.svgNode}/>
                        </div>
                        <div>
                            <SiSass className={classes.svgSASS}/>
                        </div>
                        <div>
                            <SiBootstrap className={classes.svgBS}/>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default About