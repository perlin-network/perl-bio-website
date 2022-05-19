import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import {
  PageTitle,
  PageTitleParagraph,
  SectionIllustration,
} from '../components/styled';

import Illustration from '../assets/contact/illustration.png';
import Illustration2x from '../assets/contact/illustration@2x.png';

import { useFormControls } from '../hooks/useFormControls';

const formControls = [
  {
    name: 'name',
    label: 'Your full name',
  },
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'phone',
    label: 'Phone',
  },
  {
    name: 'message',
    label: 'Message',
    multiline: true,
    rows: 4,
  },
];

function Contact() {
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
    <div className="Team">
      <Box component="section" p="30px 0 40px">
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box flex="1" sx={{ maxWidth: { md: '460px', sm: '354px' } }}>
              <PageTitle>Contact</PageTitle>
              <PageTitleParagraph>
                We are here to help and answer any questions you might have. We
                look forward to hearing from you
              </PageTitleParagraph>
              <SectionIllustration
                srcSet={`${Illustration2x} 2x`}
                src={Illustration}
                sx={{ display: { sm: 'none', xs: 'block' }, m: '0 auto' }}
              />
              <Box
                component="form"
                autoComplete="off"
                noValidate
                sx={{ mt: '40px', '& .MuiTextField-root': { my: 1 } }}
                onSubmit={handleFormSubmit}
              >
                {formControls.map((input) => (
                  <TextField
                    key={input.name}
                    onChange={handleInputValue}
                    onBlur={handleInputValue}
                    name={input.name}
                    label={input.label}
                    multiline={input.multiline ?? false}
                    fullWidth
                    rows={input.rows ?? 1}
                    autoComplete="none"
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
                      />
                    }
                    label={
                      <>
                        {'I agree to the '}
                        <Link
                          href={'/privacy'}
                          target="_blank"
                          rel="noopener"
                          underline="none"
                        >
                          Privacy policy
                        </Link>
                        {' and '}
                        <Link
                          href={'/terms'}
                          target="_blank"
                          rel="noopener"
                          underline="none"
                        >
                          Terms
                        </Link>
                      </>
                    }
                  />
                </FormGroup>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={!checked || !formIsValid()}
                  sx={{ mt: 1 }}
                >
                  SEND
                </Button>
              </Box>
            </Box>
            <SectionIllustration
              srcSet={`${Illustration2x} 2x`}
              src={Illustration}
              sx={{ display: { sm: 'block', xs: 'none' } }}
            />
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Contact;
