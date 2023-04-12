// render profile info for user.
// add auth component for sign-up and sign-in
// render auth form if not signed in, profile UI, sign-out button
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import Container from './Container';
// import '@aws-amplify/ui-react/styles.css';

export const Profile = () => {
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
            }; // to know what is available if unknown, console.log(userInfo)
            // displays information is in user object for us to utilize
            setUser(userInfo);
        } catch (err) { console.log('error: ', err) };
    };

    return (
        <Container>
            <Authenticator>
                {({ signOut, user }) => (
                    <main>
                        <h1>Lucky you, you have a profile!</h1>
                        <h2>Your username is {user.username}</h2>
                        <h3>You set your email to {user.email}</h3>
                        <h4>We don't intend to call you at {user.phone_number}</h4>
                        <button onClick={signOut}>I don't want to be here!</button>
                    </main>
                )}
            </Authenticator>
        </Container>
    );
};