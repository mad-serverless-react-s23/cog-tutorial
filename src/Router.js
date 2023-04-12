// routing logic defines comps and routes in app
// sets current route in Nav with window.location.href
// HashRouter sync UI and URL
// Switch gives only first child matching location
// Route defines comp to render via path param
import React, { useEffect, useState } from 'react';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';
import { // buggered this up on my own...
    HashRouter, 
    Switch, 
    Route 
} from 'react-router-dom';
import Nav from './Nav';

export const Router = () => {
    const [current, setCurrent] = useState('home');
    useEffect(() => {
        setRoute()
        window.addEventListener('hashchange', setRoute);

        return () => window.removeEventListener('hashchange', setRoute)
    }, []);
    const setRoute = () => {
        const location = window.location.href.split('/');
        const pathname = location[location.length - 1];
        setCurrent(pathname ? pathname : 'home');
    };

    return (
        <HashRouter>
            <Nav current={current} />
            <Switch>
                <Route exact path = "/" component={Public}/>
                <Route exact path="/protected" component={Protected}/>
                <Route exact path="/profie" component={Profile}/>
                <Route component={Public}/>
            </Switch>
        </HashRouter>
    );
}
