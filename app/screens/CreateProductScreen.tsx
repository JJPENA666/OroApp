import React from 'react';
import { View, Alert } from 'react-native';
import { createProduct } from '../services/PrivateService';
import CreateProductComponent from '../components/CreateProduct';

const CreateProductScreen = ({ navigation }) => {
    const handleSubmit = async (productData) => {
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('price', productData.price);
        formData.append('stock', productData.stock);
        formData.append('discount', productData.discount);
        formData.append('description', productData.description);
        formData.append('state', productData.state);
        formData.append('category', productData.category);

        try {
            await createProduct(formData);
            Alert.alert('Exito', 'El producto fue creado de manera correcta');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Ocurrio un error al crear el producto');
        }
    };

    return (
        <View>
            <CreateProductComponent onSubmit={handleSubmit} />
        </View>
    );
};

export default CreateProductScreen;
