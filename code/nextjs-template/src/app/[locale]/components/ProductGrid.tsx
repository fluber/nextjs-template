import React from "react";
import Image from "next/image";


const images = [
  { src: "/images/TMS-Logo-1.png", title: "TMS Light", href: "https://www.tms-lite.com/" },
  { src: "/images/ids-logo.png", title: "IDS", href: "https://en.ids-imaging.com/" },
  { src: "/images/BASLER_Logo+Tag_rgb.png", title: "Basler", href: "https://www.baslerweb.com/zh-tw/" },
  { src: "/images/OMRON_Logo.png", title: "OMRON", href: "https://sentech.co.jp/cn/products/GigE/index.html" },
  { src: "/images/LOGO-IMEC_black.png", title: "imec", href: "https://www.imechyperspectral.com/en" },
  { src: "/images/ensenso_logo.png", title: "ensenso", href: "https://www.optonic.com/en/" },
  { src: "/images/Toshiba_logo.png", title: "Toshiba", href: "https://www.toshiba-teli.co.jp/en/products/industrial-camera/index.htm" },
  { src: "/images/opt-machine-vision-seeklogo.png", title: "OPT Vision", href: "https://en.optmv.com/product/index1.html" },
  { src: "/images/Mvtec_logo.png", title: "Mvtec", href: "https://www.mvtec.com/products/halcon" },
  { src: "/images/pixoel.png", title: "Pixoel", href: "https://www.pixoel.com.tw/" },
  { src: "/images/photon-tech.png", title: "Photon Tech", href: "https://www.photon-tech.com.tw/zh/home" },
  { src: "/images/Nevis.png", title: "Nevis", href: "https://www.nevis.com.tw/" }
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-6 gap-6 max-w-screen-lg mx-auto">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full aspect-[4/3] flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
        >
          {
            (
              <Image
                src={image.src ?? "/DefaultImage.png"} // 確保不為 undefined
                alt={image.title}
                width={400}
                height={200}
                className="object-contain"
                priority={index < 3}
              />
            )}
        </a>
      ))}
    </div>
  );
};

export default ProductGrid;
