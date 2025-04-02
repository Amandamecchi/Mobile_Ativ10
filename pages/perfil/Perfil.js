import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetalhesScreen = ({ route, navigation }) => {
    const { textoDigitado = 'Nenhum texto disponível', textoSalvo = 'Nenhum texto armazenado' } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Texto</Text>
            <Text style={styles.normalText}>Texto Atual: {textoDigitado}</Text>
            <Text style={styles.savedText}>Texto Salvo: {textoSalvo}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Voltar' onPress={() => navigation.goBack()} color='blue' />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAF6F6' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    normalText: { color: '#FF5733', marginBottom: 10 },
    savedText: { color: '#33AFFF', marginBottom: 10 },
    buttonContainer: { width: '80%', marginTop: 10 }
});

export default DetalhesScreen;