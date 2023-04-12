// protected route seen by users, not-user redirect to sign in/up
// uses useEffect and Auth class
// auth.current-blah in code checks for signed-in user
import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';

const Protected = (props) => {
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .catch(() => {
                props.history.push('/profile') // no auth? go to profile
            })
        }, 
    []);

    return (
        <Container>
            <h1>This area is under My Protection!</h1>
        </Container>
    );
}
export default Protected