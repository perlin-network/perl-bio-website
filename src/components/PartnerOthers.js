import React from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import airCarbonSvg from '../assets/Partners/Others/aircarbon.svg'
import perlEcoSvg from '../assets/Partners/Others/perl-eco.svg'
import ataMarieSvg from '../assets/Partners/Others/ata-marie.svg'
import dianFosseySvg from '../assets/Partners/Others/dian-fossey.svg'
import spaceIntelligenceSvg from '../assets/Partners/Others/spaceIntelligence.svg'
import sparkSvg from '../assets/Partners/Others/spark.svg'


const useStyles=makeStyles({
    root:{
        margin:'0% 5%'
    },
    partnerImage:{
        maxHeight:'500px',
    }
})
const partnerLogos=[
    {
        name:'dianFossey',
        image:dianFosseySvg
    },
    {
        name:'sparkAr',
        image:sparkSvg
    },
    {
        name:'spaceIntelligence',
        image:spaceIntelligenceSvg
    },
    {
        name:'ataMarie',
        image:ataMarieSvg,        
    },
    {
        name:'airCarbon',
        image:airCarbonSvg        
    },
    {
        name:'perlrEco',
        image:perlEcoSvg
    },
]
function PartnerOthers() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="space-evenly">
                {partnerLogos.map(i=>{
                    return(
                        <Grid item xs={12} md={4} style={{textAlign:'center'}}>
                            <img className={classes.partnerImage} src={i.image} alt={i.name} style={{filter:i.grayscale?'brightness(0) invert(1)':''}}/>
                        </Grid>

                    )
                })}
            </Grid>
            
        </div>
    )
}
export default PartnerOthers