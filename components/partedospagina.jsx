"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
// import required modules
import { Grid, Pagination } from "swiper/modules";
// import img from 'next/img'
import { useState, useEffect } from "react";
import Ofertas from "./ofertas";
import Ofertasdos from "./ofertasdos";
import Tecnologia from "./tecnologia";
import Link from "next/link";
const Partedos = () => {
  const [productos, setproductos] = useState([]);
  const [celulares, setcelulares] = useState([]);

  useEffect(() => {
    async function obtenertodolosproductos() {
      const responder = await fetch("https://dummyjson.com/products");
      const datos = await responder.json();
      setproductos(datos.products);
    }
    async function obtenercelulares() {
      const responder = await fetch(
        "https://dummyjson.com/products/search?q=phone"
      );
      const datos = await responder.json();
      setcelulares(datos.products);
    }

    obtenertodolosproductos();
    obtenercelulares();
  }, []);
  return (
    <>
      <div className="flex  justify-center">
        {" "}
        <p className="font-style: italic text-black">
          descubre nuestros descuentos disponibles
        </p>
      </div>
      <Ofertas />
      <div className="flex  justify-center">
        {" "}
        <p className="font-style: italic text-black">
          Descuentos adicionales en nuestra categoria
        </p>
      </div>

      <Ofertasdos />

      <div className="flex  justify-center">
        {" "}
        <h3 className="font-style: italic text-black pt-5">
          GRANDES DESCUENTOS EN TECNOLOGIAS
        </h3>
      </div>

      <Tecnologia />
      <div>
        <div className="flex  ">
          {" "}
          <p className=" text-black pt-5">ULTIMAS NOVEDADES</p>
          <a href="#" className="text-blue-900 items-end flex pl-2">
            ver mas
          </a>
        </div>
      </div>

      <div className="flex">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {productos.map((producto) => {
            return (
              <>
                <SwiperSlide>
                  <Link href={`/producto/${producto.id}`}>
                    <div className="border-1 border-gray-600 rounded border transition-transform transform hover:scale-105">
                      <div className="  flex justify-center">
                        <img
                          src={producto.images[0]}
                          alt=""
                          className="size-60"
                        />
                      </div>
                      <div className="flex justify-center flex-col items-center">
                        <h3 className=" text-black text-center">
                          ${producto.price}
                        </h3>
                        <p className="text-green-600">16% OFF</p>
                      </div>
                      <div>
                        <p className="text-green-600">ENVIO GRATIS </p>
                      </div>
                      <div>
                        <h5 className="text-black">{producto.title}</h5>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>

      <div className="flex mt-8 ">
        <div>
          <button className="flex flex-wrap justify-center">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_847942-MLA74113566726_012024-OO.webp"
              alt=""
              className="w-5/6"
            />
          </button>
        </div>
      </div>

      <div className="flex  justify-center">
        {" "}
        <h3 className="font-style: italic text-black pt-5">
          GRANDES DESCUENTOS EN TECNOLOGIAS
        </h3>
      </div>

      <div className="flex justify-center items-center">
        <div className=" p-3 ">
          <button>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_2X_619850-MLA74089922140_012024-G.webp"
              alt=""
              className="size-24 justify-center items-center mx-auto"
            />
          </button>
        </div>
        <div className=" p-3">
          <button>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_2X_672863-MLA74089942344_012024-G.webp"
              alt=""
              className="size-24 justify-center items-center mx-auto"
            />
          </button>
        </div>
        <div className=" p-3">
          <button>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_2X_971667-MLA74089942894_012024-G.webp"
              alt=""
              className="size-24 justify-center items-center mx-auto"
            />
          </button>
        </div>
        <div className=" p-3">
          <button>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_2X_780439-MLA74089943112_012024-G.webp"
              alt=""
              className="size-24 justify-center items-center mx-auto"
            />
          </button>
        </div>
        <div className=" p-3">
          <button>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_2X_704645-MLA74089923504_012024-G.webp"
              alt=""
              className="size-24 justify-center items-center mx-auto"
            />
          </button>
        </div>
        <div className=" p-3">
          <button>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_2X_993866-MLA74198350235_012024-G.webp"
              alt=""
              className="size-24 justify-center items-center mx-auto"
            />
          </button>
        </div>
        <div className=" p-3">
          <button>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_2X_658526-MLA74198283361_012024-G.webp"
              alt=""
              className="size-24 justify-center items-center mx-auto"
            />
          </button>
        </div>
      </div>
      <div>
        <div className="flex  ">
          {" "}
          <p className=" text-black pt-5">LO MAS POPULAR DE LA SEMANA</p>
        </div>
      </div>
      <div className="flex">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {celulares.map((celular) => {
            return (
              <>
                <SwiperSlide>
                  <Link href={`/producto/${celular.id}`}>
                    <div className="border-1 border-gray-600 rounded border transition-transform transform hover:scale-105">
                      <div className="  flex justify-center">
                        <img
                          src={celular.images[0]}
                          alt=""
                          className="size-60"
                        />
                      </div>
                      <div className="flex justify-center flex-col items-center">
                        <h3 className=" text-black text-center">
                          ${celular.price}
                        </h3>
                        <p className="text-green-600">16% OFF</p>
                      </div>
                      <div>
                        <p className="text-green-600">ENVIO GRATIS </p>
                      </div>
                      <div>
                        <h5 className="text-black">{celular.title}</h5>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Partedos;
