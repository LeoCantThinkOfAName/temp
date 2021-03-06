import React from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Main from './components/Main';
import Footer from './components//Footer';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header title="iTicket" />
        <SubHeader />
        <Main />
        <Footer />
    </View>
);

export default App;
