import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, List } from './components'

class App extends Component {
    render(){
        return(
            <View style={styles.Container}>
                <Header />

                <List />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default App