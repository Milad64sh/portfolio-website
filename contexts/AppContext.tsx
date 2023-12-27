import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  skillsData: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  projects: Array<{
    id: number;
    title: string;
    prjDesc: string;
    prjLink: string;
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
