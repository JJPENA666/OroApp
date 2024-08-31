import axios from "axios";
const URL_PRODUCTS = 'http://127.0.0.1:8000/api/v1/private/products';
const URL_CATALOGUES = 'http://127.0.0.1:8000/api/v1/private/';
const URL_CARS = 'http://127.0.0.1:8000/api/v1/private/cars/';
const URL_SALES = 'http://127.0.0.1:8000/api/v1/private/sales';
const API_URL = 'http://127.0.0.1:8000/api/v1/private'; // Reemplaza con la URL de tu backend
const URL_USERS = 'http://127.0.0.1:8000/api/v1/private/users';
const URL_WISHES = 'http://127.0.0.1:8000/api/v1/private/favorites';

export const getUser =()=>{
    const request = axios(`${URL_USERS}-profile`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}


export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const createProduct = (data, token) => {
    return axios.post(`${API_URL}/private//products`, data, {
        headers: {
            'Content-Type': 'multipart/form-data', // Asegúrate de especificar el tipo de contenido si estás enviando FormData
        },
    })
        .then(response => response.data)
        .catch(error => {
            console.error('Error al crear el producto:', error);
            throw error;
        });
};

