"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Parteuno = () => {
  const images = [
    {
      name: "imagen1",
      url: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1706825687317-hogar-landing-desktop1.jpg",
    },
    {
      name: "imagen2",
      url: " https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1706804560582-cuponera-landing-desktop.jpg",
    },
    {
      name: "imagen3",
      url: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1706825613548-tecnologia-landing-desktop3.jpg",
    },
    {
      name: "imagen4",
      url: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1706565951521-deporte2x.png",
    },
    {
      name: "imagen5",
      url: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1706733985035-full-landing-desktop2.jpg ",
    },
    {
      name: "imagen6",
      url: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1706733661719-moda-landing--dektop.jpg",
    },
  ];
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
                <Image
                  src= {image.url}
                  alt=""
                  width={1490}
                  className=" object-contain"
                  height={200}
                />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Parteuno;
