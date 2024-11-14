    // import React from 'react';
    // import { useLocation } from 'react-router-dom';

    // const DisplayPage = () => {
    // const location = useLocation();
    // const { nom, prenom } = location.state || {};

    // return (
    //     <div>
    //     <h1>Données saisies</h1>
    //     {nom && prenom ? (
    //         <div>
    //         <p>Nom: {nom}</p>
    //         <p>Prénom: {prenom}</p>
    //         </div>
    //     ) : (
    //         <p>Aucune donnée saisie.</p>
    //     )}
    //     </div>
    // );
    // };

    // export default DisplayPage;





    import React from 'react';
    import { useParams } from 'react-router-dom';

    const Affichage = () => {
    const { nom, prenom } = useParams();

    return (
        <div>
        <h1>Données saisies</h1>
        {nom && prenom ? (
            <div>
            <p>Nom: {nom}</p>
            <p>Prénom: {prenom}</p>
            </div>
        ) : (
            <p>Aucune donnée saisie.</p>
        )}
        </div>
    );
    };

    export default Affichage;
