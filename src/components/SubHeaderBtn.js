import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

class SubHeaderBtn extends Component {
    state = {
        text: this.props.text,
        isMiddle: this.props.isMiddle
    }

    isMiddle() {
        if (this.state.isMiddle) {
            return (styles.middleButton);
        }
        return (styles.buttonStyle);
    }

    render() {
        return (
            <TouchableHighlight style={this.isMiddle()} underlayColor="#333">
                <Text style={styles.buttonText}>{ this.state.text }</Text>
            </TouchableHighlight>
        );
    }
}

const styles = {
    buttonStyle: {
        flex: 3.33,
        height: 25,
        alignSelf: 'center'
    },
    buttonText: {
        textAlign: 'center',
        marginTop: 3
    },
    middleButton: {
        flex: 3.33,
        height: 27,
        alignSelf: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1
    }
};

export default SubHeaderBtn;
