import {create} from 'zustand';
import { Local } from '../pages/Local/types/local';

type localState = {
  searchTerm: string;
  locaisData: Local[];
  setLocaisData: (data: Local[]) => void;
  setSearchTerm: (term: string) => void;
};

export const useLocalStore = create<localState>((set) => ({
  searchTerm: '',
 locaisData: [],
  setLocaisData: (data) => set({ locaisData: data }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  
}));
