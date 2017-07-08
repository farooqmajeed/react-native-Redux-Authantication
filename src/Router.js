import React from 'react';
import { Scene, Router } from 'reac 
t-native-router-flux';

const RouterComponent = () => {
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please login" />
        </Scene>
    </Router>
};

export default RouterComponent
