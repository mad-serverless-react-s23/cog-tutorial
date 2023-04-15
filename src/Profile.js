import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import Container from './Container';
import '@aws-amplify/ui-react/styles.css';

const Profile = () => {
    useEffect(() => {
        checkUser()
    }, []);

    const [user, setUser] = useState({});

    const checkUser = async() => {
        try {
            const data = await Auth.currentUserPoolUser();
            const userInfo = { 
                username: data.username, 
                ...data.attributes 
            }; 
            setUser(userInfo);
        } catch (err) { console.err('error: ', err) };
    };

    return (
        <Container>
            <Authenticator>
                {({ signOut, userInfo }) => (
                    <main>
                        <h1>Lucky you, you have a profile!</h1>
                        <h2>Your username is {user.username}</h2>
                        <h3>You set your email to {user.email}</h3>
                        <button onClick={signOut}>I don't want to be here!</button>
                    </main>
                )}
            </Authenticator>
        </Container>
    );
};
export default Profile