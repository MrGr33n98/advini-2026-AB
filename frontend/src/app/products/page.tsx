'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/products')
      .then(res => {
        setProducts(res.data.products || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar produtos", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 py-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Softwares Jurídicos</h1>
          <p className="text-slate-600">Explore e compare as melhores ferramentas para seu escritório.</p>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-slate-200 animate-pulse rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product: any) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm line-clamp-2 mb-6">
                  {product.description || "Sem descrição disponível."}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                    {product.category?.name || 'Geral'}
                  </span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                    Detalhes
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-slate-200">
            <p className="text-slate-500">Nenhum software aprovado encontrado no momento.</p>
          </div>
        )}
      </main>
    </div>
  );
}
