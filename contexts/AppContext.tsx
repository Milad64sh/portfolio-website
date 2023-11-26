import React, { createContext, useContext, useState } from 'react';

import skillsData from '../data/skillsListData.json';
import { videosData } from '../data/projects';

interface AppContextType {
  skillsData: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  videosData: Array<{
    id: string;
    title: string;
    vidSrc: string;
  }>;
}
interface AppProviderProps {
  children: React.ReactNode;
  value: AppContextType;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export default AppProvider;
