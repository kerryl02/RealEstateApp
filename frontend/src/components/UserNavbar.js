import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';

const UserNavbar = () => {
    return (
        <header className='flex justify-center h-16 bg-gray-800'>
            <nav className=" w-full max-w-[1440px] flex justify-between">
                <div className='logo flex items-center max-w-48'>
                    <h1 className="text-white text-2xl font-bold">Real Estate App</h1>

                </div>

                <div className="menu flex justify-between items-center ">
                    <ul className="flex justify-around w-[250px]">
                        <li className=' text-white flex items-center px-3 py-2'>
                            <HelpIcon />
                            <Link to="/" className="hover:text-gray-300"></Link>
                        </li>

                        <li className=' text-white flex items-center px-3 py-2'>
                            <NotificationsIcon />
                            <Link to="/" className="hover:text-gray-300"></Link>
                        </li>

                        <li className=' text-white flex items-center px-3 py-2'>
                            <AccountCircleIcon />
                            <Link to="/" className="hover:text-gray-300 pl-2 flex-nowrap">Votre compte</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default UserNavbar;
