
'use client'
import Menudesplegable from "./carritocompra"
import Link from "next/link"
import { useState} from "react"
const Navbarra = () => {
     const [open, setOpen] = useState(false)
    const opencarts = () => {
        setOpen(true)
       
    }
    return (
        <div>
            <div className="flex bg-yellow-400 w-full justify-center items-center justify-center">
                {/* bloque 1 */}
                <div className="bg-yellow-400">
                    <Link href={'/'}>
                    <div className="w-32">
                        <img src="https://download.logo.wine/logo/MercadoLibre/MercadoLibre-Logo.wine.png" alt="" className="w-full h-full object-cover object-center" />
                    </div>
                    </Link>
                    <div className="w-32 text-sm">
                        <button ><p> buscar tu ubicacion</p></button>
                    </div>


                </div>
                {/* bloque 2 */}
                <div className="w-1/2 items-center justify-center">
                    <div className="items-center justify-center flex ">
                        <input type="text" placeholder="Buscar" className="flex-1 p-2 rounded-l-md focus:outline-none text-black  border-gray-400 border-2" />
                        <button className="bg-transparent text-black p-2 rounded-r-md border-black border-2">Buscar</button>
                    </div>
                    <div className="flex">
                        <div className="relative inline-block text-left">
                            <div className="px-3">
                                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <p className="text-black">Categoria</p>
                                </button>
                            </div>
                        </div>
                        <div className="px-3">
                            <button className="bg-transparent text-black p-2 rounded-r-md"><p className="text-black">Ofertas</p></button>
                        </div>
                        <div className="px-3">
                            <button className="bg-transparent text-black p-2 rounded-r-md"><p className="text-black">Historias </p></button>
                        </div>
                        <div className="px-3">
                            <button className="bg-transparent text-black p-2 rounded-r-md"><p className="text-black">Supermercado </p></button>
                        </div>
                        <div className="px-3">
                            <button className="bg-transparent text-black p-2 rounded-r-md"><p className="text-black">Moda</p></button>
                        </div>
                        <div className="px-3">
                            <button className="bg-transparent text-black p-2 rounded-r-md"><p className="text-black">Ventas </p></button>
                        </div>
                        <div className="px-3">
                            <button className="bg-transparent text-black p-2 rounded-r-md"><p className="text-black">Ayuda/PQR</p></button>
                        </div>
                    </div>

                </div>
                {/* bloque 3 */}
                <div className="w-96  items-center justify-center pl-5 pt-5">
                    <div className="w-80 flex items-center justify-center justify-items-center">
                        <button><img className="" src="https://http2.mlstatic.com/D_NQ_927556-MLA74342696385_022024-OO.webp" alt="" /></button>
                    </div>
                    <div>
                    </div>
                    <div className="flex pt-5 justify-items-end">
                        
                        <div className="size-16 px-3 ">
                            <button onClick={opencarts}><img src="https://th.bing.com/th/id/R.48f272ea6a7dc70b29976b4a33c84045?rik=UU%2fjXuajSJZkfQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fCart-PNG-File.png&ehk=Psw9BEANCO6yFbmWIqNn2QSkR97Y0%2bkVv0ySUfGDCRU%3d&risl=&pid=ImgRaw&r=0" alt="" className="w-full h-full object-cove" /></button>
                            <Menudesplegable open ={open} setOpen={setOpen}/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbarra