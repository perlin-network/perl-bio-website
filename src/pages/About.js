import React, {useRef} from 'react'
import { makeStyles } from '@material-ui/styles'
import {useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Card, Button, CardContent } from '@material-ui/core'
import DorjeePng from '../assets/About/dorjee.png'
import RalphPng from '../assets/About/ralph.png'
import markPng from '../assets/About/mark.png'
import annieJpg from '../assets/About/annie.jpg'
import elkanJpg from '../assets/About/elkan.jpg'
import garyPng from '../assets/About/gary.png'
import byronJpg from '../assets/About/byron.jpg'
import illustrationSvg from '../assets/About/illustration.svg'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles=makeStyles({
    root:{
        background:'#ECF3EF',
        fontFamily:"Bai Jamjuree, sans serif",
        padding:'3% 0%'
    },
    rootWrapper:{
        margin:'0% 5%',
    },

    hero:{
        minHeight:'65vh'
    },
    heroText:{
        color:'#72A15F',
        fontSize:'50px',        
    },
    button:{
        borderRadius:'50%'
    },
    '@keyframes bounce':{
        'from':{
            transform: 'translateY(0px);'
        },
        'to':{
            transform: 'translateY(-15px);'
        }
    },
    downArrow:{
        animation:'$bounce 1000ms infinite alternate',
        textAlign:'center',
        fontSize:'50px',
        color:'#72A15F'
    },
    heroIllustration:{
        textAlign:'center',
        justifyContent:'center'
    },
    leadershipCardsLeft:{
        marginTop:'25px'
    },
    leadershipCardsRight:{
        // marginTop:'275px'
    },
    card:{
        margin:'0% 5%',
        minHeight:'600px',
        borderRadius:'16px'
    },
    cardContent:{
        margin:'3%'
    },
    cardImage:{
        filter:'grayscale(100%)',
        maxHeight:'120px',
        borderRadius:'16px'
    },
    cardName:{
        marginTop:'25px',
        color:'#72A15F',
        fontSize:'24px',
        fontWeight:'bold'
    },
    cardTitle:{
        marginTop:'10px',
        color:'#72A15F',
    },
    cardBullets:{
        marginTop:'25px'
    },
})

function About() {
    const classes=useStyles()
    const theme=useTheme()
    const section1=useRef(null)
    const executeScroll = () => section1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })    
    let aboutInfoLeft=[
        {
            portrait:DorjeePng,
            name:'Dorjee Sun',
            title:"CEO and Founder, Bioeconomy",
            bullets:[
                '• TIME magazine Hero of the Environment',
                '• Winner of the Earth Day Species Award',
                '• Advisor to Al Gore’s Climate Reality Australia',
                '• Special Advisor to the International Chamber of Commerce',
                '• Founding Secretariat of the Fire Free Alliance',
                '• Subject of Hugh Jackman narrated documentary “The Burning Season”',            
            ]
        },
        {
            portrait:markPng,
            name:'Mark Harding',
            title:"Co-founder and Project Lead, Bioeconomy",
            bullets:[
                '• Head of CDM & Sustainability at Carbon Conservation',
                '• Pioneer in the carbon industry since 2007',
                '• Started his own CDM project development company in China',
                '• Specialist in sustainability, carbon project development and biodiversity',
                '• Barrister and Solicitor of the High Courts of New South Wales, Australia & New Zealand ',
                '• BSc major in Biology and Ecology from the University of Auckland.'                          
            ]
        },
        {
            portrait:garyPng,
            name:'Gary Walsh',
            title:"Chief Communications Officer",
            bullets:[
                '• 20 years in communication & public relations',
                '• Led the economic communications for Republic of Philippines',
                '• Lead consultant for clients including eBay, PayPal and Uber in Southeast Asia',
                '• Previously APAC Regional Chairman for Apco Worldwide',
                '• Former member of the Westminster City Council',
                '• Winner of several PR & communications awards',
            ]
        },
        {
            portrait:annieJpg,
            name:'Annie Ye',
            title:"Financial Analyst",
            bullets:[
                '• Almost 20 years of experience in corporate finance, strategy and economics',
                '• Former commercial advisor at BP America and Treasury advisor at BP Singapore',
                '• Former investment account analyst at Goldman Sachs affiliates',
                '• Specialized in Financial Modeling and Analysis. Led a number of oil and gas major project developments, M&A activities in North America, and project financing in Asia (all $2bn+ scope)',
                '• PhD in Biology and MBA; 10+ journal and book publications'
            ]
        },

    ]
    const aboutInfoRight=[
        {
            portrait:RalphPng,
            name:'Ralph J Strebel',
            title:"Co-founder, Head of Carbon & Legal Counsel, Bioeconomy",
            bullets:[
                '• Lead advisor to Carbon Conservation',
                '• Chairman of Greenhouse Gas Management Institute (GHGMI) ',
                '• Developed the world’s first REDD+ Improved Forest Management project in Africa',
                '• Lead author of the Republic of Congo’s successful application to join the World Bank’s',
                '• Forest Carbon Partnership Facility',
                '• Head of Carbon at Perlin'
            ]
        },
        {
            portrait:elkanJpg,
            name:'Dr Paul Elkan',
            title:"Chief Conservation Officer",
            bullets:[
                '• 30 years of conservation and wildlife protection of Central and East Africa and the Sudano-Sahel region ',
                '• Led c. $200 million conservation funding from well known bilateral, multilateral, and private donors in Africa',
                '• Lead director for Wildlife Conservation Society and responsible for several aerial survey efforts as part of the Great Elephant Census + analysis of conservation security for multiple regions',
                '• PHD in Conservation Biology & US FAA Commercial Pilot',            ]
        },
        {
            portrait:byronJpg,
            name:'Byron Grigoratos',
            title:"Chief Commercial Officer, Bioeconomy",
            bullets:[
                '• Former Country Manager & Senior Trader at Glencore International focusing on commodity trading & business development',
                '• Former Investment Banker at Investec Private Bank',
                '• Strong capital markets, M&A, structured finance & corporate structuring experience',
                '• Chartered Accountant and CFA Charterholder'
            ]
        },
    ]    
    
    return (
            <div className={classes.root}>
                <div className={classes.rootWrapper}>
                    <Grid container className={classes.hero} direction='row' alignItems='center' >
                        <Grid item xs={12} md={6}>
                            <div className={classes.heroText}>
                                Meet our leadership
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={classes.heroIllustration}>
                                <img src={illustrationSvg} alt='' style={{maxWidth:'100%'}}/>
                            </div>
                        </Grid>
                    </Grid>
                    <div className={classes.downArrow}>
                        <Button className={classes.button} onClick={executeScroll}>
                            <KeyboardArrowDownIcon className={classes.downArrow}/>
                        </Button>
                    </div>
                    <Grid ref={section1} container direction='row' >
                        <Grid item xs={12} md={6}>
                            <Grid container className={classes.leadershipCardsLeft} justify='space-evenly' direction='column' spacing={3}>
                                    {aboutInfoLeft.map(i=>{
                                        return(
                                            <Grid item>
                                                <Card className={classes.card}>
                                                    <CardContent className={classes.cardContent}>
                                                        <div className={classes.cardImage}>
                                                            <img className={classes.cardImage} src={i.portrait} alt='portrait'/>
                                                        </div>
                                                        <div className={classes.cardName}>
                                                            {i.name}
                                                        </div>
                                                        <div className={classes.cardTitle}>
                                                            {i.title}
                                                        </div>
                                                        <Grid container className={classes.cardBullets} spacing={2}>
                                                            {i.bullets.map(b=>{
                                                                return(
                                                                    <Grid item>
                                                                        {b}
                                                                    </Grid>
                                                                )
                                                            })}
                                                        </Grid>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        )
                                    })}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container className={classes.leadershipCardsRight} justify='space-evenly' direction='column' spacing={3} style={{marginTop:useMediaQuery(theme.breakpoints.down('md'))?'15px':'25px'}}>
                                    {aboutInfoRight.map(i=>{
                                        return(
                                            <Grid item>
                                                <Card className={classes.card}>
                                                    <CardContent className={classes.cardContent}>
                                                        <div className={classes.cardImage}>
                                                            <img className={classes.cardImage} src={i.portrait} alt='portrait'/>
                                                        </div>
                                                        <div className={classes.cardName}>
                                                            {i.name}
                                                        </div>
                                                        <div className={classes.cardTitle}>
                                                            {i.title}
                                                        </div>
                                                        <Grid container className={classes.cardBullets} spacing={2}>
                                                            {i.bullets.map(b=>{
                                                                return(
                                                                    <Grid item>
                                                                        {b}
                                                                    </Grid>
                                                                )
                                                            })}
                                                        </Grid>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        )
                                    })}
                            </Grid>
                        </Grid>   
                    </Grid>
                </div>
            </div>
    )
}
export default About;
