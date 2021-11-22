import React, { useState } from 'react'
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({ agregarGasto }) =>{

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError] = useState(false);

    const agregarGastos = e =>{
        e.preventDefault();

        if(nombre.trim() === '' || cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return;
        }
        guardarError(false);
        // Agregamos los gastos
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        agregarGasto(gasto);

        // Reseteamos el form
        guardarNombre('');
        guardarCantidad(0);
    }

    return(
        <form
            onSubmit={agregarGastos}
        >
            <h2>Agregar gastos</h2>
            {error ? <Error mensaje='Ambos campos son obligatorios o hubo un error' />: null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombre}
                    onChange={e =>guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300$"
                    value={cantidad}
                    onChange={e =>guardarCantidad(parseInt(e.target.value,10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />

        </form>
    )
}

export default Formulario;