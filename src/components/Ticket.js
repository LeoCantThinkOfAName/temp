import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';

export default class Ticket extends Component {
    state = {
        title: this.props.ticket.title,
        open: false
    }

    renderTitleColor() {
        return {
            backgroundColor: this.props.ticket.color,
            borderStyle: 'dashed',
            borderTopWidth: 1,
            borderTopColor: '#888',
            marginTop: 20,
            height: 30
        };
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <View style={styles.ticketHole}>
                    <View style={{ height: 3, backgroundColor: '#FFF', marginTop: 7 }} />
                </View>
                <View style={styles.ticketContainer}>
                    <View style={styles.ticketBg}>
                        <View style={this.renderTitleColor()}>
                            <Text style={styles.ticketTitle}>{this.state.title}</Text>
                        </View>

                        <View style={styles.ticketCircleLeft} />
                        <View style={styles.ticketCircleRight} />
                        <View style={styles.ticketCutLeft} />
                        <View style={styles.ticketCutRight} />
                    </View>

                    <TouchableNativeFeedback onPress>
                        <View style={styles.ticketExtend}>
                            <Image source={require('../assets/1.png')} style={{ flex: 1, width: null }} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = {
    ticketHole: {
        height: 10,
        backgroundColor: '#222',
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15
    },
    ticketContainer: {
        height: 120,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10
    },
    ticketBg: {
        height: 80,
        backgroundColor: '#fff'
    },
    ticketCircleLeft: {
        height: 20,
        width: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
        position: 'absolute',
        left: -10,
        top: 10
    },
    ticketCircleRight: {
        height: 20,
        width: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
        position: 'absolute',
        right: -10,
        top: 10
    },
    ticketTitle: {  
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center'
    },
    ticketCutRight: {
        height: 20,
        width: 20,
        backgroundColor: 'pink',
        position: 'absolute',
        bottom: -10,
        left: -10,
        transform: [
            { rotate: '45deg' }
        ]
    },
    ticketCutLeft: {
        height: 20,
        width: 20,
        backgroundColor: 'pink',
        position: 'absolute',
        bottom: -10,
        right: -10,
        transform: [
            { rotate: '45deg' }
        ]
    },
    ticketExtend: {
        width: 45,
        height: 35,
        alignSelf: 'center',
        marginTop: -10
    }
};
