type Event = {
  key: string;
  eventName: string;
  category: string;
  local: string;
};

const eventosData: Event[] = [
  {
    key: "1",
    eventName: "Final Copa América",
    category: "Futebol",
    local: "Morumbi",
  },
  {
    key: "2",
    eventName: "Semi Final Copa América",
    category: "Futebol",
    local: "Morumbi",
  },
  {
    key: "3",
    eventName: "Love on tour - Harry Styles",
    category: "Show",
    local: "Morumbi",
  },
];

export const fetchEventos = async (): Promise<Event[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventosData);
    }, 1000);
  });
};
