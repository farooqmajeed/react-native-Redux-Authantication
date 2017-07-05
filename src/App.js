import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase'
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyDShQMknRD8DZpxYKcguFwEtrBnE7q3rXA',
            authDomain: 'manager-5108d.firebaseapp.com',
            databaseURL: 'https://manager-5108d.firebaseio.com',
            projectId: 'manager-5108d',
            storageBucket: 'manager-5108d.appspot.com',
            messagingSenderId: '732126589453'
        };
        firebase.initializeApp(config); 
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    };
}

export default App;