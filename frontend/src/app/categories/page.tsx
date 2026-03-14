'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/categories')
      .then(res => {
        setCategories(res.data.categories || res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Categorias de Inovação</h1>
          <p className="text-xl text-slate-600">Navegue pelos ecossistemas de tecnologia jurídica mais modernos do país.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            [1,2,3,4].map(i => <div key={i} className="h-40 bg-slate-200 animate-pulse rounded-[2.5rem]" />)
          ) : (
            categories.map((cat: any) => (
              <motion.div
                key={cat.id}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    📂
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{cat.name}</h3>
                  <p className="text-slate-500 text-sm">{cat.description || "Explore soluções para este setor."}</p>
                </div>
                <div className="mt-8 text-blue-600 font-bold flex items-center gap-2 text-sm">
                  Ver Softwares <span>→</span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
