import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
    const [properties, setProperties] = useState([]);
    const [selectedProperties, setSelectedProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperties = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/properties', {
                headers: {
                    'x-auth-token': token
                }
            });
            const data = await response.json();
            setProperties(data);
        };

        fetchProperties();
    }, []);

    const handleCheckboxChange = (propertyId) => {
        setSelectedProperties((prevSelected) => {
            if (prevSelected.includes(propertyId)) {
                return prevSelected.filter(id => id !== propertyId);
            } else {
                return [...prevSelected, propertyId];
            }
        });
    };

    const handleCreatePage = () => {
        const token = localStorage.getItem('token');
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.user.id;

        fetch(`http://localhost:5000/api/users/${userId}/properties`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify({ properties: selectedProperties })
        }).then(() => {
            localStorage.setItem('userPageId', userId);
            navigate(`/user/${userId}`);
        });
    };

    return (
        <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Créer ma page</h1>
            <ul className="space-y-4">
                {properties.map(property => (
                    <li key={property._id} className="flex items-center">
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheckboxChange(property._id)} 
                            className="mr-2"
                        />
                        <span className="text-gray-700">{property.title}</span>
                    </li>
                ))}
            </ul>
            <button 
                onClick={handleCreatePage} 
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-blue-600"
            >
                Créer ma page
            </button>
        </div>
    );
};

export default CreatePage;
