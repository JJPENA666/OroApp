import React from 'react';
import { View, Button, Linking, Alert } from 'react-native';

const WhatsAppButton = () => {
    const sendWhatsAppMessage = () => {
        const phoneNumber = '593995389961'; // Reemplaza con el número de teléfono deseado
        const message = '¡Hola! Este es un mensaje predeterminado.'; // Mensaje predeterminado

        // Genera la URL de WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Verificar si se puede abrir la URL
        Linking.canOpenURL(url).then((supported) => {
            if (!supported) {
                Alert.alert('Error', 'No se pudo abrir WhatsApp.');
            } else {
                return Linking.openURL(url);
            }
        }).catch((err) => {
            Alert.alert('Error', 'Ocurrió un error al intentar abrir WhatsApp.');
        });
    };

    return (
        <View style={{ marginTop: 50 }}>
            <Button title="Enviar WhatsApp" onPress={sendWhatsAppMessage} />
        </View>
    );
};

export default WhatsAppButton;
