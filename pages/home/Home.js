import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [textoDigitado, setTextoDigitado] = useState('');
    const [textoSalvo, setTextoSalvo] = useState('Nenhum dado armazenado');

    useEffect(() => {
        const recuperarTexto = async () => {
            const dadoRecuperado = await AsyncStorage.getItem('textoSalvo');
            if (dadoRecuperado) setTextoSalvo(dadoRecuperado);
        };
        recuperarTexto();
    }, []);

    const armazenarTexto = async () => {
        await AsyncStorage.setItem('textoSalvo', textoDigitado);
        setTextoSalvo(textoDigitado);
    };

    const removerTexto = async () => {
        await AsyncStorage.removeItem('textoSalvo');
        setTextoSalvo('Nenhum dado armazenado');
        setTextoDigitado('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerenciamento de Dados</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Digite um texto' 
                value={textoDigitado} 
                onChangeText={setTextoDigitado} 
            />
            
            <Text style={styles.normalText}>Texto Atual: {textoDigitado || 'Nenhum'}</Text>
            <Text style={styles.savedText}>Texto Salvo: {textoSalvo}</Text>

            <View style={styles.buttonContainer}>
                <Button title='Salvar' onPress={armazenarTexto} color='green' />
            </View>

            <View style={styles.buttonContainer}>
                <Button title='Apagar' onPress={removerTexto} color='red' />
            </View>

            <View style={styles.buttonContainer}>
                <Button title='Ver Detalhes' 
                    onPress={() => navigation.navigate('Detalhes', { textoDigitado, textoSalvo })} 
                    color='blue' 
                />
            </View>

            <Text 
                style={styles.linkPerfil} 
                onPress={() => navigation.navigate('Perfil')}>
                Acesse seu perfil
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAF6F6' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    input: { width: '80%', borderWidth: 1, padding: 8, marginBottom: 10, backgroundColor: '#FFF' },
    normalText: { color: '#FF5733', marginBottom: 10 },
    savedText: { color: '#33AFFF', marginBottom: 10 },
    buttonContainer: { width: '80%', marginBottom: 10 },
    linkPerfil: { color: 'gray', textDecorationLine: 'underline', marginTop: 20 }
});
