import React from 'react';
import Navigation from '../components/Navigation';
import Bandeau_acceuil from '../components/Bandeau_acceuil';
import Container from '../components/Container';


const Home = () => {
    return (
        <div className="page page_home">
            <Navigation />
            <Bandeau_acceuil />
            <Container />

            <h1>Acceuil</h1>
        </div>
    );
};

export default Home;