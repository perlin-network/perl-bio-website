import { Button } from '@material-ui/core';
import React from 'react'
import { renderToStaticMarkup } from "react-dom/server";
import {ReactComponent as BackgroundSVG} from '../assets/Splash/background.svg'
import LogoSvg from '../assets/Splash/logo.svg'

function Splash() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<BackgroundSVG />));
    return (        
 
            
            <div
            style={{
                backgroundColor:'#333336',mixBlendMode:'pass-through',  backgroundImage: `url("data:image/svg+xml,${svgString}")`, backgroundSize: "cover", minHeight:'100vh'
            }}
            > 
            <div className='content-container' style={{marginLeft:'5%', marginRight:'5%', display:'flex', flexDirection:'column'}}>
            <a href='/' rel='noopener'>
                <Button style={{ width:"100%",justifyContent:"flex-start", borderRadius:"16px",  maxWidth:"376px",marginTop:'5%', maxHeight:"83.22px",}}>
                    <img src={LogoSvg} style={{minHeight:"83.22px",}} alt=''/>
                </Button>
                </a>
            <div className='text-container' style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', marginTop:'120px'}}>
                <div className='splash-header' style={{...titleTextstyle, maxWidth:"50%"}}>
                    Tokenized real-world ecological assets
                </div>
                <div className='splash-content' style={{...contentTextStyle, maxWidth:"50%", marginTop:"100px"}}>
                    The platform to incentivise the collection/uploading of biodiversity genomic data, and labelling/annotation of it which will allow productive processing of data to be done. The platform aims to incentivise the conservation of biodiversity with the creation of revenue streams from the monetisation of this biogenome IP and value.
                </div>
                </div>
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