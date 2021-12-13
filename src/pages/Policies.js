import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/styles'
import { Tab, Tabs } from '@material-ui/core'
import Terms from '../components/Terms.js'
import Privacy from '../components/Privacy.js'

const useStyles=makeStyles({
    root:{
        margin:'0% 5%',        
    },
    title:{
        fontSize:'32px',
        textAlign:'center',
        margin:'2% 0%'
    }
})

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function TabPanel(props) {
    const { children, value, index, ...other } = props;   
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div p={3}>
            {children}
          </div>
        )}
      </div>
    );
  }


function Policies() {
    const classes=useStyles()
    const [value, setValue]=useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    useEffect(()=>{
        const search = window.location.search
        const params = new URLSearchParams(search)
        const policy = params.get('p')
        if(policy==='privacy')  {
          setValue(1)
        }
      },[])
      
    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} centered TabIndicatorProps={{style:{background:'#72a15f'}}}>
                <Tab label="Terms of Use" {...a11yProps(0)} />
                <Tab label="Privacy Policy" {...a11yProps(1)} />            
            </Tabs>
            <TabPanel value={value} index={0}>
                <Terms/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Privacy/>
            </TabPanel>
                        
        </div>
    )
}

export default Policies