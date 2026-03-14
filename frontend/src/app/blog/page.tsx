'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscando conteúdos do tipo 'article' ou 'guide'
    api.get('/contents')
      .then(res => {
        setPosts(res.data.contents || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tight">LegalTech <span className="text-blue-600">Insights</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">
            Tendências, guias e análises profundas sobre o futuro do direito e tecnologia.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            [1, 2, 3].map(i => <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-[3rem]" />)
          ) : (
            posts.map((post: any) => (
              <motion.article 
                key={post.id}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col"
              >
                <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                   {post.content_type === 'article' ? '📝' : '📘'}
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase">
                      {post.content_type}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-8 leading-relaxed">
                    {post.body?.substring(0, 150)}...
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-slate-400 text-xs">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <button className="text-blue-600 font-bold text-sm hover:underline">
                      Ler Artigo →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>

        {!loading && posts.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[4rem] border border-slate-100">
            <div className="text-5xl mb-6">🏜️</div>
            <p className="text-slate-500 font-medium">O blog está sendo preparado. Volte em breve!</p>
          </div>
        )}
      </div>
    </div>
  );
}
