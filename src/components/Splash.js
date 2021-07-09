import React from 'react'
import { Grid, Link, Button } from '@material-ui/core';
import TreeSvg from '../assets/Splash/tree.png'
import Background from '../assets/Splash/background.png'
import {titleTextStyle, contentTextStyle, buttonStyle} from '../styles/common.js'
import PartnerPerlEco from './PartnerPerlEco'
function Splash() {
    return (        
            <div className='splash-container'
            style={{
                backgroundColor:'#333336', mixBlendMode:'pass-through',  backgroundSize: "cover", minHeight:'100vh', 
            }}
            > 
            <div className='splash-background' style={{backgroundImage: `url(${Background})`, backgroundSize:'fit', backgroundRepeat:'no-repeat', backgroundPosition:'center center', padding:'5%'}}>
            <Grid container justify='space-between' style={{maxWidth:'100%', marginTop:'120px', }}>
                <Grid item justify='flex-start'>
                    <Grid container direction='column' >
                        <Grid item>
                            <div className='splash-header' style={{...titleTextStyle, fontSize:'52px',  maxWidth:'600px'}}>
                                Build a sustainable future 
                            </div>
                        </Grid>
                        <Grid item>
                            <div className='splash-content' style={{...contentTextStyle, fontSize:'24px', marginTop:"100px", maxWidth:'550px'}}>
                                Bioeconomy is a leader in creating climate change solutions and developing strategies for ecological projects, including around carbon and biodiversity. This includes empowering organisations to realise opportunities with blockchain technologies.
                            </div>
                        </Grid>
                        <Grid item style={{marginTop:'50px'}}>
                            <Link href='/who' style={{textDecoration:'none', zIndex:'0'}}>
                                <Button style={{...buttonStyle, ...contentTextStyle, background:"#91D873", color:'black', fontWeight:'bold', marginBottom:'72px'}}>
                                    {`Learn More`}
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>                    
                </Grid>
                <Grid item justify='flex-end' >
                    <img src={TreeSvg} alt='' style={{maxWidth:'100%', minWidth:'100%', maxHeight:"720px", marginTop:window.innerWidth < 768 ?'0px':'-125px' }}/>
                </Grid> 
            </Grid>
            </div>
            <div className='partner-container' style={{marginTop:'75px', maxWidth:'100%',margin:'0% 5%', backgroundColor:'#333336'}}>
                <p style={{...contentTextStyle, color:"#A5AFA8", }}>Partners</p>
                <Grid container direction='column'>
                    <Grid item style={{marginTop:'35px',}}>
                        <PartnerPerlEco />
                    </Grid>
                </Grid>
            </div>
            </div>      
            
        
    )
}
export default Splash;
