import React from 'react'
import {Grid} from '@material-ui/core'
import {titleTextstyle, contentTextStyle} from '../styles/common.js'
import PictureLeft from '../assets/CaseStudies/PictureLeft.png'
import PictureRight from '../assets/CaseStudies/PictureRight.png'

function CaseStudies() {
    let gridItems=[
        {
            icon:PictureLeft,
            title:`North Pikounda REDD+ Project`,
            content:`
            The North Pikounda REDD+ Project (NPR+) is the first voluntary REDD+ project in the Republic of Congo (RoC) that will reduce GHG emissions by avoiding deforestation and degradation under the VCS Standard. The NPR+ Project began as an idea in 2010, and formally began its crediting period in 2012; it is the initial REDD+ Pilot project of the Republic of Congo. The Project protects 92,530 hectares of pristine unlogged rainforest. 

The NPR+ project area contains a total of 22 protected species considered by the IUCN & CITES. Such as the Lowland Gorilla (Gorilla gorilla gorilla), African Forest Elephant (Loxodonta cyclotis), Hippopotamus (Hippopotamus amphibius) & Leopard (Panthera pardus)
            `
        },
        {
            icon:PictureRight,
            title:`Riau Ecosystem Restoration (RER) Carbon Project`,
            content:`
            The Riau Ecosystem Restoration Carbon Project seeks to protect and restore 130,090 ha of peatland ecosystem located in the Republic of Indonesia while at the same time preserving biodiversity and enhancing local livelihoods. The Project will avoid 78,425 ha of forest clearing and conversion to an industrial forestry plantation. The Project is on the island of Sumatra and in the Province of Riau. Specifically, it is located on the Kampar Peninsula, which is a rain-fed peatland forest made up of four former logging concessions. 

            Through the REDD+ process of avoiding planned deforestation and wetlands conservation and restoration, the Project will be preserving the remaining peat swamp forests by preventing their conversion to forestry plantations, containing a total of 797 species of animals and plants. These species include the Sumatran Tiger (Panthera tigris sumatrae) & Storm's Stork (Ciconia stormi).
            
            `

        }
    ]
    return (
        <div className='case-studies-container' style={{background:'#333336', paddingTop:'120px'}}>
            <div className='case-studies-content' style={{margin: '0 5%'}}>
                <div className='case-studies-title' style={{...titleTextstyle, fontSize:'48px'}}>
                    Case Studies
                </div>
                <div className='case-studies-grid' style={{marginTop:'80px'}}>
                    <Grid container justify='space-between'>
                        {gridItems.map(i=>{
                            return(
                                <Grid item style={{background:'linear-gradient(180deg, #3C423C 0%, #333336 154.11%)', borderRadius:'16px', maxWidth:'720px'}}>
                                    <div className='grid-content-container' style={{margin:'5%'}}>
                                        <div className='grid-item-icon'>
                                            <img src={i.icon} alt=''/>
                                        </div>
                                        <div className='grid-item-title' style={{...titleTextstyle, fontSize:'36px', minHeight:'100px', marginTop:'60px'}}>
                                            {i.title}
                                        </div>
                                        <div className='grid-item-content' style={{...contentTextStyle, fontSize:"18px", marginTop:'40px'}}>
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
            
        </div>
    )
}
export default CaseStudies;