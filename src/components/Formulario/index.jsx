// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |       Import Componentes        |
// ***********************************

import CampoTexto from "./CampoTexto";

const Formulario = ({ buscar, handleOnChange,valor }) => {
    return (
        <form onSubmit={buscar}>
            <CampoTexto valor={valor} handleOnChange={handleOnChange} />;
        </form>
    );
};

export default Formulario;
