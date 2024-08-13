import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import defaultImage from '../../assets/house.jpg';

const UserProperty = () => {
    const { userId } = useParams();
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:5000/api/users/${userId}/properties`, {
                    headers: {
                        'x-auth-token': token
                    }
                });
                const data = await response.json();

                console.log("Réponse de l'API:", data);

                if (Array.isArray(data)) {
                    setProperties(data);
                } else {
                    setError(data.message || "La réponse du serveur n'est pas un tableau");
                    setProperties([]);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des propriétés:', error);
                setError("Erreur lors de la récupération des propriétés");
                setProperties([]);
            }
        };

        fetchProperties();
    }, [userId]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="w-full max-w-[1440px] mx-auto mt-8 pt-16">
            <h2 className="text-3xl font-bold">Des Propriétés a proximité pour une réservation de dernière minute</h2>
            <p className=' text-xl mb-8'>
                Trouver un super offre d'hotel pour ce soir ou pour un prochain séjour 
            </p>
            {properties.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {properties.map(property => (
                        <li key={property._id} className="flex justify-between bg-white rounded-lg rounded-t-2xl overflow-hidden">
                            <div className=''>
                                {property.images && property.images[0] ? (
                                    <img src={property.images[0]} alt={property.title} className="w-full h-48 min-w-52 min-h-52 object-cover rounded-lg" />
                                ) : (
                                    <img src={defaultImage} alt="Default property" className="w-full h-48 min-w-52 min-h-52 object-cover rounded-lg" />
                                )}

                            </div>
                            <div className="flex flex-col w-full mx-6">
                                <h3 className="text-2xl font-semibold">{property.title}</h3>
                                <p className="text-lg text-gray-600 mt-2">{property.description}</p>

                                <div className="flex items-end-end mt-auto">
                                    <Button variant="primary" size="lg">Réserver cette annonce</Button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between min-w-32 '>
                                <div className='flex justify-end'>
                                    <span className="bg-blue-500 text-white font-bold py-1 px-3 w-12 h-12 text-xl flex justify-center items-center rounded-br-lg rounded-tl-lg">
                                            {property.rating || '4.8'}
                                    </span>
                                </div>

                                <p className="text-lg  mt-5 flex flex-col justify-end my-auto">
                                    <span className='flex justify-end'>A partir de </span><span className='text-3xl flex justify-end font-bold'>{property.price} €</span><span className='flex justify-end'>pour ce soir</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">Aucune propriété sélectionnée.</p>
            )}
        </div>
    );
};

export default UserProperty;
