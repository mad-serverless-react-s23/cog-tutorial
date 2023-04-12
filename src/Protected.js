import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';

const Protected = (props) => {
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .catch(() => {
                props.history.push('/profile')
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