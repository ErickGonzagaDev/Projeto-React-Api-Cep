// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Card.module.css";

const Card = ({ dataCep, dataState, dataCity }) => {
    return (
        <div className={styles.container}>
            <div className={styles.containDados}>
                <p> Cep: {dataCep}</p>
                <p> Cidade: {dataCity}</p>
                <p> Estado: {dataState}</p>
            </div>
        </div>
    );
};

export default Card;
