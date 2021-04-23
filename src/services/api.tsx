import axios from 'axios';
const api = axios.create({
  baseURL: 'http://10.0.0.102:9000'
});

export default {
  fetchEnvironment: async () => {
    const { data } = await api.get('plants_environments?_sort=title&_order=asc');
    return data;
  },

  fetchPlants: async (page: number) => {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
    return data;
  }
}