import Image from "next/image";
const Tecnologia = () => {
  const images = [
    {
      name: "imagen1",
      url: "https://http2.mlstatic.com/D_Q_NP_2X_829985-MLA74245511697_012024-G.webp",
    },
    {
      name: "imagen2",
      url: "https://http2.mlstatic.com/D_Q_NP_2X_937984-MLA74245511797_012024-G.webp",
    },
    {
      name: "imagen3",
      url: "https://http2.mlstatic.com/D_Q_NP_2X_689253-MLA74135132318_012024-G.webp",
    },
    {
      name: "imagen4",
      url: "https://http2.mlstatic.com/D_Q_NP_2X_974740-MLA74245511943_012024-G.webp",
    },
    {
      name: "imagen5",
      url: " https://http2.mlstatic.com/D_Q_NP_2X_610970-MLA74135201688_012024-G.webp",
    },
    {
      name: "imagen6",
      url: "https://http2.mlstatic.com/D_Q_NP_2X_754566-MLA74134984184_012024-G.webp",
    },
    {
      name: "imagen7",
      url: "https://http2.mlstatic.com/D_Q_NP_2X_715278-MLA74135201892_012024-G.webp",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className=" p-3 ">
        {images.map((image,i) => {

          return (
            <button key={i}>
              <Image
                src={image.url}
                alt=""
                className=" justify-center items-center mx-auto"
                width={96}
                height={96}
              />
              <p className="text-black">CELULARES</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tecnologia;
