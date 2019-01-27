import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch, Animated } from 'react-native'

class Card extends Component {
    state = {
        width: new Animated.Value(0),
        height: new Animated.Value(0),
        radius: new Animated.Value(0)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.status){
            this.handleStartAnimation()
        }else{
            this.handleStopAnimation()
        }
    }

    handleStartAnimation = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(this.state.width, {
                    toValue: 100,
                    duration: 200
                }),
                Animated.timing(this.state.height, {
                    toValue: 100,
                    duration: 200
                }),
                Animated.timing(this.state.radius, {
                    toValue: 100,
                    duration: 200
                })
            ]),
            Animated.timing(this.state.radius, {
                toValue: 0,
                duration: 0
            })
        ]).start()
    }

    handleStopAnimation = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(this.state.width, {
                    toValue: 0,
                    duration: 200
                }),
                Animated.timing(this.state.height, {
                    toValue: 0,
                    duration: 200
                }),
                Animated.timing(this.state.radius, {
                    toValue: 100,
                    duration: 200
                })
            ]),
            Animated.timing(this.state.radius, {
                toValue: 0,
                duration: 0
            })
        ]).start()
        
    }



    render(){
        const { index, title, sub, classe, status, change } = this.props
        return(
            <View style={styles.Card}>
                <Animated.View 
                    style={[styles[classe], {
                        width: this.state.width.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0%', '1%']
                        }),
                        height: this.state.height.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0%', '1%']
                        }),
                        borderTopLeftRadius: this.state.radius,
                        borderTopRightRadius: this.state.radius,
                        borderBottomLeftRadius: this.state.radius
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
        alignItems: 'center'
    },
    BgBlue: {
        backgroundColor: '#3EABF8',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    BgGreen: {
        backgroundColor: '#89B73B',
        position: 'absolute',
        right: 0,
        bottom: 0
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