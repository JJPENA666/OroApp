// AuthService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/v1/public'; // Reemplaza con la URL de tu backend

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const register = async (name, email, password, address, phone) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('address', address);
    formData.append('phone', phone);

    try {
        const response = await axios.post(`${API_URL}/register`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const logout = async (token) => {
    try {
        const response = await axios.post(`${API_URL}/logout`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
