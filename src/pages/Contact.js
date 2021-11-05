import React, {useState} from 'react'
import { Button, Checkbox, Link, Grid} from '@material-ui/core'
import {titleTextStyle, contentTextStyle} from '../styles/common.js'
import { makeStyles } from '@material-ui/styles'

const useStyles=makeStyles({
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
            color:'white'
        }
    }
})


function Contact() {
    let [buttonStatus, setButtonStatus] = useState(false);
    const classes=useStyles()
    return (
        <div className='contact-container' style={{background:"#333336", padding:'3% 5%'}}>
        
                <div className='contact-title' style={{...titleTextStyle, fontSize:'36px'}}>
                    Contact
                </div>
                <div className='contact-form-container' style={{...contentTextStyle, background:'linear-gradient(180deg, #3C423C 0%, #333336 154.11%)',maxWidth:'970px', fontSize:'18px', marginTop:'70px', borderRadius:'16px'}}>
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
                                        <Checkbox color='white' checked={buttonStatus} onChange={()=>setButtonStatus(!buttonStatus)} style={{color:'white'}}/>
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
          
        </div>
    )
}
export default Contact;

let formInputStyle={
    background:'inherit', 
    fontSize:'18px',
    color:'white', 
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