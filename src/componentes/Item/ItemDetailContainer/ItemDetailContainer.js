import React, {useEffect, useState}  from 'react'
import { useParams} from "react-router-dom";

import ItemDetail from '../../Item/ItemDetail/ItemDetail';
import Cargando from '../../Cargando/Cargando';

import {getFirestore} from '../../../firebase'



function ItemDetailContainer() {


    const {id} = useParams();

/*
    useEffect(() => {
        console.log('Recibido el id:', id);
        return() => {
            console.log('cambiando el id:', id)
        }
    }, [])
*/
    
   /* LOADING DE ITEM DETAIL CONTAINER */
   const [productoAmpliado, setProductoAmpliado] = useState(null);
   const [loadingProductoAmpliado, setLoadingProductoAmpliado] = useState(true);


   useEffect(() => {   
    //FIREBASE
    const db = getFirestore();
    const products = db.collection('items'); 
    const productoAmpliado = products.doc(id)

    productoAmpliado.get().then((doc) => {
        if (!doc.exists) {
            console.log('No existe el item');
            return
        }
        console.log('Encontrado');
        setProductoAmpliado({ id:doc.id, ...doc.data()});
    }).catch((error) => {
        console.log("Error buscando items", error);        
    }).finally(() => {
        setLoadingProductoAmpliado(false);
    });      
    }, [id]);   /*----*/
   

    return (
        <>
        { loadingProductoAmpliado  ? 
            <Cargando titulo="Cargando..."/>
          : <ItemDetail detalle={productoAmpliado}/>
        }  
        </>        
    );
}

export default ItemDetailContainer;

/*
<ItemCount initial="1" min="0" max={valores.stock} onAdd="1" id={valores.stock}/>
            {`${valores.id}`}
*/

