import Image from "next/image";
const Ofertasdos = () => {
  const images = [
    {
      name: "imagen1",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_915615-MLA74115599658_012024-B.webp",
    },
    {
      name: "imagen2",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_738844-MLA74115599718_012024-B.webp",
    },
    {
      name: "imagen3",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_610039-MLA74115599770_012024-B.webp",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        {images.map((image, i) => {
          return (
            <div key={i}>
              <button >
                <Image
                  src={image.url}
                  alt=""
                  className="p-2"
                  width={384}
                  height={384}
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex ">
        <div>
          <button className="flex flex-wrap justify-center">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_998707-MLA74164347684_012024-OO.webp"
              alt=""
              className="w-5/6"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Ofertasdos;
