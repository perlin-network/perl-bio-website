import React from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import airCarbonPng from '../assets/Partners/Others/aircarbon.png'
import ataMariePng from '../assets/Partners/Others/ata-marie.png'
import dianFosseySvg from '../assets/Partners/Others/dian-fossey.svg'
import spaceIntelligencePng from '../assets/Partners/Others/spaceIntelligence.png'
import sparkSvg from '../assets/Partners/Others/spark.svg'


const useStyles=makeStyles({
    root:{
        margin:'0% 5%'
    },
    partnerImage:{
        maxHeight:'72px',
    }
})
const partnerLogos=[
    {
        name:'airCarbon',
        image:airCarbonPng        
    },
    {
        name:'ataMarie',
        image:ataMariePng,
        grayscale:true
    },
    {
        name:'dianFossey',
        image:dianFosseySvg
    },
    {
        name:'spaceIntelligence',
        image:spaceIntelligencePng
    },
    {
        name:'sparkAr',
        image:sparkSvg
    },
]
function PartnerOthers() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={5} justify="space-around">
                {partnerLogos.map(i=>{
                    return(
                        <Grid item xs={12} md={4}>
                            <img className={classes.partnerImage} src={i.image} alt={i.name} style={{filter:i.grayscale?'brightness(0) invert(1)':''}}/>
                        </Grid>

                    )
                })}
            </Grid>
            
        </div>
    )
}
export default PartnerOthers