import { ToolType } from '@/types/app';
import { createContext, useContext, useState } from 'react';

type AppContextType = {
  toolPanel: ToolType | null;
  openToolPanel: (tool: ToolType) => void;
  closeToolPanel: () => void;
};

const AppContext = createContext<AppContextType>({
  toolPanel: null,
  openToolPanel: () => {},
  closeToolPanel: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [toolPanel, setToolPanel] = useState<ToolType | null>(null);

  const openToolPanel = (tool: ToolType) => setToolPanel(tool);
  const closeToolPanel = () => setToolPanel(null);

  const contextValue = {
    toolPanel,
    openToolPanel,
    closeToolPanel,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
