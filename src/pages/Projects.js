import React, {useRef} from 'react'
import {Grid, Button, Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import Media from './Media.js'
import illustrationSvg from '../assets/Projects/illustration.svg'
import biodiversityUnitsSvg from '../assets/Projects/biodiversity-units.svg'
import africaSvg from '../assets/Projects/africa-icon.svg'
import seaSvg from '../assets/Projects/sea-icon.svg'
import permafrostSvg from '../assets/Projects/permafrost-icon.svg'
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
    hero:{
        minHeight:'65vh'
    },
    heroText:{
        color:'#72A15F',    
        fontSize:'32px'
    },
    heroImage:{
        textAlign:'center',
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
    biodiversityUnits:{

    },
    projectOverview:{
        marginTop:'5%',
    },
    overviewTitle:{
        fontSize:'25px',
        color:'#72A15F',
        fontWeight:'bold'
    },
    overviewText:{
        marginTop:'15px',
        fontSize:'20px',
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
        marginTop:'25px',
        fontSize:'22px'
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

const overviews=[
    {
        image:africaSvg,
        title:'Africa',
        text:'Bioeconomy strongly believes in the blue and green economies, where the health of the natural ecosystem is a critical economic asset and a source of public benefits. We invest in, lead and develop projects in African countries which focus on sustainable development and sustainable value chains that go beyond extracting for export.'
    },
    {
        image:seaSvg,
        title:'Southeast Asia',
        text:'As Bioeconomy is based in Singapore, we also invest in, lead and develop projects that continue ASEAN’s active role in addressing climate change in the global community. These projects involve restoration and reforestation so that previously degraded areas including peatlands are able to flourish again and regenerate biodiversity.'
    },
    {
        image:permafrostSvg,
        title:'Permafrost',
        text:'Northern permafrost soils represent the largest terrestrial organic carbon pool of 1700 gigatonnes on Earth. The estimated damage from permafrost melting is $66.9 trillion. We are running pilots in permafrost areas to reduce or slow high risk methane emissions from permafrost thaw.'
    },
]

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
                        Read more about some of the highlights from Bioeconomy’s project portfolio.
                    </Grid>
                    <Grid item className={classes.heroImage} xs={12} md={6}>
                        <img src={illustrationSvg} alt='illustration' style={{maxWidth:'100%'}}/>
                    </Grid>
                </Grid>
                <div className={classes.downArrow} >
                    <Button onClick={executeScroll} style={{borderRadius:'50%'}}>
                        <KeyboardArrowDownIcon className={classes.downArrow}/>
                    </Button>
                </div>
                <div className={classes.biodiversityUnits}>
                    <Grid container direction='column' justifyContent='space-around'>
                        <Grid item>
                            <img src={biodiversityUnitsSvg} alt='biodiversity-units'/>
                        </Grid>
                        <Grid item className={classes.contentBarContent}>
                            <p>Bioeconomy and partners are developing a global Biodiversity Unit, a tool to drive investment directly into the protection and restoration of biodiversity.</p>
                            
                            <p>The Biodiversity Unit will quantify protection impacts and benefits for a specific area and allow projects which protect and restore biodiversity to earn biodiversity units.</p>
                        </Grid>
                        <Grid item style={{marginTop:'2%'}}>
                            <Link href='/contact' style={{textDecoration:'none', zIndex:0}}>
                                <Button className={classes.button} >
                                    Contact
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item style={{marginTop:'1%'}}>
                            Contact us if you want to be involved
                        </Grid>
                    </Grid>
                </div>
                <Grid container className={classes.projectOverview} direction='column'>
                    {overviews.map(i=>{
                        return(
                            <Grid item xs={12}>
                                <Grid container direction='row' justifyContent='flex-start' alignItems='center' spacing={5} style={{marginTop:'25px'}}>
                                    <Grid item>
                                        <img src={i.image} alt='overview'/>                                        
                                    </Grid>
                                    <Grid item className={classes.overviewTitle}>
                                        {i.title}
                                    </Grid>
                                </Grid>
                                <div className={classes.overviewText}>
                                    {i.text}
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
                <div className={classes.contentBarTitle} style={{fontSize:'35px', fontWeight:600}}>
                    Spotlighted previous projects include:
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
                                        Tiger Project
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                        <p>The Tiger Project is a commitment to protect and restore 130,090 hectares of peatland ecosystem located in the Kampar Peninsula, Indonesia, while at the same time preserving biodiversity and enhancing the livelihoods of local communities</p>

                                        <p>Twice the size of Singapore, the Tiger Project is made up of five former logging concessions spread across two landscapes in eastern Sumatra.</p>

                                        <p>Through the REDD+ process of avoiding planned deforestation and wetlands conservation and restoration, the Project will preserve the remaining peat swamp forests by preventing their conversion to forestry plantations, containing 797 species of animals and plants.</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.contentContainer} container direction={useMediaQuery(theme.breakpoints.up('md'))?'row':'row-reverse'} justify='space-around' spacing={3}>
                            <Grid item xs={12} md={6} style={{textAlign:'center'}}>
                                <img className={classes.contentBarImage} src='https://www.himpanzee.com/static/Elephant-graphic-Himpanzee.svg#svgView(viewBox(200,200,800,800))' alt='project1'/>
                            </Grid>
                            <Grid item className={classes.contentItem} xs={12} md={6}>
                                <Grid container className={classes.contentWrapper} direction='column'>
                                    <Grid item className={classes.contentBarTitle}>
                                    Bioeconomy
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                        <p>Bioeconomy’s Dorjee Sun was the secretariat for the Fire-Free Alliance, which was founded by Indonesia’s largest agricultural companies and NGOs to support fire prevention and adaptation in the community.</p>

                                        <p>As of 2020, FFA initiatives are being implemented in more than 200 villages in Indonesia, covering more than 1.5 million hectares of land. </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.contentContainer} container direction={useMediaQuery(theme.breakpoints.up('md'))?'row-reverse':'row'} justify='space-around' spacing={3}>
                            <Grid item xs={12} md={6} style={{textAlign:'center'}}>
                                <img className={classes.contentBarImage} src='https://www.himpanzee.com/static/Gorilla-graphic-Himpanzee.svg#svgView(viewBox(200,200,800,800))' alt='project1'/>
                            </Grid>
                            <Grid item className={classes.contentItem} xs={12} md={6}>
                                <Grid container className={classes.contentWrapper} direction='column'>
                                    <Grid item className={classes.contentBarTitle}>
                                        Gorilla Project
                                    </Grid>
                                    <Grid item className={classes.contentBarContent}>
                                        <p>The Gorilla Project was Africa’s first Sustainable Forest Management Carbon (REDD+) project, setting aside 92,530 hectares of virgin rainforest, which has become a habitat for 6000 lowland gorillas.</p>

                                        <p>The main activity is the cancellation of the planned degradation and deforestation activities and the decision to instead protect the forest area. The project implements carbon stock monitoring, remote sensed monitoring, field monitoring and social activities.</p>
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
                        See Bioeconomy's team in the press:
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