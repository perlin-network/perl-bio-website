import React from 'react'
import {Grid} from '@material-ui/core'
import {titleTextstyle, contentTextStyle} from '../styles/common.js'
import IconLeft from '../assets/WWD/IconLeft.png'
import IconRight from '../assets/WWD/IconRight.png'
function WhatWeDo() {
    let gridItems=[
        {
            icon:IconLeft,
            id:'left-box', 
            title:"Carbon and Biodiversity",
            content:`Bioeconomy has a deep understanding of environmental projects and consults organizations on creating effective and scalable activities. We develop strategy, project baselines and methodologies, particularly by leveraging the PERL.eco blockchain network. 

            Organizations can tokenize carbon or biodiversity credits, and encourage conservation of biodiversity. They can use platforms to incentivise the collection and uploading of biodiversity genomic data. 
            `
        },
        {
            icon:IconRight,
            id:'right-box', 
            title:"Decentralized finance and blockchain technologies",
            content:`Bioeconomy has a deep understanding of environmental projects and consults organizations on creating effective and scalable activities. We develop strategy, project baselines and methodologies, particularly by leveraging the PERL.eco blockchain network. 

            Organizations can tokenize carbon or biodiversity credits, and encourage conservation of biodiversity. They can use platforms to incentivise the collection and uploading of biodiversity genomic data. 
            `
        }
    ]
    return (
        <div className='wwd-container' style={{paddingTop:"120px", background:"#333336"}}>
            <div className='wwd-content' style={{margin:"0% 5%",}}>
            <div className='wwd-title' style={{...titleTextstyle, fontSize:'48px'}}>
                What We Do
            </div>
            <div className='wwd-grid-container' style={{marginTop:"50px"}}>
                <Grid container direction='row' justify='space-between'>
                    {gridItems.map(i=>{
                        return(
                            <Grid item style={{maxWidth:"720px", background:'linear-gradient(180deg, #3C423C 0%, #333336 266.93%)'}}>
                                <div className='grid-item-container' style={{margin:"5%"}}>
                                <div className='grid-item-icon'>
                                    <img src={i.icon} alt=''/>                                    
                                </div>
                                <div className='grid-item-title' style={{...titleTextstyle, fontSize:"36px"}}>
                                    {i.title}
                                </div>
                                <div className='grid-item-content' style={{...contentTextStyle, marginTop:"70px", fontSize:"18px"}}>
                                    {i.content}
                                </div>
                                </div>
                            </Grid>

                        )
                    })}
                </Grid>
            </div>
            </div>
        </div>
    )
}
export default WhatWeDo;