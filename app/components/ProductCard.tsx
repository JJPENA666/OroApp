// components/ProductCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
    // Ajusta baseURL según tu configuración
    const baseURL = 'http://192.168.0.110:8000';
    const imageURL = `${baseURL}${product.image}`;

    return (
        <View style={styles.card}>
            <Image
                source={{ uri: imageURL }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.details}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>Precio: ${product.price}</Text>
                <Text style={styles.stock}>Cantidad Disponible: {product.stock}</Text>
                {product.discount && (
                    <Text style={styles.discount}>Descuento: {product.discount}%</Text>
                )}
                <Text style={styles.description}>{product.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200, // Ajusta la altura según tus necesidades
    },
    details: {
        padding: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        marginBottom: 4,
    },
    stock: {
        fontSize: 16,
        marginBottom: 4,
    },
    discount: {
        fontSize: 16,
        color: 'red',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
});

export default ProductCard;
