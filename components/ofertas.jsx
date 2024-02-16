import Image from "next/image";
const Ofertas = () => {
  const images = [
    {
      name: "imagen1",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_679217-MLA74237506594_022024-B.webp",
    },
    {
      name: "imagen2",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_842298-MLA74237506860_022024-B.webp",
    },
    {
      name: "imagen3",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_747809-MLA74344781381_022024-B.webp",
    },
    {
      name: "imagen4",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_747237-MLA74249823578_022024-B.webp",
    },
    {
      name: "imagen5",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_917828-MLA74237439846_022024-B.webp",
    },
    {
      name: "imagen6",
      url: "https://http2.mlstatic.com/D_NQ_NP2X_688888-MLA74382530863_022024-B.webp",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center ">
      {images.map((image,i) => {
        return (
          <div key={i}>
            <button>
              <Image
                src={image.url}
                alt=""
                className="border-2 border-black"
                width={384}
                height={384}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Ofertas;
