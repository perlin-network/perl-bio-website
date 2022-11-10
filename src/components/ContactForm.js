import React, { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useFormControls } from '../hooks/useFormControls';
import { ReactComponent as LogoCompact } from '../assets/logo-compact.svg';

const formControls = [
  {
    name: 'name',
    label: 'full name',
  },
  {
    name: 'email',
    label: 'email',
  },
  {
    name: 'phone',
    label: 'phone',
  },
  {
    name: 'message',
    label: 'message',
    multiline: true,
    rows: 2,
  },
];

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls({
      name: '',
      email: '',
      phone: '',
      message: '',
      // formSubmitted: false,
      // success: false,
    });

  const onSubmit = async (e) => {
    setIsLoading(true);
    const result = await handleFormSubmit(e);
    setIsLoading(false);
    if (result === 'OK') {
      setAlertVisible(true);
    }
  };

  return (
    <Root component="section">
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              pt={{ xs: 0, md: 8 }}
              pr={{ xs: 0, md: 8 }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              <Typography
                mb={10}
                color="text.primary"
                fontSize={{ xs: 24, md: 36 }}
                fontWeight="600"
              >
                Our solutions deliver results for our partners, investors and
                customers and deliver support for the biosphere
              </Typography>
              <LogoCompact />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Form
              component="form"
              autoComplete="off"
              noValidate
              onSubmit={onSubmit}
            >
              <Typography pb={{ xs: 2, md: 8 }} fontSize={24} fontWeight="700">
                be part of the solution,
                <br />
                talk to us to learn more
              </Typography>
              {formControls.map((input) => (
                <FormInput
                  key={input.name}
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  name={input.name}
                  label={input.label}
                  multiline={input.multiline ?? false}
                  fullWidth
                  rows={input.rows ?? 1}
                  autoComplete="none"
                  variant="filled"
                  {...(errors[input.name] && {
                    error: true,
                    helperText: errors[input.name],
                  })}
                />
              ))}
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      size="large"
                      disableRipple
                      sx={{
                        marginTop: -3,
                        width: 60,
                      }}
                    />
                  }
                  label={
                    <Typography component="span" fontSize={18} fontWeight="500">
                      Tickbox for terms of use / privacy policy consent{' '}
                      <strong>
                        (I agree to the{' '}
                        <Link href={'/terms'} target="_blank" rel="noopener">
                          Terms of Use
                        </Link>{' '}
                        and{' '}
                        <Link href={'/privacy'} target="_blank" rel="noopener">
                          Privacy Policy
                        </Link>
                        )
                      </strong>
                    </Typography>
                  }
                  sx={{ paddingTop: 4 }}
                />
              </FormGroup>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  left: 0,
                  right: { xs: 0, md: 'auto' },
                  bottom: { xs: -60, md: 0 },
                  zIndex: 1,
                }}
              >
                <FormButton
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<PlayArrowRoundedIcon />}
                  disabled={!checked || !formIsValid()}
                >
                  Contact us
                </FormButton>
              </Box>
            </Form>
          </Grid>
        </Grid>
      </Container>
      {/* <Button onClick={() => setAlertVisible(true)}>Test Alert</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => setIsLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={alertVisible}
        autoHideDuration={7000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlertVisible(false)}
      >
        <Alert
          onClose={() => setAlertVisible(false)}
          severity="success"
          variant="filled"
        >
          Thank you for contacting us, we will get back to you soon.
        </Alert>
      </Snackbar>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  '.MuiContainer-root': {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 'calc(-1 * (100vw - 100%) / 2)',
        bottom: 0,
        width: '50vw',
        border: '1px solid #FFF',
        borderRight: 'none',
        pointerEvents: 'none',
      },
    },
  },
}));

const Form = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8),
  paddingRight: 0,
  borderRight: 'none',
  [theme.breakpoints.down('md')]: {
    marginTop: 64,
    marginBottom: 100,
    padding: theme.spacing(4),
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 'calc(-1* (100vw - 100%) / 2)',
      bottom: 0,
      width: 'calc(100% + (100vw - 100%) / 2)',
      border: '1px solid #FFF',
      borderRight: 'none',
      pointerEvents: 'none',
    },
  },
}));

const FormInput = styled(TextField)(({ theme }) => ({
  marginTop: 8,
  '.MuiInputBase-root': {
    background: 'none',
  },
}));

const FormButton = styled(Button)(({ theme }) => ({
  padding: '14px 44px',
  color: '#000',
  background: '#FFF',
  fontSize: 24,
  textTransform: 'none',
  transform: 'translate(-50%, 50%)',
  [theme.breakpoints.down('md')]: {
    transform: 'translate(0%, 100%)',
  },
  '&.Mui-disabled': {
    color: '#000',
    background: 'rgb(207, 207, 208)',
  },
  '& .MuiButton-endIcon > svg': {
    fontSize: 32,
  },
}));
