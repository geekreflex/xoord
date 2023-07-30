import { create } from 'zustand';

interface AppState {
  exportModal: boolean;
}

export const useAppStore = create<AppState>((set) => ({
  exportModal: false,
  openExportModal: () => set(() => ({ exportModal: true })),
  closeExportModal: () => set(() => ({ exportModal: false })),
}));
