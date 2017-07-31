import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode';

const TicketQr = ({ qr }) => (
    <View style={styles.qrContainer}>
        <QRCode value={qr} />
    </View>
);

const styles = {
    qrContainer: {
        alignSelf: 'center',
        marginTop: 30
    }
};

export default TicketQr;
