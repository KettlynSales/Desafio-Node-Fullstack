import { create } from "zustand";
import { Event } from "../pages/Event/types/event";

type EventState = {
  searchTerm: string;
  eventsData: Event[];
  eventEdit: Event | null
  setEventEdit: (event: Event | null) => void;
  setEventsData: (data: Event[]) => void;
  setSearchTerm: (term: string) => void;
};

export const useEventStore = create<EventState>((set) => ({
  searchTerm: '',
  eventsData: [],
  eventEdit: null,
  setEventEdit: (event) => set({ eventEdit: event }),
  setEventsData: (data: Event[]) => set({ eventsData: data}),
  setSearchTerm: (term) => set({ searchTerm: term})
}))