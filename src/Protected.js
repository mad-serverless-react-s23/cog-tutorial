// protected route seen by users, not-user redirect to sign in/up
// uses useEffect and Auth class
// auth.current-blah in code checks for signed-in user
import React, {useEffect} from 'react';
import { Auth } from 'aws-amplify';
import { Container } from './Container';

export const Protected = (props) => {
    useEffect(() => {
        Auth.currentAuthenticatedUser()
        .catch(() => {
            props.histor.push('/profile')
        })
    }, []);

    return (
        <Container>
            <h1>This area is under My Protection!</h1>
        </Container>
    );
}