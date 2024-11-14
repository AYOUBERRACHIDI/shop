    import React, { useState } from 'react';

    const Recherche = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value); 
    };

    return (
        <div className="search-bar">
        <input
            type="text"
            placeholder="Rechercher un produit..."
            value={query}
            onChange={handleChange}
            className="search-input"
        />
        </div>
    );
    };

    export default Recherche;
