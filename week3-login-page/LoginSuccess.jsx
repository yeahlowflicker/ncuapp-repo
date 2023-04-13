import React from 'react';
import { Text, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';


function LoginSuccess({ route, navigation }) {
    const { school_id, name } = route.params
    return (
        //顯示在螢幕畫面上的都要放在這
        <TouchableOpacity style={styles.container} onPress={() => navigation.popToTop()}>
            <Text style={styles.text}>{school_id}</Text>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
        padding: 10,
        justifyContent: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: "monospace",
    }
})

export default LoginSuccess;
