import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartupComponent = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.textStyle }>Goodbye, Cruel World!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '75%',
        backgroundColor: 'blue',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default StartupComponent;