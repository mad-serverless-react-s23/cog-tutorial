import createRoute from 'react-dom';
import './index.css';
import Router from './Router';
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

createRoute.render(<Router />, document.getElementById('root'));