import React from 'react';
import Campain from '../Campain/Campain';
import Categorie from '../Categori/Categorie';

const Homepage = () => {
    return (
        <div>
            <p>this is home page </p>
            <Categorie></Categorie>
            <Campain></Campain>
        </div>
    );
};

export default Homepage;