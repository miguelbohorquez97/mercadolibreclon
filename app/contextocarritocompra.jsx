"use client";
import { createContext, useState,useEffect,useContext } from "react";

const Context = createContext(undefined);
const useCarrito =()=>{
    const ctx = useContext(Context)
    if(ctx==undefined){
        throw new Error('useCart must be used within a CartProvider')
    }
    return ctx
}
const Contextocarrito = ({ children }) => {
  const [carrito, setcarrito] = useState([]);
  const agregarcompra = (producto) => {
    const carroactual = JSON.parse(localStorage.getItem("carrito") ?? "[]");
    carroactual.push({...producto});
    localStorage.setItem("carrito", JSON.stringify(carroactual));
    setcarrito(carroactual); 
    
  };
  const eliminarProducto = (indice) => {
    const carroactual = JSON.parse(localStorage.getItem("carrito") ?? "[]");
    const copiacarroactual = [...carroactual];
    copiacarroactual.splice(indice, 1);
    localStorage.setItem("carrito",JSON.stringify(copiacarroactual))
    setcarrito(copiacarroactual);
  };


  useEffect(() => {
    const obtenercarrito = () => {
      const carroinfo = JSON.parse(localStorage.getItem("carrito") ?? "[]");
      console.log(carroinfo);
      setcarrito(carroinfo);
    };
    obtenercarrito();
  }, []);
  return (
    <Context.Provider value={{ carrito, setcarrito, agregarcompra,eliminarProducto }}>
      {children}
    </Context.Provider>
  );
};

export {useCarrito,Contextocarrito};
