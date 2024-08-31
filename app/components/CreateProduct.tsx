import React, { useState } from 'react';
import {createProduct} from "../services/PrivateService";

const CreateProductComponent = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [discount, setDiscount] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('stock', stock);
        formData.append('discount', discount);
        formData.append('description', description);
        formData.append('state', state);

        if (image) {
            formData.append('image', image);
        }

        const token = localStorage.getItem('token'); // Obtén el token de donde lo estés almacenando

        try {
            const response = await createProduct(formData, token);
            console.log('Producto creado con éxito:', response);
            // Manejar la respuesta aquí
        } catch (error) {
            console.error('Error al crear el producto:', error);
            // Manejar el error aquí
        }
    };

    return (
        <div>
            <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input placeholder="Categoría" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
            <input placeholder="Descuento" value={discount} onChange={(e) => setDiscount(e.target.value)} />
            <input placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input placeholder="Estado" value={state} onChange={(e) => setState(e.target.value)} />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={handleSubmit}>Crear Producto</button>
        </div>
    );
};

export default CreateProductComponent;
