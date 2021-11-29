import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Card, CardContent} from "@material-ui/core"
// import TreeSvg from '../assets/Splash/tree.png'
import Carousel from 'react-material-ui-carousel'
import mediaDefaultPng from '../assets/Media/mediaDefault.png'


const useStyles=makeStyles({
    root:{
        backgroundRepeat:'no-repeat',
        // minHeight:'75vh'        
    },
    mainGrid:{
        paddingTop:'75px'
    },
    h1:{
        color:"#91D873",
        fontFamily: "Bai Jamjuree, sans-serif",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: "52px",
    },
    button:{
        color:'black',
        fontSize:'17px',
        padding:'15px 55px',
        borderRadius:'16px',
        background:'#91D873',
        textDecoration:'none',
        fontWeight:'700',
        '&:hover':{
            color:'lightgray',
            textDecoration:'none'
            
        }
        // background: "linear-gradient(135deg, #128D89 0%, #50D19D 100%)",
    },
    tree:{
        maxHeight:'75vh',
        maxWidth:'85vw'
    },
    card:{
        color:'black',
        borderRadius:'16px',
        minHeight:'350px',
        height:'15vh',
        paddingBottom:'25px',
        "&:hover":{
            transform:"scale3d(1.05, 1.05, 5)"
        }
        
    },
    cardLogoWrapper:{
        maxHeight:'50%'
    },
    cardLogo:{
        // margin:'5%',
        // maxHeight:'50%',
        maxWidth:'62%',
        textAlign:'center',
        borderRadius:'16px'
    },
    cardContent:{
        textAlign:'left',
        margin:'0% 5%',                
    },
    cardDate:{
        marginLeft:'2%', 
        marginTop:'40%',
        // position:'absolute',
        bottom:0,
        textAlign:'left',        
    },
    link:{
        color:'black',
        fontFamily: "Bai Jamjuree, sans-serif",
        textDecoration:'none',        
        '&:hover':{
            color:'gray'
        }
        
    }
})

function Articles(numPerPage=6){
    const classes=useStyles()
    const groupedMedia=[]
    //Add newest media ontop
    const mediaContent=[
        {

            embed:"t7CD1v-AzBQ ",
            link:'https://www.youtube.com/watch?v=t7CD1v-AzBQ',
            title:'Watch Dorjee Sun in the Burning Season trailer (2008), narrated by Hugh Jackman',
            // content:'Watch Dorjee Sun in the Burning Season trailer (2008), narrated by Hugh Jackman',
            // date:'Oct 11 2021'
            
        },
        {
            logo:'https://www.himpanzee.com/static/blog-image/blog-image3.jpg',
            link:'https://medium.com/perlin-network/perl-eco-tokenized-carbon-and-carbon-registry-836839444b07',
            title:'Dorjee Sun named 2009 TIME Hero of the Environment',
            // content:'Co-founder Dorjee Sun was named 2009 TIME Hero of the Environment',
            // date:'Oct 1 2021'
            
        },        
        {
            logo:"https://www.himpanzee.com/static/blog-image/blog-image4.jpg",
            link:'https://web.archive.org/web/20110708164950/http:/www.climos.com/news/articles/indonesianproposal.htm',
            title:'Wall Street Journal: Pay us not to chop down trees (2007)',
            // content:' '
            // date:'Sep 24 2021'            
        },
        {
            logo:"https://iccwbo.org/content/uploads/sites/3/2020/02/greenup-signing-2.png",
            link:'https://iccwbo.org/media-wall/news-speeches/icc-launches-greenup-australia-to-improve-fire-resilience-and-replant-trees-on-a-national-scale/',
            title:'ICC launches GreenUp Australia to improve fire resilience and replant trees on a national scale',
            // content:' '
            // date:'Sep 24 2021'            
        },
        {
            logo:'https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8zOGQwNzE1NzhlYWY3NjhlNWVkYjY3NzI5MzUzZjEwZS5qcGc=.jpg',
            link:'https://cointelegraph.com/news/iccs-new-carbon-council-will-implement-blockchain-for-carbon-market',
            title:'ICC’s New Carbon Council Will Implement Blockchain for Carbon Market',
            // content:''
        },
        {
            logo:mediaDefaultPng,
            link:'https://iccwbo.org/media-wall/news-speeches/icc-launches-carbon-council-to-drive-greater-liquidity-in-carbon-markets/',
            title:'ICC launches Carbon Council to drive greater liquidity in carbon markets',
            // content:''
        },


    ]
    for(let i=0; i<mediaContent.length/numPerPage; i++){
        groupedMedia.push(
            <div style={{padding:'0% 5%'}}>
                <Grid className={classes.cardGrid} container spacing={5}>
                {mediaContent.slice(numPerPage*i, numPerPage*(i+1)).map(i=>{
                    return(
                    <Grid item lg={4} md={6} xs={12}>
                        <Card className={classes.card} >
                            <CardContent style={{height:'20vh'}}>
                                <Grid container direction='column' spacing={2}>
                                    <Grid item hidden={!i.embed} style={{marginBottom:'5%'}}>
                                        <iframe
                                        height='100%'
                                        maxHeight='50%'
                                        width="100%"                    
                                        src={`https://www.youtube.com/embed/${i.embed}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                        /> 
                                    </Grid>
                                    <Grid item hidden={!i.logo}  style={{height:'100%', minHeight:'150px', textAlign:'center'}}>
                                        <img className={classes.cardLogo} src={i.logo} alt={i.title}  />
                                    </Grid>
                                    <Grid item hidden={!i.title} style={{margin:'0% 3%'}}>
                                        <a className={classes.link} href={i.link?i.link:null} target='_blank' rel='noopener nofollow noreferrer'>
                                            <h3>{i.title}</h3>
                                        </a>
                                    </Grid>
                                    {/* <Grid hidden={!i.content || !i.content.length===0}>
                                        <div className={classes.cardContent}>
                                            {`${i.content.substring(0,190)}${i.content.length>190?'...':''}`}
                                        </div>
                                    </Grid> */}
                                </Grid>                                
                            </CardContent>
                            <CardContent>
                            {/* <div className={classes.cardDate} hidden={!i.date}>
                                {i.date}
                            </div> */}
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                })}                        
                </Grid>
            </div>
            )
    }    
    return groupedMedia

}

function Media() {
    const classes=useStyles()
    const mediaContent=Articles(3)   
    return (
        <div className={classes.root}>
            {/* <div>
                <Grid className={classes.mainGrid} container direction='row' justify='space-around'>
                    <Grid item style={{marginTop:'20vh'}}>
                        <Grid container direction='column' alignItems='flex-start'>
                            <Grid item>
                                <h1 className={classes.h1}>Media</h1>
                            </Grid>
                            <Grid className={classes.link} item>
                                Please reach out to us for any media inquiries
                            </Grid>
                            <Grid item style={{marginTop:'10%'}}>
                                <Link className={classes.link} href='mailto:contact@perl.eco'>
                                    <Button className={classes.button}>
                                    Contact Us 
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <img className={classes.tree} alt="tree" src={TreeSvg}/>
                    </Grid>
                </Grid>
            </div> */}
            <div style={{padding:'3% 5%'}}>
                <Carousel interval={30000} animation='slide'>
                    {mediaContent}
                </Carousel>
                
            </div>

            
        </div>
    )
}
export default Media