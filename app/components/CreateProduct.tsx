import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { getCategories } from '../services/PrivateService';
import {Picker} from "@react-native-picker/picker";

const CreateProductComponent = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [discount, setDiscount] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // Inicializa con una cadena vacía

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await getCategories();

                // Verificar si `categoryData` es un array
                if (Array.isArray(categoryData)) {
                    setCategories(categoryData);
                } else {
                    console.error('Expected an array of categories, but got:', categoryData);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = () => {
        if (!selectedCategory) {
            Alert.alert('Validation Error', 'Please select a category.');
            return;
        }

        const productData = {
            name,
            price,
            stock,
            discount,
            description,
            state,
            category: selectedCategory,
        };
        onSubmit(productData);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Product Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter product name"
            />

            <Text style={styles.label}>Price:</Text>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="Enter product price"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Stock:</Text>
            <TextInput
                style={styles.input}
                value={stock}
                onChangeText={setStock}
                placeholder="Enter stock quantity"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Discount:</Text>
            <TextInput
                style={styles.input}
                value={discount}
                onChangeText={setDiscount}
                placeholder="Enter discount percentage"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Description:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter product description"
                multiline
            />

            <Text style={styles.label}>State:</Text>
            <TextInput
                style={styles.input}
                value={state}
                onChangeText={setState}
                placeholder="Enter product state"
            />

            <Text style={styles.label}>Category:</Text>
            <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select a category" value={null} />
                {categories.map((category) => (
                    <Picker.Item label={category.name} value={category.id} key={category.id} />
                ))}
            </Picker>

            <Button title="Submit" onPress={handleSubmit} />
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
});

export default CreateProductComponent;
