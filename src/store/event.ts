import { create } from "zustand";
import { Event } from "../pages/Event/types/event";

type eventState = {
  searchTerm: string;
  eventsData: Event[];
  setEventsData: (data: Event[]) => void;
  setSearchTerm: (term: string) => void;
};

export const useEventStore = create<eventState>((set) => ({
  searchTerm: '',
  eventsData: [],
  setEventsData: (data) => set({ eventsData: data}),
  setSearchTerm: (term) => set({ searchTerm: term})
}))