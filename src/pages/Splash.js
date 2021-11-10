import React, {useRef} from 'react'
import { makeStyles } from '@material-ui/styles'
import {useTheme} from '@material-ui/core/styles'
import { Grid, Link, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import pictureLeftPng from '../assets/CaseStudies/PictureLeft.png'
import pictureRightPng from '../assets/CaseStudies/PictureRight.png'

import treeSvg from '../assets/Splash/tree-only.svg'
import {titleTextStyle, contentTextStyle} from '../styles/common.js'
import PartnerOthers from '../components/PartnerOthers'
import { ResponsivePie } from '@nivo/pie'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles=makeStyles({
    root:{
        backgroundColor:'#FFFFFF',
        // mixBlendMode:'pass-through',
        // backgroundSize: "cover", 
        // minHeight:'100vh',
        // padding:'3% 0%'
    },
    rootWrapper:{
        margin:'0% 5%'
    },
    hero:{
        minHeight:'65vh'
        // margin:'0% 5%',
    },
    backgroundImage:{                
        backgroundSize:'cover',
        // margin:'0% -6%',
        minWidth:'50vw',
        // height:'100vh',
        minHeight:'600px',
        // paddingBottom:'5%',
        // backgroundPositionY:'-5vh',
        // backgroundPositionX:'-20vw',
        backgroundRepeat:'no-repeat',        
    },
    heroContainer:{
        minHeight:'75vh',
        // marginBottom:'-5%'
    },
    heroGrid:{
        marginTop:'15%'
    },
    '@keyframes bounce':{
        'from':{
            transform: 'translateY(0px);'
        },
        'to':{
            transform: 'translateY(-15px);'
        }
    },
    downArrowWrapper:{
        animation:'$bounce 1000ms infinite alternate',
        textAlign:'center',
        fontSize:'50px',
        position:'absolute',
        top:'70vh',
        left:'45%'
        
    },
    downArrow:{
        animation:'$bounce 1000ms infinite alternate',
        fontSize:'50px',
        color:'#72A15F',
        
    },
    // downArrow:{
    //     position:'absolute',
    //     bottom:90,
    //     marginLeft:'40vw',
    //     // bottom:'1vh',
    //     animation:'$bounce 1000ms infinite alternate',
    //     textAlign:'center',
    // },
    downArrowIcon:{
        color:'#72A15F',
        fontSize:'300%'
    },
    button:{
        fontFamily:"Bai Jamjuree, sans serif",
        width: "282px",
        height: "66px",
        fontWeight:'bold',
        fontSize:'20px',
        borderRadius:'16px',
        background: "#91D873",
        textDecoration:'none',
        '&:hover':{
            color:'#72A15F',
        }
    },
    overrideBackground:{        
        backgroundColor:"#ECF3EF"
    },
    partnerContainer:{
        paddingTop:'25px',
        maxWidth:'100%',
        margin:'0% 5%',
        backgroundColor:'#ECF3EF',
    },
    partnerContainerHeader:{  
        ...titleTextStyle,
        fontSize:'42px',
        color:'#72A15F',
        paddingTop:'5%',       
        
    },
    partnerContainerText:{
        ...contentTextStyle
    },
    pillarDonut:{
        height:'500px',        
    },
    projectTitle:{
        ...titleTextStyle,
        fontSize:'24px'
    },

})


  function MyResponsivePie() {
    // const theme=useTheme()
    // const TopMetric = ({ dataWithArc, centerX, centerY }) => {
    //     return (
    //         <text
    //             x={centerX}
    //             y={centerY-25}
    //             textAnchor="middle"
    //             dominantBaseline="middle"
    //             fill='black'
    //             style={{
    //                 fontSize: '75%',
    //             }}
    //         >
    //         Integrated Marketplace
    //         </text>
    //     )
    // }
    // const MiddleMetric = ({ dataWithArc, centerX, centerY }) => {
    //     return (
    //         <text
    //             x={centerX}
    //             y={centerY}
    //             textAnchor="middle"
    //             dominantBaseline="middle"
    //             fill='black'
    //             style={{
    //                 fontSize: '75%',
    //             }}
    //         >
    //         Blockchain
    //         </text>
    //     )
    // }
    // const BottomMetric = ({ dataWithArc, centerX, centerY }) => {
    //     return (
    //         <text
    //             x={centerX}
    //             y={centerY+25}
    //             textAnchor="middle"
    //             dominantBaseline="middle"
    //             fill='black'
    //             style={{
    //                 fontSize: '75%',
    //             }}
    //         >
    //         Financial Incentives
    //         </text>
    //     )
    // }
    // const TestCard=({})
    return (
    <ResponsivePie
        data={[
            
            {
              "id": "2. Tokenized biodiversity credits",
              "label": "Biodiversity",
              "value": 25,
              "color": "hsl(102, 40%, 58%)"
            },
            {
              "id": "3. Collectibles",
              "label": "Technology",
              "value": 25,
              "color": "hsl(102, 32%, 54%)"
            },
            {
              "id": "4. Genomic data blockchain platform",
              "label": "Knowledge",
              "value": 25,
              "color": "hsl(102, 24%, 47%)"
            },
            {
            "id": "1. Carbon services",
            "label": "Carbon",
            "value": 25,
            "color": "hsl(102, 56%, 65%)"
            }
          ]}
        margin={{ top: 40, right: 0, bottom: 80, left: 0 }}
        startAngle={-45}
        endAngle={360}
        colors={{datum:'data.color'}}
        innerRadius={0.25}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="black"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        // arcLinkLabelComponent={(datum)=>{
        //     return ('meow')
        //     // return({datum})
        // }}
        onMouseEnter={(node, event)=>{
            //showcard node.id
            // console.log(node)
            // console.log(event)
        }}
        onMouseLeave={(node, event)=>{
            //close all cards
        }}
        arcLabelsSkipAngle={10}
        arcLabel="label"
        arcLabelsTextColor='black'
        theme={{fontSize:'20px', fontFamily:'Bai Jamjuree, sans serif'}}
        tooltip="false"
        layers={['arcs', 'arcLabels', 'arcLinkLabels']}//TopMetric, MiddleMetric, BottomMetric
        defs={[
            // {
            //     id: 'dots',
            //     type: 'patternDots',
            //     background: 'inherit',
            //     color: 'rgba(255, 255, 255, 0.3)',
            //     size: 4,
            //     padding: 1,
            //     stagger: true
            // }
        ]}
        fill={[
            // {
            //     match: {
            //         id: 'ruby'
            //     },
            //     id: 'dots'
            // },
        ]}
    />
)}

const projects=[
    {
        image:pictureLeftPng,
        title:'Riau Ecosystem Restoration Project',
        location:'Kampar Peninsula, Indonesia',
        size:'130,000 hectares, twice the size of Singapore',
        biodiversity:'Sumatran Tiger, Storm’s Stork, Rhinoceros Hornbill, Malayan Sun Bear, Flat-headed Cat '
    },
    {
        image:pictureRightPng,
        title:'Riau Ecosystem Restoration Project',
        location:'Location: North-western portion of Congo River Basin, Republic of Congo',
        size:'94,000 hectares',
        biodiversity:'Lowland Gorilla, African Forest Elephant, Hippopotamus, Leopard'
    }
]


const textBox=[
    {
        title:'Carbon',
        bulletPoints:[
            '• Lead and develop carbon projects that avoid planned deforestation, protect peatlands, and replant native species',
            '• Help organisations deploy their carbon credits in the market'            
        ],
        color:'#CDEAC4'
    },
    {
        title:'Biodiversity',
        bulletPoints:[
            '• Lead and develop carbon projects that avoid planned deforestation, protect peatlands, and replant native species',
            '• Help organisations deploy their carbon credits in the market'            
        ],
        color:'#BDE2AF'
    },
    {
        title:'Technology',
        bulletPoints:[
            '• Lead and develop carbon projects that avoid planned deforestation, protect peatlands, and replant native species',
            '• Help organisations deploy their carbon credits in the market'            
        ],
        color:'#AEDE9A'
    },
    {
        title:'Knowledge',
        bulletPoints:[
            '• Lead and develop carbon projects that avoid planned deforestation, protect peatlands, and replant native species',
            '• Help organisations deploy their carbon credits in the market'            
        ],
        color:'#A2DD8A'
    }
]

function Splash() {
    const classes=useStyles()
    const theme=useTheme()
    const section1=useRef(null)
    const executeScroll = () => section1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })    

    return (
            <div className={classes.root}>
                <div className={classes.rootWrapper}>
                    <div className={classes.heroContainer}>
                        <div className={classes.hero}>
                            <Grid container direction='row'>
                                <Grid item xs={12} md={6}>
                                    <Grid className={classes.heroGrid} item sm={12} md={6} style={{maxWidth:'100%', textAlign:useMediaQuery(theme.breakpoints.down('md'))?'center':'left'}}>
                                        <Grid container direction='column' >
                                            <Grid item  style={{...titleTextStyle, fontSize:'42px',  maxWidth:'600px'}} xs={12} md={6}>
                                                    Welcome to the regenerative economy: The Bioeconomy
                                                {/* </div> */}
                                            </Grid>
                                            <Grid item  style={{...contentTextStyle, fontSize:'24px', marginTop:"100px", maxWidth:'550px'}} xs={12} md={6}>
                                                    Valuing the protection of natural assets through carbon and biodiversity projects
                                            </Grid>
                                            <Grid item style={{marginTop:'50px'}}>
                                                <Link className={classes.link} href='/contact' style={{textDecoration:'none', zIndex:0}}>
                                                    <Button className={classes.button} >
                                                        Book a Consultation
                                                    </Button>
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                            </Grid>
                                        </Grid>
                                    </Grid>                                       
                                </Grid>
                                <Grid item xs={12} md={6} hidden={useMediaQuery(theme.breakpoints.down('md'))}>
                                    <img className={classes.backgroundImage} src={treeSvg} alt='tree'/>
                                </Grid>
                            </Grid>
                            <div className={classes.downArrowWrapper} style={{marginTop:useMediaQuery(theme.breakpoints.down('md'))?'25px':'0px'}}>
                                <Button onClick={executeScroll} style={{borderRadius:'50%'}}>
                                    <KeyboardArrowDownIcon className={classes.downArrow}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.overrideBackground} >
                    <div ref={section1} className={classes.partnerContainer} style={{alignItems:'center'}}>
                        <Grid container xs={12} md={6} direction='column'>
                            <Grid item className={classes.partnerContainerHeader} >
                                <p>
                                    The path to sustained ecosystem protection
                                </p>
                            </Grid>
                            <Grid item className={classes.partnerContainerText} >
                                <p classname={classes.partnerContainerText}>
                                    We create strategies for businesses and organisations to embrace the bioeconomy by helping them gain revenue from natural assets and achieve their sustainability goals. Our proven business model delivers benefits for partners, local communities and the environment.
                                </p>
                            </Grid>
                        </Grid>
                    <Grid container direction='row' justify='space-evenly'>
                        <Grid item style={{ maxWidth:'35vw', height:'500px'}} xs={12} md={6}>
                            <MyResponsivePie/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container direction='column' spacing={5} style={{alignItems:'center'}}>
                                {textBox.map((i)=>{
                                    return(
                                        <Grid item style={{maxWidth:'85%', borderRadius:'16px', background:i.color, marginBottom:'3%'}}>
                                            <h3>{i.title}</h3>
                                            {i.bulletPoints.map(t=>{
                                                return(
                                                    <p>{t}</p>
                                                )
                                            })}
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>                
                </div>
                <div className={classes.overrideBackground}>
                    <div className={classes.partnerContainer} >
                        <div className={classes.partnerContainerHeader}>
                            Highlighted Projects
                        </div>
                        <div className={classes.partnerContainerText} style={{marginTop:'5%', maxWidth:'65%'}}>
                            Our team has led, funded and completed the carbon project development in projects around the world, including:
                        </div>
                        <Grid container direction='row' style={{marginTop:'25px'}} spacing={3}>
                                {projects.map(i=>{
                                    return(
                                        <Grid item xs={12} md={6}>
                                                <Grid item>
                                                    <img src={i.image} alt={i.title}/>
                                                </Grid>
                                            <Grid container direction='column' style={{maxWidth:'85%'}} spacing={1}>
                                                <Grid item className={classes.projectTitle}>
                                                    {i.title}
                                                </Grid>
                                                <Grid item>
                                                    <b>Location: </b>{i.location}
                                                </Grid>
                                                <Grid item>
                                                    <b>Size: </b>{i.size}
                                                </Grid>
                                                <Grid item>
                                                    <b>Biodiversity: </b>{i.biodiversity}
                                                </Grid>                                        
                                            </Grid>
                                        </Grid>
                                    )
                                })}
                        </Grid>
                        <div style={{marginTop:'35px'}}>
                            <Link className={classes.link} href='/projects' style={{textDecoration:'none', zIndex:0}}>
                                <Button className={classes.button}>
                                    Find Out More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classes.overrideBackground}>
                    <div className={classes.partnerContainer} style={{paddingBottom:'10%'}}>
                        <p className={classes.partnerContainerHeader}>
                            Partners and Collaborators
                        </p>
                        <Grid container direction='column'>
                            <Grid item style={{marginTop:'35px',}}>
                                <PartnerOthers />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
            
        
    )
}
export default Splash;
