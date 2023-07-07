import axios from 'axios';

// criar uma instancia axios com a url do backand
/// baseurl é a porta que esta rodando o backand
export const api = axios.create({
  baseURL: 'http://localhost:3001',
});


