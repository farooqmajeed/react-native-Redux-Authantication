import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (text) => {
    console.log("emailChanged", text);
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    console.log("passwordChanged", text); 
    
    return {
        type: PASSWORD_CHANGED ,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    // console.log("Error", email);
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(user => {
                dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
                console.log("email", user)
            })
            .catch(err=>console.log(err))
            
    };
};  
