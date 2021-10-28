import React from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import {useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles=makeStyles({
    root:{
        color:'white',
        fontFamily:"Bai Jamjuree, sans serif",        
        fontStyle: "normal",        
        margin:'0% 5%'
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
        color:'#91D873'
    },
    contentText:{
        marginTop:'10%'
    },
    contentBarContent:{
        marginTop:'25px'
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
    sdgContainer:{
        // border:'25px solid white'
        border: '2px solid white',
        minHeight:'100%',
        padding:'5%'
    },
    sdgTitle:{
        fontWeight:'bold'
    },
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


function Services() {
    const classes=useStyles()
    const theme=useTheme()
    return (
        <div className={classes.root}>
            <div className={classes.h1}>
                Our Services
            </div>
            <Grid container direction='column' style={{marginTop:'15px'}} spacing={5}>
                <Grid item className={classes.headerText}>
                    Bioeconomy focuses on nature-based solutions with a proven business model that delivers benefits for partners, communities and the environment
                </Grid>
                <Grid item>
                    <Grid container direction={useMediaQuery(theme.breakpoints.up('md'))?'row-reverse':'row'} justify='space-around' spacing={5} >
                        <Grid item xs={12} md={6}>
                            <img className={classes.contentBarImage} src="https://www.himpanzee.com/static/services/it-service1.png" alt='it-services'/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid className={classes.contentText} container direction='column'>
                                <Grid item className={classes.contentBarTitle}>
                                    Second to none technical experience
                                </Grid>
                                <Grid item className={classes.contentBarContent}>
                                    <p>Our team has more than 15 years of experience in supporting landowners and partners to identify, implement and monitor carbon and biodiversity projects that deliver results. We can help revegetate heavily degraded land and recreate forests to capture carbon, and conserve vulnerable peatlands to stop the emission of carbon and protect habitats for biodiversity.</p>
                                    
                                    <p>We assess carbon; obtain community support; and prepare documents for projects to be validated under rigorous standards including the Verified Carbon Standard (VCS) and obtain carbon credits. We are proud to work under the VCS, the world’s most widely used voluntary emissions reduction standard.</p>
                                    
                                    <p>We are proud to offer an end-to-end carbon origination service including: </p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={useMediaQuery(theme.breakpoints.up('md'))?'row':'row-reverse'} justify='space-around' spacing={5} >
                        <Grid item xs={12} md={6}>
                            <img className={classes.contentBarImage} src="https://www.himpanzee.com/static/services/it-service2.png" alt='it-services2' style={{  maxWidth:'100%'}}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
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
                        <Grid item xs={12} md={6}>
                            <img className={classes.contentBarImage} src="https://www.himpanzee.com/static/services/it-service3.png" alt='it-services3'/>
                        </Grid>
                        <Grid item xs={12} md={6}>
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
                <Grid item style={{textAlign:'center'}}>                    
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
                                            <img src={i.image} alt='sdg'/>
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
    )
}

export default Services