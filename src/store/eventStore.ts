import { create } from "zustand";
import { Event } from "../pages/Event/types/event";

type EventsState = {
  events: Event[];
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const useEventsStore = create<EventsState>((set) => ({
  events: [
    {
      key: "1",
      title: "Final Copa América",
      local: "Morumbi",
      type: "Futebol",
      address: "Avenida Miguel Inácio Curi, 111",
      gates: "C.D.E.F.G.H.I.J.K",
      date: "05/10/2023",
    },
    {
      key: "2",
      title: "Semi Final Copa América",
      local: "Morumbi",
      type: "Futebol",
      address: "Avenida Miguel Inácio Curi, 111",
      gates: "C.D.E.F.G.H.I.J.K",
      date: "05/10/2023",
    },
    {
      key: "3",
      title: "Love on tour - Harry Styles",
      local: "Morumbi",
      type: "Show",
      address: "Avenida Miguel Inácio Curi, 111",
      gates: "C.D.E.F.G.H.I.J.K",
      date: "05/10/2023",
    },
  ],
  searchTerm: "",
  setSearchTerm: (searchTerm) => set({ searchTerm }),
}));

export default useEventsStore;
