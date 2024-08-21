import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const CartScreen = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Cartier Trinity Ring',
      price: 3000,
      quantity: 1,
      size: '6.5, 18k Gold',
      image: require('../../assets/anillo.png'), 
    },
    {
      id: 2,
      name: '10g Gold Bar',
      price: 7000,
      quantity: 1,
      size: '17',
      image: require('../../assets/oro.png'),
    },
  ]);

  const [shippingCost, setShippingCost] = useState(20);
  const [discount, setDiscount] = useState(0.3);

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = subtotal * discount;
    return subtotal - discountAmount + shippingCost;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}></Text>
        </TouchableOpacity>
        <Text style={styles.headerText}></Text>
        <Image source={require('../../assets/carrito.png')} style={styles.goldStack} />
      </View>

      <View style={styles.itemsContainer}>
        {items.map((item) => (
          <View style={styles.item} key={item.id}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <Text style={styles.itemSize}>Size {item.size}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.orderSummary}>
        <Text style={styles.orderSummaryTitle}>Resumen del pedido</Text>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Subtotal</Text>
          <Text style={styles.orderSummaryValue}>${calculateSubtotal().toFixed(2)}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Tipo de Descuento</Text>
          <Text style={styles.orderSummaryValue}>{`${(discount * 100).toFixed(0)}%`}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Envio</Text>
          <Text style={styles.orderSummaryValue}>${shippingCost.toFixed(2)}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Total</Text>
          <Text style={styles.orderSummaryValue}>${calculateTotal().toFixed(2)}</Text>
        </View>
        <Text style={styles.orderSummaryNote}>Certificado de autenticidad incluido</Text>
      </View>

      <View style={styles.seal}>
        <Image source={require('../../assets/certificado.png')} style={styles.sealImage} />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Proceder al pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  goldStack: {
    height: 20,
    width: 20,
    marginLeft: 'auto',
  },
  itemsContainer: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
  },
  itemSize: {
    fontSize: 14,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 5,
  },
  quantityButtonText: {
    fontSize: 16,
  },
  quantityText: {
    fontSize: 16,
  },
  orderSummary: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginBottom: 20,
  },
  orderSummaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderSummaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  orderSummaryLabel: {
    fontSize: 16,
  },
  orderSummaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderSummaryNote: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  seal: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sealImage: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payButton: {
    backgroundColor: '#ffd700',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whatsappButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    flex: 1,
  },
  whatsappImage: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});

export default CartScreen;
