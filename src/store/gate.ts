import { create } from "zustand";

interface Gate {
    id: string;
    name: string;
    localId: string;
}

type GateState = {
    gatesData: Gate[];
    setGateData: (data: Gate[]) => void;
}

export const useGateStore = create<GateState>((set) => ({
    gatesData: [],
    setGateData: (data) => set({ gatesData: data}),
}));