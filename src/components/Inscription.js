        // import React, { useState } from "react";
        // import { useNavigate } from "react-router-dom";

        // export default function Inscription() {
        // const [nom, setNom] = useState('');
        // const [prenom, setPrenom] = useState('');
        // const navigate = useNavigate();

        // const envoyer = (e) => {
        //     e.preventDefault();
        //     // Navigation vers la page d'affichage avec les données
        //     navigate('/display', { state: { nom, prenom } });
        // };

        // return (
        //     <div>
        //     <h2>Formulaire d'inscription</h2>
        //     <form onSubmit={envoyer}>
        //         <div>
        //         <label>Nom:</label>
        //         <input
        //             type="text"
        //             onChange={(e) => setNom(e.target.value.toUpperCase())}
        //             required
        //         />
        //         </div>
        //         <div>
        //         <label>Prénom:</label>
        //         <input
        //             type="text"
        //             onChange={(e) => setPrenom(e.target.value.toUpperCase())}
        //             required
        //         />
        //         </div>
        //         <button type="submit">Afficher</button>
        //     </form>
        //     </div>
        // );
        // }



    // import React, { useState } from "react";
    // import { useNavigate, Link } from "react-router-dom";
    
    // export default function Inscription() {
    // const [nom, setNom] = useState('');
    // const [prenom, setPrenom] = useState('');
    // const navigate = useNavigate();

    // const envoyer = (e) => {
    //     e.preventDefault();
    //     navigate(`/display/${nom}/${prenom}`);
    // };

    // return (
    //     <div>
    //     <h2>Formulaire d'inscription</h2>
    //     <form onSubmit={envoyer}>
    //         <div>
    //         <label>Nom:</label>
    //         <input
    //             type="text"
    //             onChange={(e) => setNom(e.target.value.toUpperCase())}
    //             required
    //         />
    //         </div>
    //         <div>
    //         <label>Prénom:</label>
    //         <input
    //             type="text"
    //             onChange={(e) => setPrenom(e.target.value.toUpperCase())}
    //             required
    //         />
    //         </div>
            
    //         <Link to={`Affichage/${nom}/${prenom}`}><button type="submit">Afficher</button></Link>
    //     </form>
    //     </div>
    // );
    // }





        import React, { useState } from "react";
        import { useNavigate } from "react-router-dom";
        import styled from "styled-components";


        const Button = styled.button `
            background-color : #f37708;
            color : #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            height: 22px;
            &:hover{
                background-color : #000000;
                color : #f37708;
            }
        `
        const Form = styled.form`
            display: flex;
            flex-direction: column;
            width: 300px;
`;
        const Container = styled.div
        `
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
            
        `
        const Input = styled.input`
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
`;
        export default function Connexion() {
        const [login, setLogin] = useState('');
        const [motDePasse, setMotDePasse] = useState('');
        const [erreurLogin, setErreurLogin] = useState('');
        const [erreurMotDePasse, setErreurMotDePasse] = useState('');
        const navigate = useNavigate();
        
        const utilisateur = {
            id: "Ayoub",
            motDePasse: "Ayoub1234"
        };
        
        const handleConnexion = (e) => {
            e.preventDefault();

            setErreurLogin('');
            setErreurMotDePasse('');
        
            let isValid = true;
        
            if (login !== utilisateur.id) {
            setErreurLogin("Login incorrect.");
            isValid = false;
            }
            if (motDePasse !== utilisateur.motDePasse) {
            setErreurMotDePasse("Mot de passe incorrect.");
            isValid = false;
            }
            if (isValid) {
            navigate("/home",{state:{login}});
            }
        };
        
        return (
            <Container>
            <h2>Connexion</h2>
            <Form onSubmit={handleConnexion}>
                <div>
                
                <Input
                    type="text" placeholder="Login"
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                {/* Affichage du message d'erreur pour le login */}
                {erreurLogin && <p style={{ color: 'red' }}>{erreurLogin}</p>}
                </div>
                <div>
                
                <Input
                    type="password" placeholder="Mot de passe"
                    onChange={(e) => setMotDePasse(e.target.value)}
                    required
                />
                {/* Affichage du message d'erreur pour le mot de passe */}
                {erreurMotDePasse && <p style={{ color: 'red' }}>{erreurMotDePasse}</p>}
                </div>
                
                <Button type="submit">Se connecter</Button>
            </Form>
        
            
            </Container>
        );
        }
        