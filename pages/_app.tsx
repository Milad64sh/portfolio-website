// pages / _app.js;
import React from 'react';
import '../styles/global.scss';
import AppProvider from '../contexts/AppContext';
import { AppProps } from 'next/app';
import projects from '../data/projects.json';
import skillsData from '../data/skillsListData.json';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider value={{ skillsData, projects }}>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
