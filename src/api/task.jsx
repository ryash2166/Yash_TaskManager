import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTasks = async () => {
  const { data } = await axios.get(API_URL);
  return data.map((task) => ({
    ...task,
    dueDate: new Date().toISOString().split('T')[0], // Add fake dueDate
    priority: 'Medium', // Default priority
  }));
};

export const addTask = async (task) => {
  const { data } = await axios.post(API_URL, task);
  return { ...data, id: Date.now() };
};

export const updateTask = async (id, task) => {
  const { data } = await axios.put(`${API_URL}/${id}`, task);
  return data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
