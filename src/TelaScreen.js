import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    console.log(`login com Email: ${email} e senha: ${password}`);
};
};