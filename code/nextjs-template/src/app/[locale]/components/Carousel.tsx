"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const defaultImages = [
  { src: "/images/photo01.jpg", title: "202008Project", date: "2020-08-18", description: "202008ProjectDetail" },
  { src: "/images/photo02.jpg", title: "202009Project", date: "2020-09-11", description: "202009ProjectDetail" },
  { src: "/images/photo06.jpg", title: "202009Project", date: "2020-09-11", description: "202009ProjectDetail" },
  { src: "/images/photo04.jpg", title: "202409Project", date: "2024-09-26", description: "202409ProjectDetail" },
  { src: "/images/photo03.jpeg", title: "202107Project", date: "2021-07-30", description: "202107ProjectDetail" },
  { src: "/images/photo07.jpg", title: "201908Project", date: "2019-08-22", description: "201908ProjectDetail" },
  { src: "/images/photo08.jpg", title: "202011Project", date: "2020-11-01", description: "202011ProjectDetail" },
  { src: "/images/photo09.jpg", title: "202011Project", date: "2020-11-01", description: "202011ProjectDetail" },
  { src: "/images/photo10.jpg", title: "201408Project", date: "2014-08-05", description: "201408ProjectDetail" },
  { src: "/images/photo11.jpg", title: "201910Project", date: "2019-10-03", description: "201910ProjectDetail" },
  { src: "/images/photo12.jpg", title: "201910Project", date: "2019-10-03", description: "201910ProjectDetail" }
];

const Carousel = ({ images = defaultImages, className = "" }: { images?: typeof defaultImages; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations();

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* 圖片容器 */}
      <div className="flex transition-transform duration-500 mb-6" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((item, index) => (
          <div key={item.src} className="relative flex-shrink-0 w-full aspect-[16/9]">
            <Image
              src={item.src}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>

            {/* 圖片內容 */}
            <div className="absolute bottom-4 left-4 right-4 text-white p-4" style={{ transform: 'translateY(-40px)' }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{t(item.title)}</h2>
              <div className="flex items-center space-x-4 text-lg mt-1">
                <span className="font-semibold text-xl">{item.date}</span>
                <span className="flex items-center space-x-1">⭐</span>
              </div>
              <div className="mt-1 border-b border-white/50"></div>
              <p className="text-md sm:text-lg md:text-xl mt-2">{t(item.description)}</p>
            </div>

            {/* 左右箭頭 */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/80 px-3 py-2 rounded"
              style={{ left: '10%' }}>
              &#9665;
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/80 px-3 py-2 rounded"
              style={{ right: '10%' }}>
              &#9655;
            </button>

            {/* 指示器 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3 mt-6" style={{ bottom: 'calc(10px + 2rem)' }}>
              {images.map((_, indicatorIndex) => (
                <button
                  key={indicatorIndex}
                  onClick={() => setCurrentIndex(indicatorIndex)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === indicatorIndex ? "bg-white" : "bg-gray-500"}`}
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
