import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPropertyPage from './pages/AddPropertyPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreatePage';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';

function App() {
    const location = useLocation();
    const showNavbar = !location.pathname.startsWith('/user/');

    return (
        <>
            {showNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-property" element={<AddPropertyPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-page" element={<CreatePage />} />
                <Route path="/user/:userId" element={<UserPage />} />
            </Routes>
        </>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
