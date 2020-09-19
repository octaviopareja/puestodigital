import React from 'react';

import MainContainer from './componentes/MainContainer/MainContainer';

import { UserProvider } from './context/cartContext';


export default function App() {


  
  return (

    <UserProvider>     
      <MainContainer name="Octavio"/>
    </UserProvider>

  );
}


