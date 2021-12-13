import React, {useState} from 'react'
import { Button, Checkbox, Link, Grid} from '@material-ui/core'
import {titleTextStyle, contentTextStyle} from '../styles/common.js'
import { makeStyles } from '@material-ui/styles'
import illustrationSvg from '../assets/Contact/illustration.svg'

const useStyles=makeStyles({
    root:{
        background:'#ECF3EF',
        fontFamily:"Bai Jamjuree, sans serif",
        minHeight:'100vh',
        color:'#72A15F'
    },
    rootWrapper:{
        margin:'0% 5%',
        padding:'3% 0%'
    },
    contactFormContainer:{
        ...contentTextStyle,
        background:'white',
        color:'#72A15F',
        maxWidth:'970px',
        fontSize:'18px',
        marginTop:'70px',
        borderRadius:'16px'
    },
    button:{
        ...titleTextStyle, 
        marginTop:"20px",
        minHeight:'70px',
        minWidth:'200px',
        fontSize:'24px', 
        background:'#91D873',
        borderRadius:'16px',
        color:'black',
        cursor:'pointer',
        "&:hover":{
            background:'none',
            color:'#72A15F'
        }
    },
    bottomText:{
        marginTop:'5%',
        fontSize:'20px',
        maxWidth:'45vw'
        
    }
})


function Contact() {
    let [buttonStatus, setButtonStatus] = useState(false);
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.rootWrapper}>
                <Grid container direction='row' justify='space-around'>
                <Grid item xs={12} md={6} style={{...titleTextStyle, fontSize:'36px'}}>                    
                    Contact                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={illustrationSvg} alt='illustration' style={{maxWidth:'100%'}}/>
                </Grid>
                </Grid>
                <div className={classes.contactFormContainer}>
                    <div className='contact-form-wrapper' style={{padding:'5%'}}>
                    <div className='contact-form-title' style={{maxWidth:'640px'}}>
                        We are here to help and answer any questions you might have. We look forward to hearing from you.
                    </div>
                        <form name="contact" method="POST">
                            <input type='hidden' name='form-name' value='contact'/>
                            <p>
                                <label for='name'>
                                    <input type="text" name="name" placeholder='Full Name' style={{...formInputStyle}}/>
                                </label>
                            </p>
                            <p>
                                <label for='email'>
                                    <input type="email" name="email" placeholder='Email' style={{...formInputStyle}}/>                                
                                </label>
                            </p>
                            <p>
                                <label for='phone'>
                                    <input type="tel" name="phone" placeholder='Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" style={{...formInputStyle}}/>                                
                                </label>
                            </p>
                            <p>
                                <label for='message'>
                                    <textarea name="message" placeholder='Message' style={{...contentTextStyle, ...formInputStyle}}/>                                
                                </label>
                            </p>                            
                                <Grid container  direction='row' justify='space-between' style={{maxWidth:'550px'}}>
                                    <Grid item justify='flex-start'>
                                        <Checkbox checked={buttonStatus} onChange={()=>setButtonStatus(!buttonStatus)} style={{color:'#72A15F'}}/>
                                        I agree to the 
                                        {" "}
                                        <Link href='/privacy' style={{...linkTextStyle}}>Privacy Policy</Link>
                                        {" "} and{" "}
                                        <Link href='/terms' style={{...linkTextStyle}}>Terms</Link>{"."}
                                    </Grid>
                                    
                                </Grid>
                            <p>
                                <Button className={classes.button} type="submit" disabled={!buttonStatus} style={{opacity:`${buttonStatus===true?1:0.5}`}}>{`Send >`}</Button>
                            </p>
                        </form>
                    </div>
                </div>
                <div className={classes.bottomText}>
                    If you are interested in joining our team or becoming a Bioeconomy agent, please send your CV to admin@bioeconomy.co   
                </div>
            </div>
        </div>
    )
}
export default Contact;

let formInputStyle={
    background:'inherit', 
    fontSize:'18px',
    color:'black', 
    minWidth:'350px',
    minHeight:'40px', 
    outline:'none', 
    border:'none', 
    borderBottom:'1px solid #808080',
    boxShadow:'none'
}

let linkTextStyle={
    ...contentTextStyle,
    opacity:'0.7',
    fontSize:'15px',
    textDecoration:'underline'
}