import React from 'react'
import LogoSvg from '../assets/Partners/PerlEco/logo.svg'
import Tree from '../assets/Partners/PerlEco/tree.png'
import Background from '../assets/Partners/PerlEco/background.png'
import { Button, Grid, Link } from '@material-ui/core'
import { contentTextStyle } from '../styles/common'
import { makeStyles } from '@material-ui/styles'

const useStyles=makeStyles({
    button:{
        width: "282px",
        height: "66px",
        background: "linear-gradient(135deg, #128D89 0%, #50D19D 100%)",
        borderRadius:"16px",
        fontFamily:"Bai Jamjuree, sans serif",
        fontStyle: "normal",
        fontWeight:'bold',
        fontSize:'20px',
        color:"white",
        "&:hover":{
            background:'none'
        }
    },
    
})

export default function PartnerPerlEco() {
    const classes=useStyles()
    return (
        <div className='partner-perl-eco-container' style={{backgroundImage: `url(${Background})`, backgroundSize:'fit', backgroundRepeat:'no-repeat', borderRadius:'64px', }}>
            <Grid container justify='space-between' style={{margin:'0% 5%', maxWidth:'100%'}}>
                <Grid item justify='flex-start'>
                    <Grid container direction='column'>
                        <Grid item style={{marginTop:'25px'}}>
                            <img src={LogoSvg} style={{height:'75px'}} alt=''/>
                        </Grid>
                        <Grid item style={{maxWidth:'600px'}}>
                            <p style={{...contentTextStyle, fontSize:'24px', }}>
                            The Planetary Ecosystem Registration Ledger will use blockchain technologies for real-world ecological assets through tokenizing carbon credits and biodiversity, NFTs and decentralised (DeFi) rewards.
                            </p>
                        </Grid>
                        <Grid item style={{marginTop:'50px', marginBottom:'50px'}}>
                            <Link href='https://perl.eco' target='_blank' rel='noopener' style={{textDecoration:'none'}}>
                                <Button className={classes.button}> 
                                    Find Out More       
                                </Button>                            
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item justify='flex-end'>
                    <img src={Tree} alt='' style={{maxWidth:'80%'}}/>
                </Grid>
            </Grid>
        </div>
    )
}
