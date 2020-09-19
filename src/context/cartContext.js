import React, { useState, useContext } from 'react';

export const UserContext = React.createContext([]);

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ initialValue = [], children}) {
  
  const [users, setUsers] = useState(initialValue);
  const [total, setTotal] = useState(0);

  // Calculo el total del carrito
  let totalCarrito = users.length   
  if (users.length>0) {
   totalCarrito = users.reduce((acc, pilot) => acc + pilot.cantidad, 0);
  }

 
  // AGREGO PRODUCTOS AL CARRITO
  function addUser(newUser) {      
    const u = [...users, newUser];
    setTotal(total+(newUser.precio * newUser.cantidad))
    setUsers(u);  
  }

  // ELIMINIO PRODUCTOS DEL CARRITO
  function removeUser(oldUser) {
    const u = users.filter(u => u.id !== oldUser.id);   
    setTotal(total-(oldUser.precio * oldUser.cantidad))
    setUsers(u);
  }

  // LIMPIO EL CARTCONTEXT
  function cleanCart() {    
    setUsers([]); 
    return
  }

  return <UserContext.Provider value={{ users, addUser, removeUser, total, cleanCart, totalCarrito}}>
    { children }
  </UserContext.Provider>
};

