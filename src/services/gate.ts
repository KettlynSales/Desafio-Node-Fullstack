import api from '../api/axios';

export const getGates = async () => {
  const response = await api.get('/gates');
  return response.data;
};

export const createGate = async (gateData: {
  name: string;
  localId: string;
}) => {
  const response = await api.post('/gates', gateData);
  return response.data;
};

export const updateGate = async (
  id: string,
  gateData: {
    name?: string;
    localId?: string;
  },
) => {
  const response = await api.patch(`/gates/${id}`, gateData);
  return response.data;
};

export const deleteGate = async (id: string) => {
  const response = await api.delete(`/gates/${id}`);
  return response.data;
};
