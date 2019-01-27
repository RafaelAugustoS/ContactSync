import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from './'

class List extends Component {
    render(){
        return(
            <View style={styles.Container}>
                <Card />
                <Card />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
})

export { List }