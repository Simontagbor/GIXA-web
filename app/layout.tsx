import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { HeaderMegaMenu } from '../components/Header/HeaderMegaMenu';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import { theme } from '../theme';

export default function RootLayout({ children }: { children: any }) {
  return (
    <MantineProvider theme={theme}>
      <ColorSchemeScript />
      <HeaderMegaMenu />
      {children}
      <FooterLinks />
    </MantineProvider>
  );
}