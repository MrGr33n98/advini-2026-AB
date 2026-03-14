'use client';

import { use, useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar detalhes", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!data?.product) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <h1 className="text-2xl font-bold text-slate-800">Software não encontrado.</h1>
    </div>
  );

  const { product, reviews } = data;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Claymorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-2xl border border-white/50 p-10 rounded-[3.5rem] shadow-2xl shadow-blue-900/5 mb-12 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-inner-white">
            ⚖️
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
              {product.category?.name}
            </div>
            <h1 className="text-5xl font-black text-slate-900 mb-4">{product.name}</h1>
            <p className="text-xl text-slate-600 max-w-2xl">{product.description}</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a 
              href={product.website_url} 
              target="_blank"
              className="px-10 py-5 bg-blue-600 text-white font-bold rounded-3xl text-center hover:scale-105 transition-transform shadow-xl shadow-blue-500/30"
            >
              Visitar Website
            </a>
            <button className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-3xl hover:bg-slate-50 transition-colors">
              Fazer Review
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Reviews Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Avaliações de Clientes</h2>
            <div className="space-y-6">
              {reviews?.length > 0 ? (
                reviews.map((review: any) => (
                  <div key={review.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold">
                        {review.user?.email?.[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{review.user?.email}</div>
                        <div className="text-yellow-500 font-bold">{"⭐".repeat(review.rating)}</div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed italic">"{review.comment}"</p>
                  </div>
                ))
              ) : (
                <div className="p-12 bg-slate-100 rounded-[2.5rem] text-center text-slate-500 border-2 border-dashed border-slate-300">
                  Nenhuma avaliação aprovada ainda. Seja o primeiro!
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 bg-indigo-900 text-white p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Sobre o Vendor</h3>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">🏢</div>
                <div>
                  <div className="font-bold text-xl">{product.vendor?.name}</div>
                  <div className="text-indigo-200 text-sm">Parceiro Verificado</div>
                </div>
              </div>
              <p className="text-indigo-100/80 mb-8">Este fornecedor é especialista em soluções de tecnologia jurídica de alta performance.</p>
              <button className="w-full py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-indigo-50 transition-colors">
                Ver Perfil Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
