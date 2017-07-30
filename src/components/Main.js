import React from 'react';
import { View } from 'react-native';

import TicketList from './TicketList';

const Main = () => (
    <View style={{ backgroundColor: 'pink', flex: 1 }}>
        <TicketList />
    </View>
);

export default Main;
