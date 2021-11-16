import React, {useRef} from 'react'
import {Grid, Button} from '@material-ui/core' //Card
import { makeStyles } from '@material-ui/styles';
import {useTheme} from '@material-ui/core/styles'
import LogoPng from '../assets/Services/bioeconomy.png'
import illustrationSvg from '../assets/Services/illustration.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {CheckCircle, KeyboardArrowDown} from '@material-ui/icons';

const useStyles=makeStyles({
    root:{
        color:'black',
        background:'#ECF3EF',
        fontFamily:"Bai Jamjuree, sans serif",        
        fontStyle: "normal",        
        padding:'3% 0%'
    },
    rootWrapper:{
        margin:'0% 5%'
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
    heroText:{
        color:'#72A15F',
        fontSize:'24px'
    },
    iconButton:{
        borderRadius:'50%'
    },
    button:{
        fontFamily:"Bai Jamjuree, sans serif",
        width: "282px",
        height: "66px",
        fontWeight:'bold',
        fontSize:'20px',
        borderRadius:'16px',
        background: "#91D873",
        '&:hover':{
            color:'white',
        }
    },
    h1:{
        color:"#91D873",
        fontSize:'48px',
        fontWeight: "bold",
    },
    contentBarTitle:{
        fontSize:'32px',
        fontWeight:'bold',
        color:'#72A15F'
    },
    contentText:{
        marginTop:'10%'
    },    
    contentBarContent:{        
        marginTop:'25px'
    },
    contentImage:{
        display:'none',        
    },
    contentBarImage:{        
        borderRadius:'16px',
        maxWidth:'100%',
        background:'white'
    },
    headerText:{
        fontWeight:'500',
        fontStyle:'normal',
        fontSize:'24px',        
    },
    '@keyframes slide':{
        'from':{
            transform:'translateX(0px)'
        },
        'to':{
            transform:'translateX(100px)'
        }
    },
    bulletPoint:{
        padding:'10px',
        display:'inline-flex',
        verticalAlign:'middle',
        '&:hover':{
            background:'#72A15F',
            color:'white',            
            transitionDuration:'1s',
        }
    },
    sdgContainer:{
        background:'white',
        borderRadius:'10px',
        minHeight:'100%',
        padding:'5%',
        '&:hover':{
            transform: "scale3d(1.05, 1.05, 5)"
        }
    },
    sdgTitle:{
        fontWeight:'bold',
        color:"#72A15F"
    },
    card:{
        background:'lightgray',
        color:'#72A15F',
        borderRadius:'16px',
        padding:'5% 5%',
        "&:hover":{
            transform: "scale3d(1.05, 1.05, 5)"
        }
    },
    cardImageWrapper:{
        padding:'3%'
    }
})

const unImages=[
    {
        image:'https://www.himpanzee.com/static/sdg-13.png',
        titleText:'SDG 13',
        content:'Take urgent action to combat climate change and its impacts.'
    },
    {
        image:'https://www.himpanzee.com/static/sdg-15.png',
        titleText:'SDG 15',
        content:'Protect, restore and promote sustainable use of terrestrial ecosystems.'
    },
    {
        image:'https://www.himpanzee.com/static/sdg-17.png',
        titleText:'SDG 17',
        content:'Strengthen the means of implementation and revitalize the global.'
    }
]

const cardContent=[
    {
        image:LogoPng,
        title:'Feasibility Review',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        image:LogoPng,
        title:'Project Design',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        image:LogoPng,
        title:'Validation',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        image:LogoPng,
        title:'Monitoring & Verification',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]

function Services() {
    const classes=useStyles()
    const theme=useTheme()
    const section1=useRef(null)
    const executeScroll = () => section1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return (
        <div className={classes.root}>
            <div className={classes.rootWrapper}>
                <Grid container direction='row' alignItems='center' style={{minHeight:'75vh'}} spacing={3}>
                    <Grid item xs={12} md={6} className={classes.heroText}>
                        Bioeconomy conserves and restores natural habitats around the world. Our company is a carbon, biodiversity and environmental tech project developer with a proven business model that delivers benefits for partners, local communities and the environment. 
                    </Grid>
                    <Grid item className={classes.heroIllustration} xs={12} md={6} style={{textAlign:'center'}}>
                        <img src={illustrationSvg} alt='illustration' style={{maxWidth:'100%'}}/>
                    </Grid>
                </Grid>
                <div className={classes.downArrow}>
                    <Button className={classes.iconButton} onClick={executeScroll}>
                        <KeyboardArrowDown className={classes.downArrow}/>
                    </Button>
                </div>

                <Grid ref={section1} container direction='column' style={{marginTop:'15px'}} spacing={5}>                    
                    <Grid item>
                        <Grid container direction={useMediaQuery(theme.breakpoints.up('md'))?'row-reverse':'row'} justify='space-around' spacing={5} >
                            <Grid className={classes.contentImage} item xs={12} md={6} style={{textAlign:useMediaQuery(theme.breakpoints.up('md'))?'end':'center'}}>
                                <img className={classes.contentBarImage} src="https://www.himpanzee.com/static/services/it-service1.png" alt='it-services'/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Grid className={classes.contentText} container direction='column'>
                                    <Grid item className={classes.contentBarTitle}>
                                        Second to none technical experience
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                        <p>Our team has more than 15 years of experience in supporting landowners and partners to identify, implement and monitor carbon and biodiversity projects that deliver results. We can help revegetate heavily degraded land and recreate forests to capture carbon, and conserve vulnerable peatlands to stop the emission of carbon and protect habitats for biodiversity.</p>
                                        
                                        <p>We assess carbon; obtain community support; and prepare documents for projects to be validated under rigorous standards including the Verified Carbon Standard (VCS) and obtain carbon credits. We are proud to work under the VCS, the world’s most widely used voluntary emissions reduction standard.</p>
                                        
                                        <p>We are proud to offer an end-to-end carbon origination service including: </p>
                                    </Grid>
                                    <Grid item>
                                        <Grid container className={classes.bulletPoints} direction='row' alignItems='center' justify='flex-start'>
                                            {cardContent.map(i=>{
                                                return(
                                                    <Grid item xs={6} style={{padding:'1%'}}>                                                           */}
                                                        <span className={classes.bulletPoint}>
                                                            <CheckCircle fontSize='small'/><span style={{ marginLeft:'5px'}}>{i.title}</span>                                                            
                                                        </span>
                                                    </Grid>
                                                )
                                            })}
                                            
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={useMediaQuery(theme.breakpoints.up('md'))?'row':'row-reverse'} justify='space-around' spacing={5} >
                            <Grid className={classes.contentImage} item xs={12} md={6} style={{textAlign:useMediaQuery(theme.breakpoints.up('md'))?'start':'center'}}>
                                <img className={classes.contentBarImage} src="https://www.himpanzee.com/static/services/it-service2.png" alt='it-services2' style={{width:'100%', maxWidth:'852px', maxHeight:'573px'}}/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Grid className={classes.contentText} container direction='column'>
                                    <Grid item className={classes.contentBarTitle}>
                                        Innovative technologies
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                    <p>We scale our projects by investing in technology and partnering with key industry players to make protection more effective and monitoring more efficient.</p>

                                    <p>With the urgency of climate change, we bring new and innovative technologies from around the world to your site to accelerate meaningful change. We recognise that the challenge is meaningfully tracking what’s happening on site including measuring biodiversity - and we are doing something about it.</p>

                                    <p>We are revolutionising projects through the use of remote sensing technology, drones, artificial intelligence, and environmental DNA. </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={useMediaQuery(theme.breakpoints.up('md'))?'row-reverse':'row'} justify='space-around' spacing={5} >
                            <Grid className={classes.contentImage} item xs={12} md={6} style={{textAlign:useMediaQuery(theme.breakpoints.up('md'))?'end':'center'}}>
                                <img className={classes.contentBarImage} src="https://www.himpanzee.com/static/services/it-service3.png" alt='it-services3'/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Grid className={classes.contentText} container direction='column'>
                                    <Grid item className={classes.contentBarTitle}>
                                    Creating opportunities for local communities
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                    <p>Our projects strengthen economies through creation of jobs for local communities. Himpanzee's core focus is on creating alternative revenue streams that do not destroy nature.</p>

                                    <p>We also ensure there is consultation with local communities and Indigenous populations in forest management plans that impact them. Our team performs a comprehensive needs assessment to take a data-led approach to development interventions.</p>

                                    <p>Across the world, there are companies which have caused widespread destruction of the remaining peatlands and tropical forests around the world. Often local communities are ignored as their forests are cut around them. At the heart of our success is our work with community leaders, consulting with government officials and forming partnerships with civil society to implement our projects.</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item style={{textAlign:'center'}}>                    
                        <h2 className={classes.contentBarTitle}>Specializations</h2>                    
                    </Grid>
                    <Grid item style={{textAlign:'center'}}>
                        <Grid container direction='row' spacing={5}>
                            {cardContent.map(i=>{
                                return(
                                    <Grid item xs={12} md={3}>
                                        <Card className={classes.card} style={{minHeight:'172px'}}>
                                            {i.image?<div className={classes.cardImageWrapper}>
                                                <img classname={classes.cardImage} src={i.image} alt={i.title}/>
                                            </div>:null}
                                            <div className={classes.contentBarTitle} style={{fontSize:'24px', fontWeight:500, minHeight:'75px'}}>
                                                {i.title}
                                            </div>
                                            <div className={classes.contentBarContent} hidden={true}>
                                                {i.content}
                                            </div>
                                        </Card>
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </Grid> */}
                    <Grid item style={{textAlign:'left'}}>                    
                        <h2 className={classes.contentBarTitle}>Taking action on the Global Goals</h2>
                        <p className={classes.contentBarContent}>We support in your implementation of the United Nations Sustainable Development Goals, in particular:</p>
                    </Grid>
                    <Grid item style={{textAlign:'center'}}>
                        <Grid container direciton='row' spacing={3}>
                            {unImages.map(i=>{
                                return(
                                    <Grid item  xs={12} md={4}>
                                        <Grid container direction='column' className={classes.sdgContainer}>
                                            <Grid item >
                                                <img src={i.image} alt='sdg' style={{borderRadius:'16px', maxWidth:'100%'}}/>
                                            </Grid>
                                            <Grid item className={classes.sdgTitle} style={{marginTop:'25px'}}>
                                                {i.titleText}
                                            </Grid>
                                            <Grid item style={{marginTop:'25px'}}>
                                                {i.content}
                                            </Grid>
                                        </Grid>
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

export default Services