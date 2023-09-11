import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`login com Email: ${email} e senha: ${password}`);
    };
    return (
        <View style={StyleSheet.container}>

            <Text style={StyleSheet.heading}>Tela de Login</Text>

            <TextInput

            style={StyleSheet.input}
            />
        </View>
    );
};

export default LoginScreen;