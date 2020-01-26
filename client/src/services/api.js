import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const useHttpGetAll = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const useHttpGetById = async (url, id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const useHttpAdd = async (url, body) => {
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  useHttpGetAll,
  useHttpGetById,
  useHttpAdd
};
