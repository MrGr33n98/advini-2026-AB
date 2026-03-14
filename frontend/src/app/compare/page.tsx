'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ComparePage() {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Comparador de Performance</h1>
          <p className="text-xl text-slate-600">Selecione até 3 softwares para comparar funcionalidades e preços lado a lado.</p>
        </header>

        <div className="bg-white/70 backdrop-blur-2xl rounded-[3.5rem] border border-white p-12 shadow-2xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-8 px-4 text-slate-400 font-bold uppercase tracking-widest text-xs">Especificação</th>
                <th className="py-8 px-4 text-center">
                  <div className="w-48 h-64 bg-slate-100 rounded-[2rem] border-2 border-dashed border-slate-300 flex items-center justify-center mx-auto">
                    <button className="text-blue-600 font-bold">+ Adicionar</button>
                  </div>
                </th>
                <th className="py-8 px-4 text-center">
                  <div className="w-48 h-64 bg-slate-100 rounded-[2rem] border-2 border-dashed border-slate-300 flex items-center justify-center mx-auto">
                    <button className="text-blue-600 font-bold">+ Adicionar</button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {['Rating Geral', 'Funcionalidades AI', 'Suporte 24/7', 'Cloud Native', 'API Aberta', 'Preço Médio'].map((feat) => (
                <tr key={feat} className="border-b border-slate-50">
                  <td className="py-6 px-4 font-bold text-slate-700">{feat}</td>
                  <td className="py-6 px-4 text-center text-slate-400">—</td>
                  <td className="py-6 px-4 text-center text-slate-400">—</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-20 text-center">
             <div className="text-5xl mb-6">⚙️</div>
             <h3 className="text-2xl font-bold text-slate-800 mb-2">Motor de Comparação em Otimização</h3>
             <p className="text-slate-500 max-w-md mx-auto">Estamos processando os dados técnicos dos últimos lançamentos para liberar a comparação completa.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
