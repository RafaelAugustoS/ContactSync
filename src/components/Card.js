import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

class Card extends Component {
    render(){
        const { index, title, sub, classe, status, change } = this.props
        return(
            <View style={[styles.Card, status ? styles[classe] : null ]}>
                <Text style={styles.Title}>{ title }</Text>
                <Text style={styles.Sub}>{ sub }</Text>
                <Switch 
                    style={styles.Switch}
                    value={status}
                    onValueChange={() => change(index)}
                />
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
    BgGreen: {
        backgroundColor: '#89B73B'
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
    },
    Switch: {
        marginTop: 20
    }
})

export { Card }