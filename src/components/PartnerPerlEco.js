import React from 'react'
import LogoSvg from '../assets/Partners/PerlEco/logo.svg'
import Tree from '../assets/Partners/PerlEco/tree.png'
import Background from '../assets/Partners/PerlEco/background.png'
import { Button, Grid, Link } from '@mui/material'
import { contentTextStyle, buttonStyle } from '../styles/common'

export default function PartnerPerlEco() {
    return (
        <div className='partner-perl-eco-container' style={{backgroundImage: `url(${Background})`, backgroundSize:'fit', backgroundRepeat:'no-repeat', borderRadius:'64px', }}>
            <Grid container justifyContent='space-between' style={{margin:'0% 5%', maxWidth:'100%'}}>
                <Grid item justifyContent='flex-start'>
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
                                <Button style={{...buttonStyle, ...contentTextStyle}}> 
                                    Find Out More       
                                </Button>                            
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item justifyContent='flex-end'>
                    <img src={Tree} alt='' style={{maxWidth:'80%'}}/>
                </Grid>
            </Grid>
        </div>
    );
}
