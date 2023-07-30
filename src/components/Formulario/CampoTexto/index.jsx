// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************
import styles from "./CampoTexto.module.css";

const CampoTexto = ({ handleOnChange,valor }) => {
    return (
        <div className={styles.container}>
            <div className={styles.campoTexto}>
                <input
                    value={valor}
                    maxLength={8}
                    onChange={(e) => handleOnChange(e)}
                    placeholder="Digite o CEP"
                    type="text"
                />
                <button>Buscar</button>
            </div>
        </div>
    );
};

export default CampoTexto;
