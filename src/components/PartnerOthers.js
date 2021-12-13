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
        '&:hover':{
            opacity:0.7
        }
    }
})
const partnerLogos=[
    {
        name:'dianFossey',
        image:dianFosseySvg,
        link:'https://gorillafund.org/'        
    },
    {
        name:'sparkAr',
        image:sparkSvg,
        link:'https://sparkar.facebook.com/ar-studio/'
    },
    {
        name:'spaceIntelligence',
        image:spaceIntelligenceSvg,
        link:'https://www.space-intelligence.com/'
    },
    {
        name:'ataMarie',
        image:ataMarieSvg,
        link:'https://www.ata-marie.com/'
    },
    {
        name:'airCarbon',
        image:airCarbonSvg,
        link:'https://www.aircarbon.co/'
    },
    {
        name:'perlrEco',
        image:perlEcoSvg,
        link:'https://www.perl.eco/'
    }
]
function PartnerOthers() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="space-evenly">
                {partnerLogos.map(i=>{
                    return(
                        <Grid item xs={12} md={4} style={{textAlign:'center'}}>
                            <a href={i.link} target='_blank' rel='noreferrer noopener'>
                                <img className={classes.partnerImage} src={i.image} alt={i.name} style={{filter:i.grayscale?'brightness(0) invert(1)':''}}/>
                            </a>
                        </Grid>

                    )
                })}
            </Grid>
            
        </div>
    )
}
export default PartnerOthers