import React from 'react';
import './homepage.scss';
import Button from '../button/button';
import AvatarImage from '../../avatar.png';
import Grid from '@material-ui/core/Grid';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/src/styles/styles.scss";


const Homepage = () =>{
    return(
        <div className="root">
            <Grid container>
                <Grid item xs={12}
                >
                {/* This is a row holding the portfolio */}
                <div className="profile-section">
                    <img src={AvatarImage} alt="Avatar"/>
                    <h1>Charles Cao</h1>
                </div>
                </Grid>

                <div className="button-section">
                        {/* <AwesomeButton
                            type="primary"
                            className="fh-button"
                        >
                            #FREEHORACE
                        </AwesomeButton>
                    
                
                        <AwesomeButton
                            type="primary"
                            className="b-button"
                        >
                            #BLM
                        </AwesomeButton>
                    
                    
                        <AwesomeButton
                            type="primary"
                            className="s-button"
                        >
                            #StopAAPIHate
                        </AwesomeButton>
                    
                        <AwesomeButton
                            type="primary"
                            className="bezos-button"
                        >
                            #BYEBYEBEZOS
                        </AwesomeButton> */}
                    
                </div>
            </Grid>
            {/* Insert my Button links here */}




            {/* This will be all my social media links wrapped in a row */}
            <div className="social-links">
                <ul>
                    <li><a href= "mailto:ccao2776@gmail.com" target = "_blank"><i class="fa fa-envelope" aria-hidden = "true"></i></a></li>
                    <li><a href= "https://www.instagram.com/chzrles/" target = "_blank"><i class="fa fa-instagram" aria-hidden = "true"></i></a></li>
                    <li><a href= "https://www.linkedin.com/in/charles-cao-2726011a6/" target = "_blank"><i class="fa fa-linkedin" aria-hidden = "true"></i></a></li>
                    <li><a href= "https://github.com/ccao2776" target = "_blank"><i class="fa fa-github" aria-hidden = "true"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Homepage;