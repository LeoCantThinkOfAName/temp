import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback, TouchableHighlight } from 'react-native';

import TicketQr from './TicketQr';

export default class Ticket extends Component {
    state = {
        title: this.props.ticket.title,
        qr: this.props.ticket.qr,
        open: false,
        start: false,
        started: false,
        count: 60
    }

    handleExpendPress() {
        if (this.state.open) {
            this.setState({ open: false, start: false });
        } else {
            this.setState({ open: true });
        }
    }

    handleStart() {
        if (this.state.start) {
            this.setState({ start: false });
        } else {
            this.setState({ start: true });
        }

        this.setState({ started: true });

        if (!this.state.started) {
            setInterval(() => {
                if (this.state.count > 0) {
                    this.setState({ count: this.state.count - 1 });
                }
            }, 1000);
        }
    }

    handleReset() {
        this.setState({ count: 60 });
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

    renderExpendTicket() {
        if (this.state.open) {
            return {
                height: 320,
                paddingLeft: 15,
                paddingRight: 15,
                marginBottom: 10
            };
        }
        
        return {
            height: 120,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: 10
        };
    }

    renderContent() {
        if (this.state.open) {
            return (
                <TouchableHighlight style={styles.startBtn} underlayColor="#ff7e72" onPress={() => this.handleStart()}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '600' }}>
                            開始
                        </Text>
                        <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '600' }}>
                            使用
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        }
    }

    renderQr() {
        if (this.state.start) {
            return (
                <TicketQr qr={this.state.qr} />
            );
        }

        return;
    }

    renderCountDown() {
        if (this.state.start) {
            const min = this.state.count / 60 | 0;
            const sec = this.state.count - (min * 60);

            return (
                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20 }}>{min} : </Text>
                        <Text style={{ fontSize: 20 }}>{sec < 10 ? `0${sec}` : sec}</Text>
                    </View>
                    <TouchableHighlight 
                        style={{ backgroundColor: 'pink', marginTop: 10 }}
                        onPress={() => this.handleReset()} 
                        underlayColor="#ff7e72"
                    >
                        <Text style={{ textAlign: 'center' }}>RESET</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <View style={styles.ticketHole}>
                    <View style={{ height: 3, backgroundColor: '#FFF', marginTop: 7 }} />
                </View>
                <View style={this.renderExpendTicket()}>
                    <View style={styles.ticketBg}>
                        <View style={this.renderTitleColor()}>
                            <Text style={styles.ticketTitle}>{this.state.title}</Text>
                        </View>

                        {this.renderContent()}
                        {this.renderQr()}
                        {this.renderCountDown()}

                        <View style={styles.ticketCircleLeft} />
                        <View style={styles.ticketCircleRight} />
                        <View style={styles.ticketCutLeft} />
                        <View style={styles.ticketCutRight} />
                    </View>

                    <TouchableNativeFeedback onPress={() => this.handleExpendPress()}>
                        <View style={styles.ticketExtend}>
                            <Image 
                                source={require('../assets/1.png')}
                                style={{ flex: 1, width: null }} 
                            />
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
    ticketBg: {
        flex: 1,
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
    },
    startBtn: {
        backgroundColor: 'pink',
        height: 60,
        width: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 15,
        right: 15
    }
};
