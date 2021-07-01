import React from 'react'
import LogoSvg from '../assets/Partners/PerlEco/logo.svg'
import Tree from '../assets/Partners/PerlEco/tree.png'
import Background from '../assets/Partners/PerlEco/background.png'
import { Button, Grid, Link } from '@material-ui/core'
import { contentTextStyle, buttonStyle } from '../styles/common'

export default function PartnerPerlEco() {
    return (
        <div className='partner-perl-eco-container' style={{backgroundImage: `url(${Background})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', borderRadius:'16px', padding:'5%'}}>
            <Grid container justify='space-between'>
                <Grid item justify='flex-start'>
                    <Grid container direction='column'>
                        <Grid item>
                            <img src={LogoSvg} style={{height:'75px'}} alt=''/>
                        </Grid>
                        <Grid item style={{maxWidth:'600px'}}>
                            <p style={{...contentTextStyle, fontSize:'24px', }}>
                            The Planetary Ecosystem Registration Ledger will use blockchain technologies for real-world ecological assets through tokenizing carbon credits and biodiversity, NFTs and decentralised (DeFi) rewards.
                            </p>
                        </Grid>
                        <Grid item style={{marginTop:'50px'}}>
                            <Link href='https://perl.eco' target='_blank' rel='noopener' style={{textDecoration:'none'}}>
                                <Button style={{...buttonStyle, ...contentTextStyle}}> 
                                    Find Out More       
                                </Button>                            
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item justify='flex-end'>
                    <img src={Tree} alt='' style={{maxWidth:'100%'}}/>
                </Grid>
            </Grid>
        </div>
    )
}
