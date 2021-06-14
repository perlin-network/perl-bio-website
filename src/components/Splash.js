import { Button } from '@material-ui/core';
import React from 'react'
import LogoSvg from '../assets/Splash/logo.svg'
import TreeSvg from '../assets/Splash/tree.svg'

function Splash() {
    return (        
 
            
            <div
            style={{
                backgroundColor:'#333336',mixBlendMode:'pass-through',  backgroundSize: "cover", minHeight:'100vh' 
            }}
            > 
            <div className='navbar-container' style={{marginLeft:'5%', marginRight:'5%', display:'flex', flexDirection:'column'}}>
                <a href='/' rel='noopener'>
                    <Button style={{ width:"100%",justifyContent:"flex-start", borderRadius:"16px",  maxWidth:"376px",marginTop:'5%', maxHeight:"83.22px",}}>
                        <img src={LogoSvg} style={{minHeight:"83.22px",}} alt=''/>
                        
                    </Button>
                </a>
            </div>
            <div className='hero-body' style={{display:'flex', marginLeft:'5%', marginRight:'5%', marginTop:'120px', flexDirection:window.innerWidth < 768 ?'column':'row'}}>
                <div className='text-container' style={{display: 'flex', flexDirection:'column', justifyContent:'flex-start', maxWidth:window.innerWidth < 768 ?'100%':'50%'}}>
                    <div className='splash-header' style={{...titleTextstyle}}>
                        Tokenized real-world ecological assets
                    </div>
                    <div className='splash-content' style={{...contentTextStyle, marginTop:"100px"}}>
                        The platform to incentivise the collection/uploading of biodiversity genomic data, and labelling/annotation of it which will allow productive processing of data to be done. The platform aims to incentivise the conservation of biodiversity with the creation of revenue streams from the monetisation of this biogenome IP and value.
                    </div>
                </div>
            <img src={TreeSvg} style={{justifyContent:'flex-end', maxWidth:window.innerWidth < 768 ?'100%':'50%'}} alt=''/>
            </div>
            </div>           
            
        
    )
}
export default Splash;
let titleTextstyle={
    fontFamily:"Bai Jamjuree, sans serif",
    fontStyle: "normal",
    fontWeight: "bold", 
    fontSize:"72px",
    color:"#91D873"
}
let contentTextStyle={
    ...titleTextstyle,
    fontWeight:"500",
    color:"white",
    fontSize:"24px"
}