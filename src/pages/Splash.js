import React, {useState} from 'react'
import { Grid, Link, Button } from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles'
import TreeSvg from '../assets/Splash/tree.png'
import Background from '../assets/Splash/background.png'
import {titleTextStyle, contentTextStyle} from '../styles/common.js'
import PartnerPerlEco from '../components/PartnerPerlEco'
import PartnerOthers from '../components/PartnerOthers'
import { makeStyles } from '@material-ui/styles';
import { ResponsivePie } from '@nivo/pie'

const useStyles=makeStyles({
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
    partnerContainer:{
        marginTop:'75px',
        maxWidth:'100%',
        margin:'0% 5%',
        backgroundColor:'#333336',
    },
    partnerContainerHeader:{
        ...contentTextStyle,
        color:"#A5AFA8"
    },
    dropDownCard:{

    },
    pillarDonut:{
        height:'500px',
        maxWidth:'85%',
        
    }

})


  function MyResponsivePie() {
    const theme=useTheme()
    const TopMetric = ({ dataWithArc, centerX, centerY }) => {
        return (
            <text
                x={centerX}
                y={centerY-25}
                textAnchor="middle"
                dominantBaseline="middle"
                fill='white'
                style={{
                    fontSize: '75%',
                }}
            >
            Integrated Marketplace
            </text>
        )
    }
    const MiddleMetric = ({ dataWithArc, centerX, centerY }) => {
        return (
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill='white'
                style={{
                    fontSize: '75%',
                }}
            >
            Blockchain
            </text>
        )
    }
    const BottomMetric = ({ dataWithArc, centerX, centerY }) => {
        return (
            <text
                x={centerX}
                y={centerY+25}
                textAnchor="middle"
                dominantBaseline="middle"
                fill='white'
                style={{
                    fontSize: '75%',
                }}
            >
            Financial Incentives
            </text>
        )
    }
    // const TestCard=({})
    return (
    <ResponsivePie
        data={[
            
            {
              "id": "2. Tokenized biodiversity credits",
              "label": "Bio Credits",
              "value": 25,
              "color": "hsl(102, 40%, 58%)"
            },
            {
              "id": "3. Collectibles",
              "label": "Collectibles",
              "value": 25,
              "color": "hsl(102, 32%, 54%)"
            },
            {
              "id": "4. Genomic data blockchain platform",
              "label": "Biogenome",
              "value": 25,
              "color": "hsl(102, 24%, 47%)"
            },
            {
            "id": "1. Carbon services",
            "label": "Carbon Credits",
            "value": 25,
            "color": "hsl(102, 56%, 65%)"
            }
          ]}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        colors={{datum:'data.color'}}
        innerRadius={0.45}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
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
        arcLabelsTextColor='white'
        theme={{fontSize:'0.95vw'}}
        tooltip="false"
        layers={['arcs', 'arcLabels', 'arcLinkLabels', TopMetric, MiddleMetric, BottomMetric]}
        //{{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
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

function Splash() {
    const classes=useStyles()

    return (
            <div className='splash-container'
            style={{
                backgroundColor:'#333336', mixBlendMode:'pass-through',  backgroundSize: "cover", minHeight:'100vh', 
            }}
            > 
            <div className='splash-background' style={{backgroundImage: `url(${Background})`, backgroundSize:'fit', backgroundRepeat:'no-repeat', backgroundPosition:'center center', padding:'5%'}}>
            <Grid container justify='space-between' style={{maxWidth:'100%', marginTop:'120px', }}>
                <Grid item justify='flex-start' sm={12} md={6}>
                    <Grid container direction='column' >
                        <Grid item>
                            <div className='splash-header' style={{...titleTextStyle, fontSize:'42px',  maxWidth:'600px'}}>
                                Build a sustainable future 
                            </div>
                        </Grid>
                        <Grid item>
                            <div className='splash-content' style={{...contentTextStyle, fontSize:'24px', marginTop:"100px", maxWidth:'550px'}}>
                                Bioeconomy is a leader in creating climate change solutions and developing strategies for ecological projects, including around carbon and biodiversity. This includes empowering organisations to realise opportunities with blockchain technologies.
                            </div>
                        </Grid>
                        <Grid item style={{marginTop:'50px'}}>
                            <Link href='/contact' style={{textDecoration:'none', zIndex:'0'}}>
                                <Button className={classes.button} >
                                    {`Book a Consultation`}
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>                    
                </Grid>
                <Grid item justify='flex-end' sm={12} md={6}>
                    <img src={TreeSvg} alt='' style={{maxWidth:'100%', minWidth:'100%', maxHeight:"620px", marginTop:window.innerWidth < 768 ?'0px':'-125px' }}/>
                </Grid> 
            </Grid>
            </div>
            <div className={classes.partnerContainer}>
                <p className={classes.partnerContainerHeader}>Affilates</p>
                <Grid container direction='column'>
                    <Grid item style={{marginTop:'35px',}}>
                        <PartnerPerlEco />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.partnerContainer}>
                <p className={classes.partnerContainerHeader}>Partners</p>
                <Grid container direction='column'>
                    <Grid item style={{marginTop:'35px',}}>
                        <PartnerOthers />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.partnerContainer} style={{alignItems:'center'}}>
                <p className={classes.partnerContainerHeader}>Pillars</p>
                <div className={classes.pillarDonut} style={{justifyItem:'center'}}>
                    <div style={{position:'absolute',marginLeft:'15%', marginTop:'8%'}}>
                        hello
                    </div>
                    <MyResponsivePie/>
                </div>
            </div>
        </div>
            
        
    )
}
export default Splash;
