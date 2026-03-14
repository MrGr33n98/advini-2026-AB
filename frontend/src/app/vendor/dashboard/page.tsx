'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';

export default function VendorDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/vendor/dashboard')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Vendor Header */}
        <div className="flex items-center justify-between mb-12">
           <div>
             <h1 className="text-4xl font-black text-slate-900 mb-2">Painel do Parceiro</h1>
             <p className="text-slate-500 font-medium">Bem-vindo, <span className="text-indigo-600">{data?.vendor?.name}</span>. Gerencie seus produtos e leads.</p>
           </div>
           <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-colors shadow-sm">
             Configurações da Empresa
           </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Total de Leads</div>
              <div className="text-4xl font-black text-indigo-600">{data?.stats?.total_leads || 0}</div>
           </div>
           <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Produtos Públicos</div>
              <div className="text-4xl font-black text-slate-900">{data?.stats?.total_products || 0}</div>
           </div>
           <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Total de Reviews</div>
              <div className="text-4xl font-black text-green-600">{data?.stats?.total_reviews || 0}</div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Leads Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 overflow-hidden">
              <div className="p-10 border-b border-slate-50 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Leads Gerados (Interessados)</h2>
                <button className="text-indigo-600 font-bold text-sm">Exportar CSV</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-10 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest">Advogado</th>
                      <th className="px-10 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest">Produto</th>
                      <th className="px-10 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest">Data</th>
                      <th className="px-10 py-5 text-slate-400 text-xs font-bold uppercase tracking-widest">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.leads?.length > 0 ? (
                      data.leads.map((lead: any) => (
                        <tr key={lead.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                          <td className="px-10 py-6 font-bold text-slate-800">{lead.lawyer_email}</td>
                          <td className="px-10 py-6 text-slate-600">{lead.product_name}</td>
                          <td className="px-10 py-6 text-slate-400 text-sm">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-10 py-6 text-indigo-600 font-bold text-sm cursor-pointer hover:underline">
                            Ver Perfil
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-10 py-20 text-center text-slate-400 italic">
                          Ainda não foram gerados leads para seus produtos.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Product Status Cards */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 px-2">Meus Produtos</h2>
            {data?.products?.map((product: any) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-xl">
                    📁
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${product.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {product.status}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                  <span>⭐ {product.reviews_count} Avaliações</span>
                </div>
              </motion.div>
            ))}
            <button className="w-full py-5 border-2 border-dashed border-slate-200 text-slate-400 font-bold rounded-[2.5rem] hover:bg-white hover:border-indigo-300 hover:text-indigo-600 transition-all">
              + Cadastrar Novo Software
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
