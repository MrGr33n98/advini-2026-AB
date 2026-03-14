'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/profile')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-indigo-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-black mb-4">Olá, {data?.user?.email?.split('@')[0]}</h1>
              <p className="text-indigo-200 text-lg mb-8">Você já contribuiu com {data?.stats?.total_reviews} avaliações para a comunidade.</p>
              <div className="flex gap-4">
                 <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-slate-50 transition-colors">Nova Review</button>
                 <button className="px-8 py-4 bg-indigo-800 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-colors">Editar Perfil</button>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-10 text-9xl">⚖️</div>
          </div>

          <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col justify-center text-center">
             <div className="text-blue-600 text-5xl font-black mb-2">{data?.stats?.earned_badges || 0}</div>
             <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Selos Conquistados</div>
             <div className="mt-8 flex justify-center gap-2">
                {data?.badges?.map((badge: any, i: number) => (
                  <div key={i} title={badge.description} className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl shadow-lg shadow-yellow-200">
                    {badge.icon || '🏆'}
                  </div>
                )) || <p className="text-xs text-slate-300">Nenhum selo ainda.</p>}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Recent Reviews Table */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Minhas Avaliações</h2>
            <div className="space-y-4">
              {data?.reviews?.length > 0 ? (
                data.reviews.map((review: any) => (
                  <div key={review.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-50 shadow-sm flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl">📱</div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900">{review.product_name || "Software"}</div>
                      <div className="text-xs text-slate-400">{new Date(review.created_at).toLocaleDateString()}</div>
                    </div>
                    <div className="text-yellow-500 font-bold">{"⭐".repeat(review.rating)}</div>
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${review.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {review.status}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-10 bg-white rounded-[2.5rem] text-center text-slate-400 border border-slate-100">
                   Você ainda não escreveu nenhuma review.
                </div>
              )}
            </div>
          </div>

          {/* Gamification Sidebar */}
          <div>
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Explore Selos</h3>
              <div className="space-y-6 text-sm">
                 <div className="flex items-center gap-4 grayscale opacity-50">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-xl">✍️</div>
                    <div>
                        <div className="font-bold">Primeira de Muitas</div>
                        <div className="text-slate-400 text-xs">Escreva 1 review completa.</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 grayscale opacity-50">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-xl">🔬</div>
                    <div>
                        <div className="font-bold">Expert em IA</div>
                        <div className="text-slate-400 text-xs">Avalie 3 ferramentas de IA Gen.</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
