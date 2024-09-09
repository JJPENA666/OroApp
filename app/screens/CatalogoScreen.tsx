// screens/CatalogScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import {getProductAll} from "../services/PrivateService";
import ProductCard from "../components/ProductCard";

const CatalogScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductAll();

        // Imprime la respuesta para depurar
        console.log('Data received:', response);

        // Accede a `response.data` para obtener el array de productos
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('Data received is not an array:', response.data);
          setError('Data received is not an array');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const groupByCategory = (products) => {
    return products.reduce((acc, product) => {
      const category = product.category?.name || 'Uncategorized'; // Asegúrate de ajustar la propiedad de categoría según tu estructura de datos
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  };

  const groupedProducts = groupByCategory(products);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
      <ScrollView style={styles.container}>

      <View style={styles.container}>
        {Object.keys(groupedProducts).map((category) => (
            <View key={category} style={styles.categorySection}>
              <Text style={styles.categoryName}>{category}</Text>
              <FlatList
                  data={groupedProducts[category]}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                      <ProductCard product={item} />
                  )}
              />
            </View>
        ))}
      </View>
      </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categorySection: {
    marginBottom: 20,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CatalogScreen;
