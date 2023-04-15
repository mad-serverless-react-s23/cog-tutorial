import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .catch(() => {
                navigate('/profile')
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