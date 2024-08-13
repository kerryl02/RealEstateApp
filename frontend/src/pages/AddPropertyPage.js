import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPropertyPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [owner, setOwner] = useState('');
    const [images, setImages] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProperty = {
            title,
            description,
            price: parseFloat(price),
            owner,
            images: images.split(',').map(image => image.trim()),
        };

        fetch('http://localhost:5000/api/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProperty),
        })
        .then(response => response.json())
        .then(data => {
            setSuccessMessage('Propriété ajoutée avec succès !');
            setTitle('');
            setDescription('');
            setPrice('');
            setOwner('');
            setImages('');

            setTimeout(() => {
                navigate('/');
            }, 2000);
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout de la propriété:', error);
        });
    };

    return (
        <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Ajouter une nouvelle propriété</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold">Titre :</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Description :</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Prix :</label>
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Propriétaire :</label>
                    <input 
                        type="text" 
                        value={owner} 
                        onChange={(e) => setOwner(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Images (séparées par des virgules) :</label>
                    <input 
                        type="text" 
                        value={images} 
                        onChange={(e) => setImages(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Ajouter la propriété
                </button>
            </form>

            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        </div>
    );
};

export default AddPropertyPage;
