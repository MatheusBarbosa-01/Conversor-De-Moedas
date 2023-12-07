import React, { useState } from 'react';
import './App.css';

function App() {
  const [converter, setConverter] = useState("0");
  const cotacaoDoDolar = 4.91;

  const handleConvertClick = () => {
    const valor = document.getElementById('input1').value;
    const valorEmDolar = parseFloat(valor);
    const valorEmReal = valorEmDolar * cotacaoDoDolar;
    setConverter(valorEmReal.toFixed(2));
  };

  const handleLimparClick = () => {
    setConverter(0);
    document.getElementById('input1').value = "";
  };

  return (
    <div className="App">
      <div className='all'>
        <h1 className="page-title">
          Conversor de moedas
        </h1>
        <img src="https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Convers%C3%A3o+1.png" alt="" />
        <div className="areaInput">
          <input type='number' placeholder='Digite o valor em dólar a ser convertido.' id='input1' />
          <button id='btnConverter' onClick={handleConvertClick}>Converter</button>
          <button id='btnLimpar' onClick={handleLimparClick}>Limpar</button>
        </div>
        <p id='pResult'>Valor em real: R$ {converter}</p>
      </div>
    </div>
  );
}

export default App;