import React, {useRef} from 'react'
import {Grid, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import Media from './Media.js'
import illustrationSvg from '../assets/Projects/illustration.svg'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'


const useStyles=makeStyles({
    root:{
        color:'black',
        fontFamily:"Bai Jamjuree, sans serif",        
        background:'#ECF3EF',
        padding:'3% 0%'
    },
    rootWrapper:{
        fontStyle: "normal",        
        margin:'0% 5%',
    },
    hero:{
        minHeight:'65vh'
    },
    heroText:{
        color:'#72A15F',    
        fontSize:'32px'
    },
    heroImage:{
        textAlign:'center'
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
    h1:{
        color:"#72A15F",
        fontSize:'42px',
        fontWeight: "bold",
    },
    h2:{
        color:'black',
        fontSize:'20px'
    },
    mainCointainer:{
        marginTop:'15px'
    },
    contentContainer:{
        marginTop:'2%'
    },
    contentWrapper:{
        padding:'0% 3%'
    },
    contentItem:{
        background:'white',
        borderRadius:"16px"        
    },
    contentBarTitle:{
        marginTop:'5%',
        fontSize:'32px',
        fontWeight:'bold',
        color:'#72A15F'
    },
    contentBarContent:{
        marginTop:'25px'
    },
    contentBarImage:{        
        borderRadius:'16px',
        maxHeight:'40vh'
    },
    mediaSection:{
        marginTop:'5%',
        color:"#72A15F"
        
    },
    mediaWrapper:{
        marginTop:'3%'
    }
})
function Projects() {
    const classes=useStyles()
    const theme=useTheme()
    const section1=useRef(null)
    const executeScroll = () => section1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return (
        <div className={classes.root}>
            <div className={classes.rootWrapper}>
                <div className={classes.h1}>
                    Projects
                </div>
                <Grid container className={classes.hero} alignItems='center' justify='space-evenly' direction='row'>
                    <Grid item className={classes.heroText} xs={12} md={6}>
                        Our team has led, funded and completed the carbon project development in projects around the world.
                    </Grid>
                    <Grid item className={classes.heroImage} xs={12} md={6}>
                        <img src={illustrationSvg} alt='illustration'/>
                    </Grid>
                </Grid>
                <div className={classes.downArrow} >
                    <Button onClick={executeScroll} style={{borderRadius:'50%'}}>
                        <KeyboardArrowDownIcon className={classes.downArrow}/>
                    </Button>
                </div>
                <div className={classes.h1} style={{marginTop:'5%'}}>
                    Spotlight
                </div>
                <Grid className={classes.mainCointainer} ref={section1} container direction='column' spacing={5}>
                    <Grid item>
                        <Grid container className={classes.contentContainer} direction={useMediaQuery(theme.breakpoints.up('md'))?'row-reverse':'row'} justify='space-around' spacing={3}>
                            <Grid item xs={12} md={6} style={{textAlign:'center'}}>
                                <img className={classes.contentBarImage} src='https://www.himpanzee.com/static/Tiger-graphic-Himpanzee.svg#svgView(viewBox(200,200,800,800))' alt='project1'/>
                            </Grid>
                            <Grid item className={classes.contentItem} xs={12} md={6}>
                                <Grid container className={classes.contentWrapper} direction='column'>
                                    <Grid item className={classes.contentBarTitle}>
                                        Riau Ecosystem Restoration Project
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                    <p>The Riau Ecosystem Restoration Carbon Project is a commitment to protect and restore 130,000 hectares of peatland ecosystem located in the Kampar Peninsula, Indonesia, while at the same time preserving biodiversity and enhancing the livelihoods of local communities</p>

                                    <p>Twice the size of Singapore, the Riau ecosystem is made up of five former logging concessions spread across two landscapes in eastern Sumatra.</p>

                                    <p>Through the REDD+ process of avoiding planned deforestation and wetlands conservation and restoration, the Project will preserve the remaining peat swamp forests by preventing their conversion to forestry plantations, containing 823 species of animals and plants. </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.contentContainer} container direction={useMediaQuery(theme.breakpoints.up('md'))?'row':'row-reverse'} justify='space-around' spacing={3}>
                            <Grid item xs={12} md={6} style={{textAlign:'center'}}>
                                <img className={classes.contentBarImage} src='https://www.himpanzee.com/static/Gorilla-graphic-Himpanzee.svg#svgView(viewBox(200,200,800,800))' alt='project1'/>
                            </Grid>
                            <Grid item className={classes.contentItem} xs={12} md={6}>
                                <Grid container className={classes.contentWrapper} direction='column'>
                                    <Grid item className={classes.contentBarTitle}>
                                        North Pikounda REDD+ Project
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                        <p>The North Pikounda REDD+ project was Africa’s first Sustainable Forest Management Carbon (REDD+) project, setting aside 92,530 hectares of virgin rainforest, which has become a habitat for 6000 lowland gorillas.</p>

                                        <p>The main activity is the cancellation of the planned degradation and deforestation activities and the decision to instead protect the forest area. The project implements carbon stock monitoring, remote sensed monitoring, field monitoring and social activities.</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.contentContainer} container direction={useMediaQuery(theme.breakpoints.up('md'))?'row-reverse':'row'} justify='space-around' spacing={3}>
                            <Grid item xs={12} md={6} style={{textAlign:'center'}}>
                                <img className={classes.contentBarImage} src='https://www.himpanzee.com/static/Elephant-graphic-Himpanzee.svg#svgView(viewBox(200,200,800,800))' alt='project1'/>
                            </Grid>
                            <Grid item className={classes.contentItem} xs={12} md={6}>
                                <Grid container className={classes.contentWrapper} direction='column'>
                                    <Grid item className={classes.contentBarTitle}>
                                        Fire-Free Alliance
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                        <p>Himpanzee’s Dorjee Sun was the secretariat for the Fire-Free Alliance, which was founded by Indonesia’s largest agricultural companies and NGOs to support fire prevention and adaptation in the community.</p>

                                        <p>As of 2020, FFA initiatives are being implemented in more than 200 villages in Indonesia, covering more than 1.5 million hectares of land. </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className={classes.mediaSection}>
                    <div className={classes.h1}>
                        Media / Press
                    </div>
                    <div className={classes.h2} style={{marginTop:'3%'}}>
                        See Bioeconomy's team in the press
                    </div>
                    <div className={classes.mediaWrapper}>
                        <Media/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects