import React from 'react';
import { View } from 'react-native';

const Footer = () => (
    <View style={styles.footerContainer} />
);

const styles = {
    footerContainer: {
        height: 50,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    }
};

export default Footer;
