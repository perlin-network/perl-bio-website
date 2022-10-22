import React, { useState } from 'react';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import { useAppConfig } from '../../hooks/useAppConfig';

export default function LangList() {
  const { language, getSupportedLanguages, setCurrentLanguage } =
    useAppConfig();
  const [langList] = useState(getSupportedLanguages());
  return (
    <Stack direction="row" spacing={3} my="auto">
      {langList.map((lang) => (
        <LangLink
          key={lang}
          href={`/${lang}`}
          sx={{ '&&': { color: language === lang && '#FFF' } }}
          onClick={() => setCurrentLanguage(lang)}
        >
          {lang}
        </LangLink>
      ))}
    </Stack>
  );
}

const LangLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  color: 'rgba(255, 255, 255, 0.6)',
  textDecoration: 'none',
  fontFamily: "'Bai Jamjuree', sans-serif",
  fontSize: 20,
  fontWeight: 600,
  '&:hover': {
    color: '#FFF',
  },
});
