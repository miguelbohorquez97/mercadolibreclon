"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCarrito } from "../../contextocarritocompra";
const Productopagina = ({ params }) => {
  const [productosinfo, setproductosinfo] = useState({});
  const [loading, setloading] = useState(false);
  const valorcarro = useCarrito();
  useEffect(() => {
    async function obtenertodolosproductos1() {
      try {
        setloading(true);
        const responder = await fetch(
          `https://dummyjson.com/products/${params.id}`
        );
        const datos = await responder.json();
        setproductosinfo(datos);
      } catch {
      } finally {
        setloading(false);
      }
    }
    obtenertodolosproductos1();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <h2>cargando...</h2>
          <p>{JSON.stringify()}</p>
        </>
      ) : (
        <div className="bg-gray-300 h-screen">
          <div className="flex justify-center grid grid-cols-4 gap-4 bg-white mx-12 pt-11">
            <div className=" col-start-1 col-end-3">
              <div className="  flex justify-center flex-col items-center">
                <Image
                  src={
                    productosinfo.images && productosinfo.images.length > 0
                      ? productosinfo.images.at(0)
                      : "https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                  }
                  alt=""
                  width={384}
                  height={384}
                />
              </div>
            </div>
            <div className="col-start-3 col-end-6 justify-center align-middle text-center mt-10">
              <div className="text-black font-bold">{productosinfo.title}</div>
              <div className="text-black font-bold mt-5 text-2xl">
                {" "}
                <h6>${productosinfo.price}</h6>
              </div>
              <div className="text-black font-bold mt-5">
                {" "}
                <p className="text-green-600">ENVIO GRATIS </p>
              </div>
              <div className="text-black font-bold mt-5 items-center justify-center flex">
                {" "}
                <p className="text-green-600">hasta 48 cuotas </p>
                <img
                  src="https://campusbee.ug/wp-content/uploads/2017/08/visa-logo.png"
                  alt=""
                  className="w-12 items-center justify-center"
                />
              </div>
              <div className="block mx-auto w-72">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-8">
                  Comprar ahora
                </button>
                <button
                  onClick={()=>valorcarro.agregarcompra(productosinfo)}
                  className="bg-green-600 hover:bg-purple-700 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-purple-950 rounded mt-8"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Productopagina;
