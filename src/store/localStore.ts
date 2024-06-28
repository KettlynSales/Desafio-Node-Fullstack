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
  locaisData: [
    {
      key: '1',
      title: 'Morumbi',
      address: 'Avenida Francisco Morato, 1000',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
    {
      key: '2',
      title: 'Allianz Parque',
      address: 'Avenida Francisco Matarazzo, 1705',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
    {
      key: '3',
      title: 'Neo Química Arena',
      address: 'Avenida Miguel Inácio Curi, 111',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
    {
      key: '4',
      title: 'Neo Química Arena',
      address: 'Avenida Miguel Inácio Curi, 111',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
    {
      key: '5',
      title: 'Neo Química Arena',
      address: 'Avenida Miguel Inácio Curi, 111',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
    {
      key: '6',
      title: 'Neo Química Arena',
      address: 'Avenida Miguel Inácio Curi, 111',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
    {
      key: '7',
      title: 'Neo Química Arena',
      address: 'Avenida Miguel Inácio Curi, 111',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
    {
      key: '8',
      title: 'Neo Química Arena',
      address: 'Avenida Miguel Inácio Curi, 111',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
    {
      key: '9',
      title: 'Neo Química Arena',
      address: 'Avenida Miguel Inácio Curi, 111',
      cep: 'São Paulo, SP',
      gates: 'C.D.E.F.G.H.I.J.K',
      update: '05/10/2023',
    },
  ],
  setLocaisData: (data) => set({ locaisData: data }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  
}));
