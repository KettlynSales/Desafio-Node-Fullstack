// src/store/useEventoStore.ts
import { create } from "zustand";
import { fetchEventos } from "../services/event";

type Event = {
  key: string;
  eventName: string;
  category: string;
  local: string;
};

type EventoState = {
  eventos: Event[];
  fetchEventos: () => void;
};

const useEventoStore = create<EventoState>((set) => ({
  eventos: [],
  fetchEventos: async () => {
    const eventos = await fetchEventos();
    set({ eventos });
  },
}));

export default useEventoStore;
