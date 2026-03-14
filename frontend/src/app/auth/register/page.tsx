'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-white/70 backdrop-blur-2xl border border-white p-12 rounded-[4rem] shadow-2xl shadow-blue-500/10"
      >
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🖋️</div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">Crie sua Conta</h1>
          <p className="text-slate-500">Junte-se à maior comunidade de review de tecnologia jurídica do país.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <button className="p-6 bg-blue-50 border-2 border-blue-200 rounded-3xl text-left hover:bg-white transition-colors group">
            <div className="text-2xl mb-2">⚖️</div>
            <div className="font-bold text-blue-900">Sou Advogado</div>
            <div className="text-xs text-blue-600/70">Quero avaliar e ganhar selos.</div>
          </button>
          <button className="p-6 bg-slate-50 border-2 border-transparent rounded-3xl text-left hover:bg-white hover:border-slate-200 transition-colors">
            <div className="text-2xl mb-2">🏢</div>
            <div className="font-bold text-slate-800 tracking-tight">Sou Vendor</div>
            <div className="text-xs text-slate-500">Quero dar claim nos meus produtos.</div>
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <label className="block text-sm font-bold text-slate-700 mb-2 ml-4">Nome Completo</label>
               <input type="text" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-3xl outline-none transition-all"/>
             </div>
             <div>
               <label className="block text-sm font-bold text-slate-700 mb-2 ml-4">Nº OAB (Opcional)</label>
               <input type="text" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-3xl outline-none transition-all"/>
             </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-4">E-mail Profissional</label>
            <input type="email" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[2rem] outline-none transition-all"/>
          </div>

          <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-[2.5rem] shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all">
            Começar Agora
          </button>
        </form>

        <div className="mt-10 text-center text-sm text-slate-500">
          Já faz parte? <Link href="/auth/login" className="text-blue-600 font-bold hover:underline">Entre aqui</Link>
        </div>
      </motion.div>
    </div>
  );
}
