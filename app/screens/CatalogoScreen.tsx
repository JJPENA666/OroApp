import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const CatalogoScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={catalogoStyles.scrollContainer}>
      <View style={catalogoStyles.container}>
        <View style={catalogoStyles.header}>
          <Image
            style={catalogoStyles.icon}
            source={require("../../assets/gold.png")}
          />
          <Text style={catalogoStyles.headerTitle}>Catalogo</Text>
        </View>
        <TouchableOpacity style={catalogoStyles.categoryButton}>
          <Text style={catalogoStyles.categoryButtonText}>joyas</Text>
        </TouchableOpacity>
        <View style={catalogoStyles.products}>
          {[
            {
              image: require("../../assets/cadena.png"),
              title: "14k Cadena de oro",
              price: "$1,000",
            },
            {
              image: require("../../assets/cadena.png"),
              title: "14k Cadena de oro",
              price: "$2,500",
            },
            {
              image: require("../../assets/cadena.png"),
              title: "14k Cadena de oro",
              price: "$1,000",
            },
            {
              image: require("../../assets/cadena.png"),
              title: "14k Cadena de oro",
              price: "$2,500",
            },
            {
              image: require("../../assets/cadena.png"),
              title: "14k Cadena de oro",
              price: "$1,000",
            },
            {
              image: require("../../assets/cadena.png"),
              title: "14k Cadena de oro",
              price: "$2,500",
            },
          ].map((product, index) => (
            <View key={index} style={catalogoStyles.productWrapper}>
              <Product
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </View>
          ))}
        </View>
        <TouchableOpacity style={catalogoStyles.categoryButton}>
          <Text style={catalogoStyles.categoryButtonText}>Monedas</Text>
        </TouchableOpacity>
        <View style={catalogoStyles.products}>
          {[
            {
              image: require("../../assets/moneda.png"),
              title: "1/2 oz. Aguila Americana",
              price: "$1,000",
            },
            {
              image: require("../../assets/moneda.png"),
              title: "1/2 oz. Aguila Americana",
              price: "$2,500",
            },
            {
              image: require("../../assets/moneda.png"),
              title: "1/2 oz. Aguila Americana",
              price: "$1,000",
            },
            {
              image: require("../../assets/moneda.png"),
              title: "1/2 oz. Aguila Americana",
              price: "$2,500",
            },
            {
              image: require("../../assets/moneda.png"),
              title: "1/2 oz. Aguila Americana",
              price: "$1,000",
            },
            {
              image: require("../../assets/moneda.png"),
              title: "1/2 oz. Aguila Americana",
              price: "$2,500",
            },
          ].map((product, index) => (
            <View key={index} style={catalogoStyles.productWrapper}>
              <Product
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </View>
          ))}
        </View>
        <TouchableOpacity style={catalogoStyles.categoryButton}>
          <Text style={catalogoStyles.categoryButtonText}>Lingotes</Text>
        </TouchableOpacity>
        <View style={catalogoStyles.products}>
          {[
            {
              image: require("../../assets/gold-bar.png"),
              title: "1/2 oz. Lingote de oro",
              price: "$1,000",
            },
            {
              image: require("../../assets/gold-bar.png"),
              title: "1/2 oz. Lingote de oro",
              price: "$2,500",
            },
            {
              image: require("../../assets/gold-bar.png"),
              title: "1/2 oz. Lingote de oro",
              price: "$1,000",
            },
            {
              image: require("../../assets/gold-bar.png"),
              title: "1/2 oz. Lingote de oro",
              price: "$2,500",
            },
            {
              image: require("../../assets/gold-bar.png"),
              title: "1/2 oz. Lingote de oro",
              price: "$1,000",
            },
            {
              image: require("../../assets/gold-bar.png"),
              title: "1/2 oz. Lingote de oro",
              price: "$2,500",
            },
          ].map((product, index) => (
            <View key={index} style={catalogoStyles.productWrapper}>
              <Product
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </View>
          ))}
        </View>
 
      </View>

      <View style={catalogoStyles.footer}>
        <TouchableOpacity
          style={catalogoStyles.footerButton}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialCommunityIcons name="home" size={24} color="#000" />
          <Text style={catalogoStyles.footerButtonText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={catalogoStyles.footerButton}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={24}
            color="#000"
          />
          <Text style={catalogoStyles.footerButtonText}>Catalogo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={catalogoStyles.footerButton}
          onPress={() => navigation.navigate("Oferta")}
        >
          <MaterialCommunityIcons name="percent" size={24} color="#000" />
          <Text style={catalogoStyles.footerButtonText}>Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={catalogoStyles.footerButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <MaterialCommunityIcons name="cart" size={24} color="#000" />
          <Text style={catalogoStyles.footerButtonText}>Carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const catalogoStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  categoryButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productWrapper: {
    width: "48%",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: 12,
    marginTop: 5,
  },
});
const Product = ({
  image,
  title,
  price,
}: {
  image: any;
  title: string;
  price: string;
}) => {
  return (
    <View style={styles.product}>
      <Image style={styles.productImage} source={image} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  categoryButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  product: {
    width: "48%",
    marginBottom: 20,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  footerButton: {
    alignItems: "center",
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  footerButtonText: {
    fontSize: 12,
  },
});

export default CatalogoScreen;
