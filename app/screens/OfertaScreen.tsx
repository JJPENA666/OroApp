import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Coupon: React.FC<{
  title: string;
  description: string;
  buttonText: string;
  onClaimPress: () => void; 
  }> = ({ title, description, buttonText, onClaimPress }) => {
  return (
    <View style={styles.couponContainer}>
      <View style={styles.coupon}>
        <View style={styles.couponHeader}>
          <Text style={styles.couponTitle}>CÓDIGO CUPÓN</Text>
          <View style={styles.couponCode} />
        </View>
        <View style={styles.couponFooter}>
          <Text style={styles.couponDescription}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.claimButton} onPress={onClaimPress}>
        <Text style={styles.claimButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const OfertaScreen = () => {
  const [coupons, setCoupons] = useState([
    {
      title: 'Envio Gratis',
      description: 'Cupon valido para envios gratis en el Norte de Quito',
      buttonText: 'Reclamar',
      onClaimPress: () => console.log('Claim Envio Gratis coupon'),
    },
    {
      title: '30% Descuento',
      description: '30% en el mes de agosto en todas las joyas',
      buttonText: 'Reclamar',
      onClaimPress: () => console.log('Claim 30% Descuento coupon'),
    },
    {
      title: '25% en Monedas',
      description: '25% en monedas a partir de 20 unidades',
      buttonText: 'Reclamar',
      onClaimPress: () => console.log('Claim 25% en Monedas coupon'),
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="medal" size={32} color="#FFD700" />
        <Text style={styles.headerTitle}>Ofertas</Text>
      </View>
      <View style={styles.coupons}>
        {coupons.map((coupon, index) => (
          <Coupon
            key={index}
            title={coupon.title}
            description={coupon.description}
            buttonText={coupon.buttonText}
            onClaimPress={coupon.onClaimPress}
          />
        ))}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="home" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="format-list-bulleted" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Catalogo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="percent" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="cart" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  coupons: {
    padding: 10,
  },
  couponContainer: {
    marginBottom: 20,
  },
  coupon: {
    backgroundColor: '#d9f2ff',
    padding: 20,
    borderRadius: 10,
  },
  couponHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  couponCode: {
    backgroundColor: '#fff',
    width: '60%',
    height: 30,
    borderRadius: 5,
    marginLeft: 10,
  },
  couponFooter: {
    
  },
  couponDescription: {
    fontSize: 14,
  },
  claimButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  claimButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
  },
});

export default OfertaScreen;