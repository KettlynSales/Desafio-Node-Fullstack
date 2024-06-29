import api from '../api/axios';

export const getTicketGates = async () => {
  const response = await api.get('/ticket_gates');
  return response.data;
};

export const createTicketGate = async (ticketGateData: {
  name: string;
  localId: string;
}) => {
  const response = await api.post('/ticket_gates', ticketGateData);
  return response.data;
};

export const updateTicketGate = async (
  id: string,
  ticketGateData: {
    name?: string;
    localId?: string;
  },
) => {
  const response = await api.patch(`/ticket_gates/${id}`, ticketGateData);
  return response.data;
};

export const deleteTicketGate = async (id: string) => {
  const response = await api.delete(`/ticket_gates/${id}`);
  return response.data;
};
