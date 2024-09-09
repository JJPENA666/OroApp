import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, Alert, Image, Switch } from 'react-native';
import { getCategories, createProduct } from '../services/PrivateService';
import {Picker} from "@react-native-picker/picker"; // Asegúrate de que el archivo sea correcto
import * as ImagePicker from "expo-image-picker";

const CreateProductComponent = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [discount, setDiscount] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await getCategories();
                if (categoryData && Array.isArray(categoryData.data)) {
                    setCategories(categoryData.data);
                } else {
                    console.error('Expected an array of categories, but got:', categoryData);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);  // Asegúrate de que esto es una URI de cadena
        }
    };



    const handleSubmit = async () => {
        if (!selectedCategory) {
            Alert.alert('Validation Error', 'Please select a category.');
            return;
        }

        const formData = new FormData();

        formData.append('name', name);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('discount', discount);
        formData.append('description', description);
        formData.append('state', state ? '1' : '0');
        formData.append('category', selectedCategory);
        formData.append('image', {
            uri: image,
            name: 'profile.jpg',
            type: 'image/jpeg',
        });

        try {
            const response = await createProduct(formData);

            if (response) {
                onSubmit(response);
                Alert.alert('Success', 'Product created successfully!');
            } else {
                Alert.alert('Error', 'Failed to create product');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            Alert.alert('Error', `There was a problem creating the product: ${error.message}`);
        }
    };





    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Nombre del Producto:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Ingrese el nombre del producto"
            />

            <Text style={styles.label}>Precio:</Text>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="Ingrese el precio del producto"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Cantidad:</Text>
            <TextInput
                style={styles.input}
                value={stock}
                onChangeText={setStock}
                placeholder="Ingrese la cantidad disponible"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Descuento:</Text>
            <TextInput
                style={styles.input}
                value={discount}
                onChangeText={setDiscount}
                placeholder="Ingrese el descuento deseado"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Descripción:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Ingrese la descipcion del producto"
                multiline
            />

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Disponible</Text>
                <Switch
                    trackColor={{ false: '#gray', true: '#FFA500' }} // Color de la pista
                    thumbColor={state ? '#FFFFFF' : '#FFFFFF'} // Color del círculo
                    ios_backgroundColor="#gray" // Color de fondo en iOS
                    onValueChange={() => setState(previousState => !previousState)} // Cambia el estado
                    value={state} // Vincula el valor del switch con el estado
                />
            </View>

            <Text style={styles.label}>Categoria:</Text>
            <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una categoria" value="" />
                {categories.map((category) => (
                    <Picker.Item label={category.name} value={category.id} key={category.id} />
                ))}
            </Picker>

            <Button title="Seleccionar Imagen" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}


            <Button title="Agregar Producto" onPress={handleSubmit} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 15,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 15,
    },
});

export default CreateProductComponent;
