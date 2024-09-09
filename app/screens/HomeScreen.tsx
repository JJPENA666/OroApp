import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList, Button,
} from "react-native";
import WhatsAppButton from "../components/WhatsappButton";
import { SafeAreaView } from 'react-native';

const products = [
  {
    id: "1",
    image: require("../../assets/moneda.png"),
    name: "1/2 oz. Aguila Americana",
    price: "$1,000",
  },
  {
    id: "2",
    image: require("../../assets/cadena.png"),
    name: "Cadena de Oro 14k",
    price: "$2,500",
  },

  {
    id: "2",
    image: require("../../assets/cadena.png"),
    name: "Cadena de Oro 14k",
    price: "$2,500",
  },
  {
    id: "1",
    image: require("../../assets/moneda.png"),
    name: "1/2 oz. Aguila Americana",
    price: "$1,000",
  },
  {
    id: "2",
    image: require("../../assets/cadena.png"),
    name: "Cadena de Oro 14k",
    price: "$2,500",
  },
  {
    id: "1",
    image: require("../../assets/moneda.png"),
    name: "1/2 oz. Aguila Americana",
    price: "$1,000",
  },

  // Agrega más productos según sea necesario
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/gold.png")}
          style={styles.goldBarsIcon}
        />
        <Text style={styles.headerTitle}>Inicio</Text>
      </View>

      <View style={styles.goldBarImageContainer}>
        <Image
          source={require("../../assets/gold-bar.png")}
          style={styles.goldBarImage}
        />
      </View>
      <Text style={styles.goldTitle}>Descubre la Elegancia del Oro</Text>

      <SafeAreaView>
        <WhatsAppButton />
      </SafeAreaView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Catalogo")}
        >
          <Text style={styles.buttonText}>Joyas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Catalogo")}
        >
          <Text style={styles.buttonText}>Monedas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Catalogo")}
        >
          <Text style={styles.buttonText}>Lingotes</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.popularProductsTitle}>Productos populares</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productsContainer}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="home" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Catalogo")}
        >
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={24}
            color="#000"
          />
          <Text style={styles.footerButtonText}>Catalogo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Oferta")}
        >
          <MaterialCommunityIcons name="percent" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Ofertas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <MaterialCommunityIcons name="cart" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Carrito</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Producto")}
        >
          <MaterialCommunityIcons name="Productos" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Productos</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  goldBarsIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  goldBarImageContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  goldBarImage: {
    borderRadius: 8,
    width: 280,
    height: 280,
  },
  goldTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    width: "30%",
  },
  buttonText: {
    textAlign: "center",
  },
  popularProductsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginLeft: 16,
  },
  productsContainer: {
    paddingVertical: 10,
  },
  product: {
    marginRight: 16,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  productPrice: {
    color: "#888",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: 12,
    marginTop: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
