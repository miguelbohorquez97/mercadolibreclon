import Image from "next/image";
// import Navbarra from "@/components/example";

import Parteuno from "@/components/parteunopagina";
import Partedos from "@/components/partedospagina";
import Menudesplegable from "@/components/carritocompra";
export default function Home() {
  return (
    <>
      <div className="h-80">
        <Parteuno />
      </div>
      <div className="h-full mx-auto p-4  bg-white">
        <Partedos />
      </div>
      
    </>
  );
}
