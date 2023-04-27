import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider } from 'native-base';
import Home from './Home'

function App() {
    return (
        <NativeBaseProvider>
            <Home />
        </NativeBaseProvider>
    );
}

export default App
