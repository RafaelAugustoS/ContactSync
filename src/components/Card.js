import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch, Animated, Dimensions } from 'react-native'

class Card extends Component {
    state = {
        value: new Animated.Value(10),
        percentual: new Animated.Value(0)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.status){
            this.handleStartAnimation()
        }else{
            this.handleStopAnimation()
        }
    }

    handleStartAnimation = () => {
        Animated.timing(this.state.percentual, {
            toValue: 120,
        }).start()
    }

    handleStopAnimation = () => {
        Animated.timing(this.state.percentual, {
            toValue: 0
        }).start()
    }



    render(){
        const { index, title, sub, classe, status, change } = this.props
        return(
            <View style={styles.Card}>
                <Animated.View 
                    style={[styles[classe], {
                        width: this.state.value,
                        height: this.state.value,
                        transform: [
                            { translateX: - Dimensions.get('window').width * 0.50 / 100 },
                            { translateY: - Dimensions.get('window').height * 0.50 / 100 },
                            { scaleX: this.state.percentual },
                            { scaleY: this.state.percentual }
                        ]
                    }]} 
                />

                <Text style={[styles.Title, status ? styles.TextWhite : null]}>{ title }</Text>
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
        overflow: 'hidden'
    },
    BgBlue: {
        backgroundColor: '#3EABF8',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: 40,
        borderRadius: 200
    },
    BgGreen: {
        backgroundColor: '#89B73B',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: 40,
        borderRadius: 200
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