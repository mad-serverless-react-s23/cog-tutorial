// render profile info for user.
// add auth component for sign-up and sign-in
// render auth form if not signed in, profile UI, sign-out button
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Container from './Container';

const Profile = () => {
    useEffect(() => {
        checkUser()
    }, []);
    const [user, setUser] = useState({});
    const checkUser = async() => {
        try {
            const data = await Auth.currentUserPoolUser();
            const userInfo = { username: data.username, 
                ...data.attributes, };
            setUser(userInfo);
        } catch (err) { console.log('error', err) };
    };

    return (
        <Container>
            <h1>Lucky you, you have a profile!</h1>
            <h2>Your username is {user.userName}</h2>
            <h3>You set your email to {user.email}</h3>
            <h4>We don't intend to call you at {user.phone_number}</h4>
            <AmplifySignOut />
        </Container>
    );
};

export default withAuthenticator(Profile);
