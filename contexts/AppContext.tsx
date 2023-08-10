import React, { createContext, useContext, useState } from 'react';

import skillsData from '../data/skillsListData.json';

interface AppContextType {
  skillsData: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}
interface AppProviderProps {
  children: React.ReactNode;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [globalState, setGlobalState] = useState<any>(null);

  return (
    <AppContext.Provider value={{ skillsData }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export default AppProvider;
