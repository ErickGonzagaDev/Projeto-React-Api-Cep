// ***********************************
// |          Import Padrão          |
// ***********************************

import { useState } from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import "./App.css";

// ***********************************
// |       Import Componetes         |
// ***********************************
import Formulario from "./components/Formulario";
import Card from "./components/Card";

function App() {
    const [cep, setCep] = useState("");
    const [dataCep, setDataCep] = useState("");

    const buscar = async (e) => {
        e.preventDefault();

        try {
            const acessandoApi = await fetch(
                `https://brasilapi.com.br/api/cep/v2/${cep}`
            );

            setDataCep(await acessandoApi.json());
            setCep("");
        } catch (error) {
            alert("Cep não encontrado...");
            setCep("");
        }
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Buscador de CEP:</h1>
                <Formulario
                    valor={cep}
                    handleOnChange={(e) => setCep(e.target.value)}
                    buscar={buscar}
                />
                <Card
                    dataCep={dataCep.cep}
                    dataState={dataCep.state}
                    dataCity={dataCep.city}
                />
            </div>
        </div>
    );
}

export default App;
