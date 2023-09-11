import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";


import TelaScreen from './src/TelaScreen';

const App = () => {
    return (
        <SafeAreaView>
           <TelaScreen/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;