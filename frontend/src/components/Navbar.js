import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const isLoggedIn = !!localStorage.getItem('token');
    const userPageId = localStorage.getItem('userPageId');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userPageId');
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Real Estate App</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/add-property" className="text-white hover:text-gray-300">Ajouter une propriété</Link>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li>
                                <Link to="/create-page" className="text-white hover:text-gray-300">Créer ma page</Link>
                            </li>
                            {userPageId && (
                                <li>
                                    <Link to={`/user/${userPageId}`} className="text-white hover:text-gray-300">Ma Page</Link>
                                </li>
                            )}
                        </>
                    )}
                    {!isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/login" className="text-white hover:text-gray-300">Connexion</Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-white hover:text-gray-300">S'inscrire</Link>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button 
                                className="text-white hover:text-gray-300"
                                onClick={handleLogout}>
                                Déconnexion
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
