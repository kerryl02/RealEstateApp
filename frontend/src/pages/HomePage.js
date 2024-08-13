import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/properties')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setProperties(data);
                } else {
                    console.error("Les données reçues ne sont pas un tableau :", data);
                    setProperties([]);
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                setProperties([]);
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette propriété ?')) {
            fetch(`http://localhost:5000/api/properties/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    setProperties(properties.filter(property => property._id !== id));
                } else {
                    console.error('Erreur lors de la suppression');
                }
            })
            .catch(error => {
                console.error('Erreur lors de la suppression:', error);
            });
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-6">Liste des propriétés</h1>
            <Link to="/add-property" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Ajouter une nouvelle propriété
            </Link>
            {Array.isArray(properties) && properties.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {properties.map(property => (
                        <li key={property._id} className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-2xl font-semibold">{property.title}</h2>
                            <p className="text-gray-600">{property.description}</p>
                            <p className="text-lg font-bold mt-4">{property.price} €</p>
                            <button 
                                onClick={() => handleDelete(property._id)}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600 mt-8">Aucune propriété trouvée.</p>
            )}
        </div>
    );
};

export default HomePage;
