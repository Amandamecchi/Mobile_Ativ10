import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Amanda</Text>
            <Text style={styles.description}>
               tds1
            </Text>
            <Image source={{ uri: 'https://avatars.githubusercontent.com/u/158229094?v=4' }} style={styles.profileImage} />
            <View style={styles.iconContainer}>
                <Ionicons name='logo-html5' size={40} color='pink' />
                <Ionicons name='logo-css3' size={40} color='blue' />
                <Ionicons name='logo-javascript' size={40} color='yellow' />
                <Ionicons name='logo-react' size={40} color='cyan' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#EAF6F6' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    description: { fontSize: 14, textAlign: 'center', marginBottom: 10 },
    profileImage: { width: 250, height: 150, borderRadius: 10, marginBottom: 20 },
    iconContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '80%', marginTop: 20 }
});