import React, { Component } from 'react';
import { View } from 'react-native';

import SubHeaderBtn from './SubHeaderBtn';

export default class SubHeader extends Component {
    render() {
        return (
            <View style={styles.headerBlock}>
                <View style={styles.buttonSets}>
                    <SubHeaderBtn text="已使用" />
                    <SubHeaderBtn text="未使用" isMiddle />
                    <SubHeaderBtn text="已過期" />
                </View>
            </View>
        );
    }
}

const styles = {
    headerBlock: {
        height: 40,
        backgroundColor: '#fff',
        padding: 6,
        paddingRight: 20,
        paddingLeft: 20
    },
    buttonSets: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5
    }
};
