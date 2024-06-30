import { create } from 'zustand';
import { Local } from '../pages/Local/types/local';

type LocalState = {
  searchTerm: string;
  locaisData: Local[];
  localEdit: Local | null;
  gates: string[];
  ticketGates: string[];
  setGates: (data?: string[]) => void;
  setTicketGates: (data?: string[]) => void;
  setLocaisData: (data: Local[]) => void;
  setLocalEdit: (local: Local | null) => void;
  setSearchTerm: (term: string) => void;
  addGate: (gate: string) => void;
  removeGate: (gate: string) => void;
  addTicketGate: (turnstile: string) => void;
  removeTicketGate: (turnstile: string) => void;
};

export const useLocalStore = create<LocalState>((set) => ({
  searchTerm: '',
  locaisData: [],
  localEdit: null,
  gates: [],
  ticketGates: [],
  setGates: (data?: string[]) => set({ gates: data }),
  setTicketGates: (data?: string[]) => set({ ticketGates: data }),
  setLocaisData: (data: Local[]) => set({ locaisData: data }),
  setLocalEdit: (local) => set({ localEdit: local }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  addGate: (gate) => set((state) => ({ gates: [...state.gates, gate] })),
  removeGate: (gate) =>
    set((state) => ({ gates: state.gates.filter((g) => g !== gate) })),
  addTicketGate: (ticketGate) =>
    set((state) => ({ ticketGates: [...state.ticketGates, ticketGate] })),
  removeTicketGate: (ticketGate) =>
    set((state) => ({
      ticketGates: state.ticketGates.filter((t) => t !== ticketGate),
    })),
}));
