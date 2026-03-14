"use client";

import { Search, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-6 clay-button cursor-default">
            <span className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="text-sm font-medium text-slate-600">+10.000 Advogados confiam</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Descubra o <span className="text-primary italic">Software Jurídico</span> ideal para seu escritório.
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
            Compare funcionalidades, preços e veja avaliações reais de outros profissionais do direito para tomar a melhor decisão tecnológica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Ex: Software de Gestão, CRM, IA..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/10 tracking-wide"
              />
            </div>
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl clay-button text-lg flex items-center justify-center gap-2">
              Pesquisar
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Conectado com:</span>
            <div className="flex items-center gap-8 opacity-40 grayscale contrast-125">
              <span className="font-bold text-lg">OAB</span>
              <span className="font-bold text-lg">LEGALTECH BRAZIL</span>
              <span className="font-bold text-lg">ASPI</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative lg:block hidden"
        >
          <div className="relative z-10 p-4 clay-card floating">
            <Image 
              src="/assets/hero-bg.png" 
              alt="Plataforma Preview" 
              width={600} 
              height={400} 
              className="rounded-xl shadow-2xl border border-white/50"
            />
          </div>
          {/* Decorative Clay elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/20 rounded-3xl blur-md -z-10 animate-pulse" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
