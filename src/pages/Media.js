import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Button, Link, Grid, Card, CardContent} from "@material-ui/core"
import TreeSvg from '../assets/Splash/tree.png'
import Carousel from 'react-material-ui-carousel'


const useStyles=makeStyles({
    root:{
        backgroundRepeat:'no-repeat',
        background:'radial-gradient(#3A4F4D,#333336)',
        minHeight:'75vh'        
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
            color:'white',
            textDecoration:'none'
            
        }
        // background: "linear-gradient(135deg, #128D89 0%, #50D19D 100%)",
    },
    tree:{
        maxHeight:'75vh',
        maxWidth:'85vw'
    },
    card:{
        color:'white',
        background:'#333336',
        // height:'250px',
        minHeight:'250px',
        height:'38vh',
        paddingBottom:'25px'       
        
    },
    cardTitle:{
        
    },
    cardContent:{
        textAlign:'left',
        margin:'0% 5%',
                
    },
    cardDate:{
        marginLeft:'2%', 
        marginTop:'20%',
        // position:'absolute',
        bottom:0,
        textAlign:'left',        
    },
    link:{
        color:'white',
        fontFamily: "Bai Jamjuree, sans-serif",
        textDecoration:'none',
        
    }
})

function Articles(numPerPage=6){
    const classes=useStyles()
    const groupedMedia=[]
    //Add newest media ontop
    const mediaContent=[
        {
            logo:null,
            link:'https://medium.com/perlin-network/bioeconomy-and-perl-eco-83e8a939580b',
            title:'Bioeconomy & PERL.eco announce $2m investment for new biodiversity standard',
            content:'SINGAPORE — Bioeconomy, a leader in climate change solutions and developing strategies for ecological projects, and PERL.eco the Planetary Ecosystem Registration Ledger',
            date:'Oct 11 2021'
            
        },
        {
            logo:null,
            link:'https://medium.com/perlin-network/perl-eco-tokenized-carbon-and-carbon-registry-836839444b07',
            title:'PERL.eco tokenized carbon and carbon registry',
            content:'PERL.eco has tokenized carbon and built the Carbon Offset Registry. Our carbon tokens or carbon kilos (pCO2) can now be bought from 1inch.',
            date:'Oct 1 2021'
            
        },        
        {
            logo:null,
            link:'https://gorillafund.org/press-releases/press-release-on-world-gorilla-day-dian-fossey-gorilla-fund-announces-moon-gorillas-a-new-collaboration-for-carbon-neutral-perl-nfts/',
            title:'Moon Gorillas, a new collaboration for carbon-neutral PERL NFTs',
            content:'In celebration of World Gorilla Day on September 24, the Dian Fossey Gorilla Fund is announcing plans to launch an exclusive line of carbon-neutral non-fungible tokens', 
            date:'Sep 24 2021'
            
        },
        {
            logo:null,
            link:'https://cointelegraph.com/news/perlin-perl-price-gains-100-as-the-focus-on-green-energy-solutions-intensifies',
            title:'Perlin (PERL) price gains 100% as the focus on green energy solutions intensifies',
            content:'PERL price defied the marketwide downturn with a 100% rally following the release of an environmentally friendly focused platform that provides users with carbon credits.', 
            date:'Jun 19 2021'
            
        },
        {
            logo:null,
            link:'https://medium.com/perlin-network/introducing-oneperl-fb25acd7c4d2',
            title:'Introducing onePERL',
            content:'We are excited to announce our collaboration with ICHI, a protocol that created the world’s first Decentralized Monetary Authority (DMA), to launch our new governance token: onePERL.', 
            date:'Aug 12 2021'
            
        },
        {
            logo:null,
            link:'https://medium.com/perlin-network/perl-eco-is-now-on-shibaswap-woof-ab3650ea494b',
            title:'PERL.eco is now on Shibaswap',
            content:'We’re excited to have PERL.eco listed on ShibaSwap, the decentralized exchange that’s based on $SHIB on the Ethereum network.', 
            date:'Aug 9 2021'
            
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
                                <a className={classes.link} href={i.link?i.link:null} target='_blank' rel='noopener nofollow noreferrer'>
                                    <h3>{i.title}</h3>
                                </a>
                                <div className={classes.cardContent}>
                                    {`${i.content.substring(0,190)}${i.content.length>190?'...':''}`}
                                </div>
                            </CardContent>
                            <CardContent>
                            <div className={classes.cardDate} >
                                {i.date}
                            </div>
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
            <div>
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
            </div>
            <div style={{padding:'3% 5%'}}>
                <Carousel interval={30000} animation='slide'>
                    {mediaContent}
                </Carousel>
                
            </div>

            
        </div>
    )
}
export default Media