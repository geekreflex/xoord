import { create } from 'zustand';

interface AppState {
  exportModal: boolean;
  helpModal: boolean;
  settingsModal: boolean;
  openExportModal: () => void;
  closeExportModal: () => void;
  openHelpModal: () => void;
  closeHelpModal: () => void;
  openSettingsModal: () => void;
  closeSettingsModal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  exportModal: false,
  helpModal: false,
  settingsModal: false,
  openExportModal: () => set(() => ({ exportModal: true })),
  closeExportModal: () => set(() => ({ exportModal: false })),
  openHelpModal: () => set(() => ({ helpModal: true })),
  closeHelpModal: () => set(() => ({ helpModal: false })),
  openSettingsModal: () => set(() => ({ settingsModal: true })),
  closeSettingsModal: () => set(() => ({ settingsModal: false })),
}));
