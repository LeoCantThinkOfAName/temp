import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => (
    <View style={styles.headerBlock}>
        <Text style={styles.headerText}>
            {title}
        </Text>
    </View>
);

const styles = {
    headerBlock: {
        backgroundColor: '#333',
        height: 50,
        flexDirection: 'row'
    },
    headerText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        marginTop: 10
    }
};

export default Header;
