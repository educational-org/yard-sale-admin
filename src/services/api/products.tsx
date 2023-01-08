import Axios from 'axios';
import endPoints from '@services/api';

// CONFIGURACIÓN PARA ENVÍO DE PRODUCTO - CREACÓN DE PRODUCTO
const addProduct = async (body:any)=>{
    const config = {
        headers:{
            'Content-Type':'application/json',
            accept:'*/*',
        }
    };
    const res = await Axios.post(endPoints.products.postProduct,body,config)
    return res.data;
}
export { addProduct };
