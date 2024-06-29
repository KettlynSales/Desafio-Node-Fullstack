import api from '../api/axios';

export const getEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};

export const createEvent = async (eventData: {
  name: string,
    type:string,
    date: string,
    hour: string,
    email: string,
    phone: string,
    localId: string
}) => {
  const response = await api.post('/events', eventData);
  return response.data;
};

export const updateEvent = async (id: string, eventData:{
  name?: string,
  type?:string,
  date?: string,
  hour?: string,
  email?: string,
  phone?: string,
  localId?: string
}) => {
  const response = await api.patch(`/events/${id}`, eventData);
  return response.data
}

export const deleteEvent = async(id: string) => {
  const response = await api.delete(`/events/${id}`);
  return response.data
}
