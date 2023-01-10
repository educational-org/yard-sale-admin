import Axios from 'axios';
import endPoints from '@services/api';

// CONFIGURACIÓN PARA ENVÍO DE PRODUCTO - CREACÓN DE PRODUCTO
const addProduct = async (body: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
    },
  };
  const res = await Axios.post(endPoints.products.postProduct, body, config);
  return res.data;
};

const deleteProduct = async (id: number) => {
  const res = await Axios.delete(endPoints.products.deleteProduct(id));
  return res.data;
};

const updateProduct = async (id: any, body: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
    },
  };
  const res = await Axios.put(endPoints.products.putProducts(id), body, config);
  return res.data;
};

export { addProduct, deleteProduct, updateProduct };
