import React from 'react';
import '../styles/global.scss';
import AppProvider from '../contexts/AppContext';
import { AppProps } from 'next/app';
import projects from '../data/projects.json';
import skillsData from '../data/skillsListData.json';

import Head from 'next/head';
import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
      </Head>
      <AppProvider value={{ skillsData, projects }}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default MyApp;
