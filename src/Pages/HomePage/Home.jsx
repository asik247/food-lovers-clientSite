import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import banner1 from '../../assets/bannera.jpg';
import banner2 from '../../assets/bannerb.jpg';
import banner3 from '../../assets/bannerc.jpg';
import useInstance from '../../Hooks/useInstance';
import LatestProduct from '../LatestProduct/LatestProduct';

const slides = [
  {
    id: 1,
    image: banner1,
    title: 'Smash\nBurgers',
    sub: 'Wagyu beef · Aged cheddar · Secret sauce',
    cta: 'Order Now',
    accent: 'bg-orange-500',
    dark: 'from-black/70',
  },
  {
    id: 2,
    image: banner2,
    title: 'Wood-Fired\nPizza',
    sub: 'Neapolitan · 900 °F stone oven · Fresh basil',
    cta: 'Order Now',
    accent: 'bg-indigo-500',
    dark: 'from-black/70',
  },
  {
    id: 3,
    image: banner3,
    title: 'Crispy\nChicken',
    sub: 'Korean double-fry · Honey gochujang · Pickles',
    cta: 'Order Now',
    accent: 'bg-green-500',
    dark: 'from-black/70',
  },
];

const Home = () => {
  const instance = useInstance();
  const [data, setData] = useState([]);

  useEffect(() => {
    instance.get('/products')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [instance]);

  return (
    <section className="bg-gray-50">

      {/* ================= HERO ================= */}
      <div className="w-full">

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="group"
        >

          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="relative h-[280px] md:h-[360px] flex items-center">

                {/* IMAGE */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 px-6 md:px-12 max-w-lg">

                  <h1 className="text-white text-3xl md:text-5xl font-black leading-tight whitespace-pre-line">
                    {s.title}
                  </h1>

                  <p className="text-gray-200 text-sm mt-2">
                    {s.sub}
                  </p>

                  <button className={`${s.accent} mt-4 px-4 py-2 rounded-md text-white text-sm font-semibold transition hover:scale-105`}>
                    {s.cta}
                  </button>

                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
          Latest Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((singleData) => (
            <LatestProduct
              key={singleData._id}
              singleData={singleData}
            />
          ))}

        </div>

      </div>

      {/* ================= SWIPER BUTTON STYLE (TAILWIND ONLY) ================= */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          width: 36px !important;
          height: 36px !important;
          background: rgba(255,255,255,0.15);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255,255,255,0.25);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 12px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5) !important;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
          width: 18px !important;
          border-radius: 4px !important;
        }
      `}</style>

    </section>
  );
};

export default Home;