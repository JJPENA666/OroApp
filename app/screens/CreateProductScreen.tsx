// src/screens/CreateProductScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { createProduct } from '../services/PrivateService';

const CreateProductScreen = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [discount, setDiscount] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

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
            formData.append('image', {
                uri: Platform.OS === 'ios' ? image.replace('file://', '') : image,
                type: 'image/jpeg',
                name: 'image.jpg',
            });
        }

        const token = 'your-auth-token'; // Reemplaza esto con la lógica para obtener el token

        try {
            const response = await createProduct(formData, token);
            setMessage('Producto creado con éxito');
            console.log('Producto creado con éxito:', response);
        } catch (error) {
            setMessage('Error al crear el producto');
            console.error('Error al crear el producto:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Producto</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Categoría"
                value={category}
                onChangeText={setCategory}
            />
            <TextInput
                style={styles.input}
                placeholder="Stock"
                keyboardType="numeric"
                value={stock}
                onChangeText={setStock}
            />
            <TextInput
                style={styles.input}
                placeholder="Descuento"
                value={discount}
                onChangeText={setDiscount}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={state}
                onChangeText={setState}
            />
            <Button title="Seleccionar Imagen" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Crear Producto" onPress={handleSubmit} />
            {message && <Text style={styles.message}>{message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 16,
    },
    message: {
        marginTop: 16,
        fontSize: 16,
        color: 'green',
    },
});

export default CreateProductScreen;
