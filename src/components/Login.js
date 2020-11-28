import React from 'react';
import '../css/login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer';

const Login = () => {

    const [state, dispatch] = useStateValue()

    const SignIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className='login__container'>
                <img
                    src='data:image/png;base64,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'
                    alt="slack-logo" />

                <h1> Sign Into AceDev</h1>
                <p>ace-dev.programming.com</p>
                <Button onClick={SignIn} > Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
