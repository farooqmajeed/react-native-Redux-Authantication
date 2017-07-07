import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {

    onEmailChange(text) {
        // console.log("9:", text);
        this.props.emailChanged(text);

    }
    onPasswordChange(text) {
        // console.log("13:", text);
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        // console.log("hello", this.props);
        const { email, password } = this.props;
        // console.log("Error", email);
        this.props.loginUser({ email, password });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    };
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error } = auth;

    return { email, password, error };
    console.log("state", email);
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm); 