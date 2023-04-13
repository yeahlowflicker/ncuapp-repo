import React, { setState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image } from 'react-native';
import {
  NativeBaseProvider, Box, VStack, HStack, FlatList, ZStack
} from 'native-base';

class Login extends Component {
    navigation = this.props;

    state = {
        school_id: '',
        name: '',
    }

    render() {
        return (
            <NativeBaseProvider>
                <View style={styles.container}>
                    <Text style={{fontSize: 30, color: "#ddd"}}>Login</Text>
                    <StatusBar style="auto" />

                    <SafeAreaView style={{width: "100%", marginVertical: 30}}>
                    <TextInput onChangeText={school_id => this.setState({ school_id })} style={styles.input} placeholderTextColor="#888" placeholder="學號" keyboardType="numeric" maxLength={9}></TextInput>
                        <TextInput onChangeText={name => this.setState({ name })} style={styles.input} placeholderTextColor="#888" placeholder="姓名" keyboardType="default" maxLength={10}></TextInput>
                    </SafeAreaView>

                    <Button title="Sign In" onPress={() => this.login()}></Button>
                </View>
            </NativeBaseProvider>
        );
    }

    login() {
        if (this.state.school_id.length == 0 || this.state.name.length == 0) {
            alert("School ID  and name cannot be blank!")
            return
        }

        if (!/^[0-9]*$/.test(this.state.school_id)) {
            alert("School ID must contain only digits.")
            return
        }

        if (!/^[^0-9()]+$/.test(this.state.name)) {
            alert("Name cannot contain digits.")
            return
        }

        this.props.navigation.navigate('LoginSuccess', this.state)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#222',
        color: "#ddd",
        fontFamily: 'monospace',
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    grid2: {
        width: "100%",
        marginTop: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
    },
    card: {
        width: "48%",
        margin: 3,
        padding: 10,
        backgroundColor: "#333",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#888",
    },
    input: {
        height: 40,
        marginVertical: 3,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#888",
        backgroundColor: "#333",
        color: "#eee",
        textAlign: "left",
    },
})

export default Login
