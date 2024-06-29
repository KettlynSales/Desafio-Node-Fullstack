import api from '../api/axios';

export const getLocais = async () => {
  const response = await api.get('/locais');
  return response.data;
};

export const createLocal = async (localData: {
  name: string;
  surname: string;
  type: string;
  cnpj: string;
  city: string;
  zipCode: string;
  state: string;
  address: string;
  complement: string;
  email: string;
  phone: string;
}) => {
  const response = await api.post('/locais', localData);
  return response.data;
};

export const updateLocal = async (
  id: string,
  localData: {
    name?: string;
    surname?: string;
    type?: string;
    cnpj?: string;
    city?: string;
    zipCode?: string;
    state?: string;
    address?: string;
    complement?: string;
    email?: string;
    phone?: string;
  },
) => {
  const response = await api.patch(`/locais/${id}`, localData);
  return response.data;
};

export const deleteLocal = async (id: string) => {
  const response = await api.delete(`/locais/${id}`);
  return response.data;
};
