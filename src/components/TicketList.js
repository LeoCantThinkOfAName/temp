import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import Loading from './Loading';
import Ticket from './Ticket';

export default class TicketList extends Component {
    state = {
        tickets: [],
        loading: true
    }

    componentWillMount() {
        axios.get('http://southgarden.pmco.pro/website/static/data/data.json')
            .then(response => this.setState({ tickets: response.data, loading: false }));
    }

    isLoading() {
        if (this.state.loading) {
            return <Loading size="large" />;
        }
    }

    renderTickets() {
        return this.state.tickets.map(ticket => 
            <Ticket key={ticket.id} ticket={ticket} />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.isLoading()}
                <ScrollView>
                    <View style={{ padding: 10 }}>
                        {this.renderTickets()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
