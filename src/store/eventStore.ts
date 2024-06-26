import { create } from "zustand";

type Event = {
  key: string;
  title: string;
  address: string;
  local: string;
  gates: string;
  type: string;
  date: string;
};

type EventoState = {
  editEvento: Event | null;
  setEditEvento: (evento: Event) => void;
  clearEditEvento: () => void;
};

const useEventoStore = create<EventoState>((set) => ({
  editEvento: null,
  setEditEvento: (evento) => set({ editEvento: evento }),
  clearEditEvento: () => set({ editEvento: null }),
}));

export default useEventoStore;
