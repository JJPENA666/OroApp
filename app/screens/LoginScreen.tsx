import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {login} from "../services/AuthService";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await login(email, password); // Asegúrate de que `login` devuelve el formato esperado
      console.log(response.user)
   //   Alert.alert('Login exitoso', `Bienvenido ${response.user.name}`);
      if (response){
        navigation.navigate('Home'); // Redirige a HomeScreen después del login exitoso
      }
      console.log('pppppppppppppp')

    } catch (error) {
      console.error('Error en login:', error); // Para depuración
      Alert.alert('Error', error.message || 'Algo salió mal');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Inicia sesión en tu cuenta</Text>
        <TextInput
            style={styles.input}
            placeholder="Correo"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.signUpButton}>
          <Text style={styles.signUpText}>¿Nuevo usuario? Regístrate</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#FAFAFA',
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUpButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: '#1C1C1C',
    textAlign: 'center',
  },
});

export default LoginScreen;
