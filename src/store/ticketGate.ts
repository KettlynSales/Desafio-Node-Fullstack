import { create } from "zustand";

interface TicketGate {
    id: string;
    name: string;
    localId: string;
}

type TicketGateState = {
    ticketGatesData: TicketGate[];
    setTicketGateData: (data: TicketGate[]) => void;
}

export const useGateStore = create<TicketGateState>((set) => ({
    ticketGatesData: [],
    setTicketGateData: (data) => set({ ticketGatesData: data}),
}));