    // Compteur.js
    import React, { useState, useEffect } from 'react';
    import ProductCard from './ProductCard';
    import Recherche from './Recherche'; // Importer le composant de recherche

    const Compteur = () => {
    const [produits, setProduits] = useState([]);
    const [filteredProduits, setFilteredProduits] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setProduits(data);
            setFilteredProduits(data); // Initialiser les produits filtrés
        });
    }, []);

    const handleSearch = (query) => {
        const filtered = produits.filter((produit) =>
        produit.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProduits(filtered);
    };

    return (
        <div className='row'>
        <h1>La liste de Produits</h1>
        <Recherche onSearch={handleSearch} /> {/* Utiliser le nouveau nom ici */}
        {filteredProduits.map((elm) => (
            <span key={elm.id} className='col-3'>
            <ProductCard produit={elm} />
            </span>
        ))}
        </div>
    );
    };

    export default Compteur;
