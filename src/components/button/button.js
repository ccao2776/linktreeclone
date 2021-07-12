import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import styles from 'react-awesome-button/src/styles/themes/theme-blue';
import Grid from '@material-ui/core/Grid';

const Button = () =>{
    return(
        <div className="buttons">
            <Grid container>
                <Grid item 
                xs={12}
                >
                    <AwesomeButton
                        type="primary"
                        size="large"
                    >
                        #FREEHORACE
                    </AwesomeButton>
                </Grid>
                
                <Grid item 
                xs={12}
                >
                    <AwesomeButton
                        type="primary"
                        size="large"
                    >
                        #BLM
                    </AwesomeButton>
                </Grid>
                <Grid item 
                xs={12}
                >
                    <AwesomeButton
                        type="primary"
                        size="large"
                    >
                        #StopAAPIHate
                    </AwesomeButton>
                </Grid>
                <Grid item 
                xs={12}
                >
                    <AwesomeButton
                        type="primary"
                        size="large"
                    >
                        #BYEBYEBEZOS
                    </AwesomeButton>
                </Grid>
            </Grid>
        </div>
    );
}

export default Button;