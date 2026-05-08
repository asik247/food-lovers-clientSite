import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../../assets/bannera.jpg';
import banner2 from '../../assets/bannerb.jpg';
import banner3 from '../../assets/bannerc.jpg';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const slides = [
  {
    id: 1,
    image: banner1,
    eyebrow: 'Best Seller',
    title: 'Smash\nBurgers',
    sub: 'Wagyu beef · Aged cheddar · Secret sauce',
    cta: 'Order Now',
    ghost: 'View Menu',
    price: '$8.99',
    accent: '#F97316',
    dark: 'rgba(15,5,0,0.72)',
  },
  {
    id: 2,
    image: banner2,
    eyebrow: "Chef's Special",
    title: 'Wood-Fired\nPizza',
    sub: 'Neapolitan · 900 °F stone oven · Fresh basil',
    cta: 'Order Now',
    ghost: 'See Toppings',
    price: '$12.99',
    accent: '#818CF8',
    dark: 'rgba(4,4,18,0.72)',
  },
  {
    id: 3,
    image: banner3,
    eyebrow: "Today's Pick",
    title: 'Crispy\nChicken',
    sub: 'Korean double-fry · Honey gochujang · Pickles',
    cta: 'Order Now',
    ghost: 'Explore Menu',
    price: '$10.99',
    accent: '#34D399',
    dark: 'rgba(0,12,6,0.72)',
  },
  
];

const Home = () => (
  <section style={{ position: 'relative', fontFamily: 'system-ui, sans-serif' }}>

    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="hero-swiper"
    >
      {slides.map((s) => (
        <SwiperSlide key={s.id}>
          <div style={{ position: 'relative', height: '420px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

            {/* Image */}
            <img
              src={s.image}
              alt={s.title}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                transform: 'scale(1.04)',
              }}
            />

            {/* Overlays */}
            {/* 1. Cinematic left gradient */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(100deg, ${s.dark} 0%, ${s.dark.replace('0.72', '0.55')} 45%, transparent 80%)`,
            }} />
            {/* 2. Bottom vignette — hides any watermark */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 40%)',
            }} />
            {/* 3. Top vignette */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 35%)',
            }} />
            {/* 4. Accent color blush — subtle tint */}
            <div style={{
              position: 'absolute', inset: 0,
              background: s.accent,
              opacity: 0.08,
              mixBlendMode: 'color',
            }} />

            {/* Content */}
            <div style={{
              position: 'relative', zIndex: 2,
              padding: '0 48px',
              maxWidth: '520px',
            }}>

              {/* Eyebrow */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                marginBottom: '12px',
                padding: '3px 10px',
                borderRadius: '20px',
                background: `${s.accent}22`,
                border: `1px solid ${s.accent}55`,
                backdropFilter: 'blur(8px)',
              }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: s.accent, display: 'inline-block',
                }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: s.accent, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {s.eyebrow}
                </span>
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: 'clamp(40px, 6vw, 62px)',
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: '-2px',
                color: '#fff',
                whiteSpace: 'pre-line',
                marginBottom: '10px',
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              }}>
                {s.title}
              </h1>

              {/* Sub */}
              <p style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '18px',
                letterSpacing: '0.01em',
              }}>
                {s.sub}
              </p>

              {/* Buttons row */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  border: 'none',
                  background: s.accent,
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  boxShadow: `0 4px 18px ${s.accent}55`,
                  transition: 'opacity 0.15s, transform 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  {s.cta}
                </button>

                <button style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.22)',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'background 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  {s.ghost}
                </button>

                <span style={{
                  marginLeft: '4px',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.35)',
                  fontWeight: 500,
                }}>
                  From <strong style={{ color: s.accent }}>{s.price}</strong>
                </span>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <style>{`
      .hero-swiper { border-radius: 0; }

      .hero-swiper .swiper-button-next,
      .hero-swiper .swiper-button-prev {
        color: #fff;
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.15);
        width: 36px;
        height: 36px;
        border-radius: 8px;
        transition: background 0.2s;
      }
      .hero-swiper .swiper-button-next:hover,
      .hero-swiper .swiper-button-prev:hover {
        background: rgba(255,255,255,0.18);
      }
      .hero-swiper .swiper-button-next::after,
      .hero-swiper .swiper-button-prev::after {
        font-size: 12px;
        font-weight: 800;
      }
      .hero-swiper .swiper-pagination {
        bottom: 14px;
      }
      .hero-swiper .swiper-pagination-bullet {
        background: rgba(255,255,255,0.4);
        opacity: 1;
        width: 6px;
        height: 6px;
        transition: all 0.3s;
      }
      .hero-swiper .swiper-pagination-bullet-active {
        background: #fff;
        width: 20px;
        border-radius: 3px;
      }
    `}</style>

  </section>
);

export default Home;