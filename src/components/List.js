import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from './'

class List extends Component {
    state = {
        data: [
            { id: 1, title: 'Connect Contacts', sub: 'All your phone Contacts will be automatically added to your frinds list.', class: 'BgBlue', status: false },
            { id: 2, title: 'Allow Discovery', sub: 'Turn on to allow your phone number to be displayed in your friends Contacts.', class: 'BgGreen', status: false }
        ]
    }

    handleChange = (index) => {
        const data = this.state.data
        data[index].status = !data[index].status

        this.setState({ data })
    }

    handleData = () => {
        return this.state.data.map((item, index) => 
            <Card 
                title={item.title}
                sub={item.sub}
                classe={item.class}
                status={item.status}
                change={this.handleChange}
                index={index}
                key={item.id}
            />    
        )
    }

    render(){
        return(
            <View style={styles.Container}>
                { this.handleData() }
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