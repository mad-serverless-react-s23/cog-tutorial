import createRoot from 'react-dom';
import './index.css';
import Router from './Router';
import 'antd/dist/reset.css';
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

createRoot.render(<Router />, document.getElementById('root'));