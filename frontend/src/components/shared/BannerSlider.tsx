'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerProps {
  placement: 'home_top' | 'home_middle' | 'sidebar' | 'category_page';
}

export default function BannerSlider({ placement }: BannerProps) {
  const [banners, setBanners] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    api.get(`/banners?placement=${placement}`)
      .then(res => setBanners(res.data.banners || []))
      .catch(() => {});
  }, [placement]);

  useEffect(() => {
    if (banners.length > 1) {
      const timer = setInterval(() => {
        setIndex(prev => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [banners]);

  if (banners.length === 0) return null;

  const current = banners[index];

  return (
    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-[3.5rem] bg-slate-900 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
           key={current.id}
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -50 }}
           transition={{ duration: 0.6 }}
           className="absolute inset-0 flex items-center p-12 md:p-24"
           style={{
             backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9), transparent), url(${current.image_url})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}
        >
          <div className="max-w-xl text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">{current.title}</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8">{current.subtitle}</p>
            <a 
              href={current.cta_url}
              className="inline-block px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-blue-50 transition-colors"
            >
              Saiba Mais →
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white w-8' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}
