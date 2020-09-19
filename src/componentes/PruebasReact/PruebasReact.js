import React, { useState, useEffect } from 'react';


function PruebasReact() {
    const [count, setCount] = useState(0);
    const [nombre, setNombre] = useState("Nombre");
    const [apellido, setApellido] = useState("Apellido");


    useEffect(() => {    
        // Actualiza el título del documento usando la Browser API   
         document.title = `${nombre} ${apellido}`;  
        });

  

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <input placeholder={nombre} onChange={event => setNombre(event.target.value)}/>
        <input placeholder={apellido} onChange={event => setApellido(event.target.value)}/>
      </div>
    );
  }

  export default PruebasReact;


