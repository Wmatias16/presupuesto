import React,{ useState } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from './components/Formulario';

function App() {

  // Definir presupuesto
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos] = useState([]);

  const agregarGasto = gasto =>{
    guardarGastos([
      ...gastos,
      gasto
    ]); 
  }


  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header> 
      <div className="contenido-principal contenido">
            {mostrarPregunta ? 
              (
                <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
              )
            :
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      agregarGasto={agregarGasto}
                    />
                  </div>
                  <div className="one-half column">
                  2
                  </div>
  
                </div>
              )
            }      
        </div>
        
    </div>
  );
}

export default App;
