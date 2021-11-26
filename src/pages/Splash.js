import React, {useRef, useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import {useTheme} from '@material-ui/core/styles'
import { Grid, Link, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import pictureLeftSvg from '../assets/Splash/tiger.svg'
import pictureRightSvg from '../assets/Splash/monkey.svg'
import treeSvg from '../assets/Splash/tree-new.svg'
import {titleTextStyle, contentTextStyle} from '../styles/common.js'
import PartnerOthers from '../components/PartnerOthers'
import { ResponsivePie } from '@nivo/pie'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles=makeStyles({
    root:{
        backgroundColor:'#FFFFFF',
    },
    rootWrapper:{
        margin:'0% 5%'
    },
    hero:{
        minHeight:'85vh',
        marginBottom:'-0.5%',
        backgroundImage:`url(${treeSvg})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'bottom right',
        backgroundSize:'75vw'
        
    },
    heroText:{
        paddingLeft:'5%',
    },
    backgroundImage:{                
        backgroundSize:'fit',
        // minHeight:'75vh'        
        maxWidth:'100%',
        backgroundRepeat:'no-repeat',        
    },
    heroContainer:{
        minHeight:'75vh',
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
    downArrow:{
        animation:'$bounce 1000ms infinite alternate',
        fontSize:'50px',
        color:'#72A15F',
        
    },
    downArrowIcon:{
        color:'#72A15F',
        fontSize:'300%'
    },
    button:{
        fontFamily:"Bai Jamjuree, sans serif",
        width: "300px",
        height: "66px",
        fontWeight:'bold',
        fontSize:'20px',
        borderRadius:'10px',
        background: "#BDE2AF",
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


  function MyResponsivePie(props) {
    const {setPieColumn} = props
    return (
    <ResponsivePie
        data={[
            
            {
              "id": "biodiversity",
              "label": "Biodiversity",
              "value": 25,
              "color": "#BDE2AF"
            },
            {
              "id": "technology",
              "label": "Technology",
              "value": 25,
              "color": "#AEDE9A"
            },
            {
              "id": "knowledge",
              "label": "Knowledge",
              "value": 25,
              "color": "#A2DD8A"
            },
            {
            "id": "carbon",
            "label": "Carbon",
            "value": 25,
            "color": "#CDEAC4"
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
            // console.log(node.id)
            // console.log(event)
            setPieColumn(node.id)
        }}
        onMouseLeave={(node, event)=>{
            setPieColumn(null)
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
        image:pictureLeftSvg,
        title:'Tiger Project',
        location:'Kampar Peninsula, Indonesia',
        size:'130,000 hectares, twice the size of Singapore',
        biodiversity:'Sumatran Tiger, Storm’s Stork, Rhinoceros Hornbill, Malayan Sun Bear, Flat-headed Cat '
    },
    {
        image:pictureRightSvg,
        title:'Gorilla Project',
        location:'Location: North-western portion of Congo River Basin, Republic of Congo',
        size:'94,000 hectares',
        biodiversity:'Lowland Gorilla, African Forest Elephant, Hippopotamus, Leopard'
    }
]


const textBox=[
    {
        id:'carbon',
        title:'Carbon',        
        bulletPoints:[
            '• Lead and develop carbon projects that avoid planned deforestation, protect peatlands, and replant native species',
            '• Help organisations deploy their carbon credits in the market'            
        ],
        color:'#CDEAC4'
    },
    {
        id:'biodiversity',
        title:'Biodiversity',
        bulletPoints:[
            '• Lead and develop carbon projects that avoid planned deforestation, protect peatlands, and replant native species',
            '• Help organisations deploy their carbon credits in the market'            
        ],
        color:'#BDE2AF'
    },
    {
        id:'technology',
        title:'Technology',
        bulletPoints:[
            '• Lead and develop carbon projects that avoid planned deforestation, protect peatlands, and replant native species',
            '• Help organisations deploy their carbon credits in the market'            
        ],
        color:'#AEDE9A'
    },
    {
        id:'knowledge',
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

    const [pieColumn, setPieColumn]=useState(null)

    const section1=useRef(null)
    const executeScroll = () => section1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })    

    return (
            <div className={classes.root}>
                <Grid container className={classes.hero} direction='row' alignItems='flex-end' justifyContent='space-around'>
                    <Grid container direction='column' justifyContent='flex-start' alignItems={useMediaQuery(theme.breakpoints.down('md'))?'center':'left'} className={classes.heroText} item xs={12} md={6} style={{maxWidth:'100%', textAlign:useMediaQuery(theme.breakpoints.down('md'))?'center':'left'}}>
                        <Grid item  style={{...titleTextStyle, fontSize:'42px',  maxWidth:'100%'}} xs={12} md={6}>
                                Welcome to the regenerative economy: Bioeconomy                            
                        </Grid>
                        <Grid item style={{...contentTextStyle, fontSize:'24px', marginTop:"100px", maxWidth:'80%'}} xs={12} md={6}>
                                Valuing the protection of natural assets through carbon and biodiversity projects
                        </Grid>
                        <Grid item style={{marginTop:'50px', marginBottom:'35%'}}>
                            <Link className={classes.link} href='/contact' style={{textDecoration:'none', zIndex:0}}>
                                <Button className={classes.button} >
                                    Book a Consultation
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item style={{marginLeft:useMediaQuery(theme.breakpoints.down('md'))?'0%':'98%', marginBottom:'25px'}}>
                            <Button onClick={executeScroll} style={{borderRadius:'50%'}}>
                                <KeyboardArrowDownIcon className={classes.downArrow}/>
                            </Button>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} md={6} hidden={useMediaQuery(theme.breakpoints.down('md'))} >
                        <Grid container direction='column' justifyContent='flex-end' alignItems='flex-end'>
                            <Grid item>
                                <img className={classes.backgroundImage} src={treeSvg} alt='tree'/>
                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
                <div className={classes.rootWrapper}>
                </div>
                <div className={classes.overrideBackground} >
                    <div ref={section1} className={classes.partnerContainer} style={{alignItems:'center', textAlign:useMediaQuery(theme.breakpoints.down('md'))?'center':'left'}}>
                        <Grid container direction='column'>
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
                        <Grid item style={{ height:'700px'}}>
                            <MyResponsivePie setPieColumn={setPieColumn}/>
                        </Grid>
                        <Grid item>
                            <Grid container direction='column' spacing={5} style={{alignItems:'center'}}>
                                {textBox.map((i)=>{
                                    return(
                                        <Grid item style={{maxWidth:'85%', borderRadius:'16px', background:i.color, marginBottom:'3%', opacity:pieColumn!==i.id && pieColumn!==null?0.5:1}}>
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
                    <div className={classes.partnerContainer} style={{textAlign:useMediaQuery(theme.breakpoints.down('md'))?'center':'left'}}>
                        <div className={classes.partnerContainerHeader}>
                            Highlighted Projects
                        </div>
                        <div className={classes.partnerContainerText} style={{marginTop:'5%', }}>
                            Our team has led, funded and completed the carbon project development in projects around the world, including:
                        </div>
                        <Grid container direction='row' justifyContent='space-between' style={{marginTop:'25px'}} spacing={3}>
                                {projects.map(i=>{
                                    return(
                                        <Grid item xs={12} md={6} style={{padding:'0% 6%'}}>
                                                <Grid item>
                                                    <img src={i.image} alt={i.title}/>
                                                </Grid>
                                            <Grid container direction='column' style={{}} spacing={1}>
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
                        <div style={{marginTop:'10%', textAlign:'center'}}>
                            <Link className={classes.link} href='/projects' style={{textDecoration:'none', zIndex:0}}>
                                <Button className={classes.button}>
                                    Find Out More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classes.overrideBackground}>
                    <div className={classes.partnerContainer} style={{paddingBottom:'10%', textAlign:useMediaQuery(theme.breakpoints.down('md'))?'center':'left'}}>
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
