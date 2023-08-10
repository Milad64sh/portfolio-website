// pages / _app.js;
import React from 'react';
import '../styles/global.scss';
import AppProvider from '../contexts/AppContext';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
