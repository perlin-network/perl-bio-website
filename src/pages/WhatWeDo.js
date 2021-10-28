import React from 'react'
import {Grid} from '@material-ui/core'
import {titleTextStyle, contentTextStyle} from '../styles/common.js'
import IconLeft from '../assets/WWD/IconLeft.png'
import IconRight from '../assets/WWD/IconRight.png'
import CaseStudies from '../components/CaseStudies.js'
function WhatWeDo() {
    let gridItems=[
        {
            icon:IconLeft,
            id:'left-box', 
            title:"Carbon and Biodiversity",
            content:`Bioeconomy has a deep understanding of environmental projects and consults organisations on creating effective and scalable activities. We develop strategy, project baselines and methodologies, particularly by leveraging the PERL.eco blockchain network. 

            Organisations can explore opportunities with carbon or biodiversity credits, and encourage the conservation of biodiversity. They can use platforms to incentivise the collection and uploading of biodiversity genomic data.
            `
        },
        {
            icon:IconRight,
            id:'right-box', 
            title:"Decentralized finance and blockchain technologies",
            content:`Bioeconomy also helps organisations capitalise on opportunities created by decentralized finance and other blockchain technologies, such as non-fungible tokens (NFTs) to fund the conservation of critically endangered species.
            `
        }
    ]
    return (
        <div className='wwd-container' style={{paddingTop:"120px", background:"#333336"}}>
            <div className='wwd-content' style={{margin:"0% 5%",}}>
            <div className='wwd-title' style={{...titleTextStyle, fontSize:'48px'}}>
                What We Do
            </div>
            <div className='wwd-grid-container' style={{marginTop:"50px"}}>
                <Grid container direction='row' justify='space-around'>
                    {gridItems.map(i=>{
                        return(
                            <Grid item style={{maxWidth:"620px", borderRadius:'16px',  background:'linear-gradient(180deg, #3C423C 0%, #333336 266.93%)', marginBottom:'72px'}}>
                                <div className='grid-item-container' style={{margin:"5%"}}>
                                <div className='grid-item-icon'>
                                    <img src={i.icon} alt=''/>                                    
                                </div>
                                <div className='grid-item-title' style={{...titleTextStyle, minHeight:'95px', fontSize:"36px"}}>
                                    {i.title}
                                </div>
                                <div className='grid-item-content' style={{...contentTextStyle, marginTop:"25px", fontSize:"18px"}}>
                                {i.content.split('\n').map(str=>{
                                            return(
                                                <p>{str}</p>
                                            )
                                        })}
                                </div>
                                </div>
                            </Grid>

                        )
                    })}
                </Grid>
            </div>
            </div>
            <CaseStudies/>
        </div>
    )
}
export default WhatWeDo;