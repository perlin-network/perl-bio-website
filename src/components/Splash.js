import { Button, Grid } from '@material-ui/core';
import React from 'react'
import LogoSvg from '../assets/Splash/logo.svg'
// import TreeSvg from '../assets/Splash/tree.svg'
import TreePng from '../assets/Splash/tree.png'
import {titleTextstyle, contentTextStyle} from '../styles/common.js'

function Splash() {
    return (        
 
            
            <div
            style={{
                backgroundColor:'#333336',mixBlendMode:'pass-through',  backgroundSize: "cover", minHeight:'100vh' 
            }}
            >
            <div className='navbar-container' style={{marginLeft:'5%', marginRight:'5%', display:'flex', flexDirection:'column'}}>
                <Grid container justify='space-between'>
                    <Grid item justify='flex-start'>
                        <Button style={{ width:"100%",justifyContent:"flex-start", borderRadius:"16px",  maxWidth:"376px",marginTop:'5%', maxHeight:"83.22px",}}>
                            <a href='/' rel='noopener noreferrer' >
                                <img src={LogoSvg} style={{minHeight:"83.22px",}} alt=''/>                            
                            </a>
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <div className='hero-body' style={{marginLeft:'5%', marginRight:'5%', marginTop:'120px'}}>
                <Grid container justify='space-around'>
                    <Grid item justify='flex-start' style={{ maxWidth:window.innerWidth < 768 ?'100%':'50%'}}>
                            <div className='splash-header' style={{...titleTextstyle, marginTop:'16px', maxWidth:'750px'}}>
                                Build a sustainable future 
                        </div>
                            <div className='splash-content' style={{...contentTextStyle, marginTop:"100px", maxWidth:'750px'}}>
                            Bioeconomy is a leader in creating climate change solutions and developing strategies for ecological projects, including around carbon and biodiversity. This includes empowering organizations to realise opportunities with blockchain technologies.
                            </div>``
                        {/* </div> */}
                    </Grid>
                    <Grid item justify='flex-end' style={{ marginRight:'5%'}}>                        
                        <div className='tree-container' >
                            <img src={TreePng} alt='' style={{ position:'relative', top:'-120px', maxWidth:'800px'}}/>
                        </div>
                    </Grid>
            </Grid>
            </div>
            </div>           
            
        
    )
}
export default Splash;
