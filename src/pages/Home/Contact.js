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

import { useFormControls } from '../../hooks/useFormControls';
import { ReactComponent as LogoCompact } from '../../assets/logo-compact.svg';

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
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls({
      name: '',
      email: '',
      phone: '',
      message: '',
      // formSubmitted: false,
      // success: false,
    });

  return (
    <Root component="section">
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} pt={8} pr={8}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Form
              component="form"
              autoComplete="off"
              noValidate
              onSubmit={handleFormSubmit}
            >
              <Typography pb={8} fontSize={24} fontWeight="700">
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
              <FormButton
                type="submit"
                variant="contained"
                size="large"
                // disabled={!checked || !formIsValid()}
              >
                Contact us
              </FormButton>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  padding: '150px 0',
  '.MuiContainer-root': {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 'calc(-1* (100vw - 100%) / 2)',
      bottom: 0,
      width: '50vw',
      border: '1px solid #FFF',
      borderRight: 'none',
      pointerEvents: 'none',
    },
  },
}));

const Form = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8),
  paddingRight: 0,
  borderRight: 'none',
}));

const FormInput = styled(TextField)(({ theme }) => ({
  marginTop: 8,
  '.MuiInputBase-root': {
    background: 'none',
  },
}));

const FormButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  transform: 'translate(-50%, 50%)',
  zIndex: 1,
  color: '#000',
}));
