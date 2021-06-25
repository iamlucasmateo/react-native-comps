import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export class AddInput extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        value: 'input here'
    }
    onSubmitHandler = () => {
        this.props.updateList(this.state.value);
        this.setState({value: ''});
    }
    handleInputChange = (text) => {
        this.setState({value: text});
    }
    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this.onSubmitHandler}
                    onChangeText={this.handleInputChange}
                    value={this.state.value}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 2,
        width: 250,
        paddingLeft: 10
    }
})