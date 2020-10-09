import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';



function Loader() {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#000" />
        </View>
    );
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});


export default Loader;