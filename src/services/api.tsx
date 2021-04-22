import axios from 'axios';
const api = axios.create({
  baseURL: 'http://10.0.0.102:9000'
});

export default {
  fetchEnvironment: async () => {
    const { data } = await api.get('plants_environments');
    return data;
  }
}