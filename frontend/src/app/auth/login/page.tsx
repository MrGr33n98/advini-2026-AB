'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-2xl border border-white p-12 rounded-[3.5rem] shadow-2xl shadow-blue-500/10"
      >
        <div className="text-center mb-10">
          <div className="text-5xl mb-6">⚖️</div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Bem-vindo de volta!</h1>
          <p className="text-slate-500">Acesse sua conta para gerenciar suas avaliações.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-4">E-mail Profissional</label>
            <input 
              type="email" 
              placeholder="exemplo@advocacia.com"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-3xl outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-4">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-3xl outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-[2rem] shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all">
            Entrar na Plataforma
          </button>
        </form>

        <div className="mt-10 text-center text-sm text-slate-500">
          Ainda não tem conta? <Link href="/auth/register" className="text-blue-600 font-bold hover:underline">Cadastre-se grátis</Link>
        </div>
      </motion.div>
    </div>
  );
}
