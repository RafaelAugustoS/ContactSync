import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return(
        <View style={styles.Header}>
            <Text style={styles.Title}>Contact Sync</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 75,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    Title: {
        color: '#3EABF8',
        fontSize: 18
    }
})

export { Header } 