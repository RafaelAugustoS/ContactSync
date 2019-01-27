import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Card extends Component {
    render(){
        return(
            <View style={styles.Card}>
                <Text style={styles.Title}>Connect Contacts</Text>
                <Text style={styles.Sub}>All your phone Contacts will be automatically added to your frinds list.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Card: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    BgBlue: {
        backgroundColor: '#3EABF8'
    },
    TextWhite: {
        color: '#fff'
    },
    Title: {
        fontSize: 22,
        fontWeight: '300',
        color: '#3EABF8'
    },
    Sub: {
        textAlign: 'center',
        marginTop: 5,
        color: '#444'
    }
})

export { Card }