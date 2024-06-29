export interface Event {
  id: string;
  name: string;
  type: string;
  date: string;
  hour: string;
  email: string;
  phone: string;
  localId: string;
}

export interface Gate {
  id: string;
  name: string;
  localId: string;
}

export interface Ticket {
  id: string;
  name: string;
  localId: string;
}

export interface Local {
  id: string;
  name: string;
  surname: string;
  type: string;
  cnpj: string;
  city: string;
  state: string;
  zipCode: string;
  address: string;
  complement?: string;
  email: string;
  phone: string;
  events: Event[];
  gates: Gate[];
  tickets: Ticket[];
}

  