// src/store/localStore.ts
import { create } from "zustand";
import { fetchLocais } from "../services/local";

type Local = {
  key: string;
  localName: string;
  address: string;
  gates: string;
};

type LocalState = {
  locais: Local[];
  fetchLocais: () => void;
};

const useLocalStore = create<LocalState>((set) => ({
  locais: [],
  fetchLocais: async () => {
    const locais = await fetchLocais();
    set({ locais });
  },
}));

export default useLocalStore;
