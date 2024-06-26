type Local = {
  key: string;
  localName: string;
  address: string;
  gates: string;
};

const locaisData: Local[] = [
  {
    key: "1",
    localName: "Morumbi",
    address: "Avenida Francisco Morato, 1000",
    gates: "C.D.E.F.G.H.I.J.K",
  },
  {
    key: "2",
    localName: "Allianz Parque",
    address: "Avenida Francisco Matarazzo, 1705",
    gates: "3,4,5,6,7,8,9,10",
  },
  {
    key: "3",
    localName: "Neo Química Arena",
    address: "Avenida Miguel Inácio Curi, 111",
    gates: "info@corinthians.com",
  },
];

export const fetchLocais = async (): Promise<Local[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(locaisData);
    }, 1000);
  });
};
