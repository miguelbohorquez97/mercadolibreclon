"use client";
import Menudesplegable from "./carritocompra";
import Link from "next/link";
import { useState } from "react";
const Navbarra = () => {
  const [open, setOpen] = useState(false);
  const opencarts = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className="flex bg-yellow-400 w-full justify-center items-center justify-center">
        {/* bloque 1 */}
        <div className="bg-yellow-400">
          <Link href={"/"}>
            <div className="w-32">
              <img
                src="https://download.logo.wine/logo/MercadoLibre/MercadoLibre-Logo.wine.png"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Link>
          <div className="w-32 text-sm">
            <button>
              <p> buscar tu ubicacion</p>
            </button>
          </div>
        </div>
        {/* bloque 2 */}
        <div className="w-1/2 items-center justify-center">
          <div className="items-center justify-center flex ">
            <input
              type="text"
              placeholder="Buscar"
              className="flex-1 p-2 rounded-l-md focus:outline-none text-black  border-gray-400 border-2"
            />
            <button className="bg-transparent text-black p-2 rounded-r-md border-black border-2">
              Buscar
            </button>
          </div>
          <div className="flex">
            <div className="relative inline-block text-left">
              <div className="px-3">
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <p className="text-black">Categoria</p>
                </button>
              </div>
            </div>
            <div className="px-3">
              <button className="bg-transparent text-black p-2 rounded-r-md">
                <p className="text-black">Ofertas</p>
              </button>
            </div>
            <div className="px-3">
              <button className="bg-transparent text-black p-2 rounded-r-md">
                <p className="text-black">Historias </p>
              </button>
            </div>
            <div className="px-3">
              <button className="bg-transparent text-black p-2 rounded-r-md">
                <p className="text-black">Supermercado </p>
              </button>
            </div>
            <div className="px-3">
              <button className="bg-transparent text-black p-2 rounded-r-md">
                <p className="text-black">Moda</p>
              </button>
            </div>
            <div className="px-3">
              <button className="bg-transparent text-black p-2 rounded-r-md">
                <p className="text-black">Ventas </p>
              </button>
            </div>
            <div className="px-3">
              <button className="bg-transparent text-black p-2 rounded-r-md">
                <p className="text-black">Ayuda/PQR</p>
              </button>
            </div>
          </div>
        </div>
        {/* bloque 3 */}
        <div className="w-96  items-center justify-center pl-5 pt-5">
          <div className="w-80 flex items-center justify-center justify-items-center">
            <button>
              <img
                className=""
                src="https://http2.mlstatic.com/D_NQ_927556-MLA74342696385_022024-OO.webp"
                alt=""
              />
            </button>
          </div>
          <div></div>
          <div className="flex pt-5 justify-items-end">
            <div className="size-16 px-3 ">
              <button onClick={opencarts}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shopping-cart text-black size-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </button>
              <Menudesplegable open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarra;
