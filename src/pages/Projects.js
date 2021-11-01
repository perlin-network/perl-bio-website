import React from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'


const useStyles=makeStyles({
    root:{
        color:'white',
        fontFamily:"Bai Jamjuree, sans serif",        
        fontStyle: "normal",        
        margin:'0% 5%'
    },
    h1:{
        color:"#91D873",
        fontSize:'48px',
        fontWeight: "bold",
    },
    mainCointainer:{
        marginTop:'15px'
    },
    contentContainer:{
        marginTop:'2%'
    },
    contentBarTitle:{
        marginTop:'10%',
        fontSize:'32px',
        fontWeight:'bold',
        color:'#91D873'
    },
    contentBarContent:{
        marginTop:'25px'
    },
    contentBarImage:{        
        borderRadius:'16px',        
        // maxWidth:'65%'
        maxHeight:'40vh'
    },
})
function Projects() {
    const classes=useStyles()
    const theme=useTheme()
    return (
        <div className={classes.root}>
            <div className={classes.h1}>
                Projects
            </div>
            <Grid className={classes.mainCointainer} container direction='column' spacing={5}>
                <Grid item>
                    <Grid container className={classes.contentContainer} direction={useMediaQuery(theme.breakpoints.up('md'))?'row-reverse':'row'} justify='space-around' spacing={3}>
                        <Grid item xs={12} md={6} style={{textAlign:'center'}}>
                            <img className={classes.contentBarImage} src='https://www.himpanzee.com/static/Tiger-graphic-Himpanzee.svg#svgView(viewBox(200,200,800,800))' alt='project1'/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container direction='column'>
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
                        <Grid item xs={12} md={6}>
                            <Grid container direction='column'>
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
                        <Grid item xs={12} md={6}>
                            <Grid container direction='column'>
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
            
        </div>
    )
}

export default Projects