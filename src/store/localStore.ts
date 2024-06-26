import { create } from "zustand";

type Local = {
  key: string;
  title: string;
  address: string;
  cep: string;
  gates: string;
  update: string;
};

type LocalState = {
  editLocal: Local | null;
  setEditLocal: (local: Local) => void;
  clearEditLocal: () => void;
};

const useLocalStore = create<LocalState>((set) => ({
  editLocal: null,
  setEditLocal: (local) => set({ editLocal: local }),
  clearEditLocal: () => set({ editLocal: null }),
}));

export default useLocalStore;
