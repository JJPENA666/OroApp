import axios from "axios";
const URL_PRODUCTS = 'http://192.168.0.110:8000/api/v1/private/products';
const URL_CATALOGUES = 'http://192.168.0.110:8000/api/v1/private/';
const URL_CARS = 'http://192.168.0.110:8000/api/v1/private/cars/';
const URL_SALES = 'http://192.168.0.110:8000/api/v1/private/sales';
const API_URL = 'http://192.168.0.110:8000/api/v1/private'; // Reemplaza con la URL de tu backend
const URL_USERS = 'http://192.168.0.110:8000/api/v1/private/users';
const URL_WISHES = 'http://192.168.0.110:8000/api/v1/private/favorites';

export const getUser =()=>{
    const request = axios(`${URL_USERS}-profile`,{
        headers:{
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



export const getCategories =()=>{
    const request = axios(`${URL_CATALOGUES}category-catalogues`,{
        headers:{
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         SERVICE PRODUCTS           *******************
 ******************************************************************/

export const getProduct =(id)=>{
    const request = axios(`${URL_PRODUCTS}/+${id}`,{
        headers:{
        }
    })
    return request.then(response=>response.data)
}

export const getProductAll = () => {
    return axios.get(`${URL_PRODUCTS}`)
        .then(response => response.data)  // Devuelve el objeto completo
        .catch(error => {
            console.error('Error fetching products:', error);
            throw error;
        });
};

export const createProduct = async (data) => {
    try {
        const response = await axios.post(`${URL_PRODUCTS}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al crear el producto:', error);
    }
};

export const updateProduct =(id, food)=>{
    const request = axios.put(`${URL_PRODUCTS + id}/`,food,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyProduct =(id)=>{
    const request =  axios.delete(`${URL_PRODUCTS}/`+ id,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}
