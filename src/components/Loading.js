import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = ({ size }) => (
    <View style={styles.loadingScreen}>
        <ActivityIndicator size={size || 'large'} style={styles.loadingSpinner} />
    </View>
);

const styles = {
    loadingScreen: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    loadingSpinner: {
        flex: 1
    }
};

export default Loading;
