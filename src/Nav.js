// create navigation ui
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    HomeOutlined,
    ProfileOutlined,
    FileProtectOutlined
} from '@antd-design/icons';

export const Nav = (props) => {
    const { current } = props; // choice from user: where are we? what route?
    return (
        <div>
            <Menu selectedKeys={(current)} 
                mode="horizontal">
                <Menu.Item key='home>'>
                    <Link to={'/'}>
                        <HomeOutlined />Home
                    </Link>
                </Menu.Item>
                <Menu.Item key='profile'>
                    <Link to={'/profile'}>
                        <ProfileOutlined />Profile
                    </Link>
                </Menu.Item>
                <Menu.Item key='protected'>
                    <Link to={'/protected'}>
                        <FileProtectOutlined />Protected
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    ); // book does not use {} around to='/this'
}