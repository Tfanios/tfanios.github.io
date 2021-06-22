import React from 'react'
import {SiGmail, SiInstagram, SiGithub, SiLinkedin} from 'react-icons/si'
import classes from './SocialBar.module.scss'

const SocialBar = () =>{
    return(
        <nav className={classes.Container}>
                <div className={classes.listBar}style={{color:'white'}}>
                    <div>
                        <a href="https://www.linkedin.com/in/fanis-iosifidis-510982189/">
                            <SiLinkedin/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/fanis_ios/">
                            <SiInstagram/>
                        </a>
                    </div>
                    <div>
                        <a href='mailto&#58;i&#111;&#37;7&#51;i&#116;heo&#64;g&#109;ai%6C&#46;&#37;&#54;3om'>
                            <SiGmail />
                        </a>
                    </div>
                    <div> 
                        <a href="https://github.com/Tfanios">
                            <SiGithub />
                        </a>
                    </div>
                </div>
        </nav>
    )
}

export default SocialBar