import { ToolType } from '@/types/app';
import { createContext, useContext, useState } from 'react';

type AppContextType = {
  toolPanel: ToolType | null;
  propertyPanel: string | null;
  openToolPanel: (tool: ToolType) => void;
  closeToolPanel: () => void;
  openPropertyPanel: (property: string) => void;
  closePropertyPanel: () => void;
};

const AppContext = createContext<AppContextType>({
  toolPanel: null,
  propertyPanel: null,
  openToolPanel: () => {},
  closeToolPanel: () => {},
  openPropertyPanel: () => {},
  closePropertyPanel: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [toolPanel, setToolPanel] = useState<ToolType | null>(null);
  const [propertyPanel, setPropertyPanel] = useState<string | null>(null);

  const openToolPanel = (tool: ToolType) => setToolPanel(tool);
  const closeToolPanel = () => setToolPanel(null);

  const openPropertyPanel = (property: string) => setPropertyPanel(property);
  const closePropertyPanel = () => setPropertyPanel(null);

  const contextValue = {
    toolPanel,
    propertyPanel,
    openToolPanel,
    openPropertyPanel,
    closeToolPanel,
    closePropertyPanel,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
