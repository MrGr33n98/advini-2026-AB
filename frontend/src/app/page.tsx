import Hero from "@/components/home/Hero";
import { ArrowRight, Box, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore por Categorias</h2>
              <p className="text-slate-500">Encontre ferramentas específicas para cada necessidade do seu escritório.</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Ver todas <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard icon={<Box />} title="Gestão Jurídica" count={42} color="bg-blue-500" />
            <CategoryCard icon={<Cpu />} title="IA & Automação" count={18} color="bg-purple-500" />
            <CategoryCard icon={<ShieldCheck />} title="Privacy & GRC" count={12} color="bg-emerald-500" />
            <CategoryCard icon={<Zap />} title="Billing & Finanças" count={25} color="bg-amber-500" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Produtos em Destaque</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Os softwares mais bem avaliados pela comunidade jurídica este mês.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group p-6 clay-card hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <Box size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">LegalManager Pro</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                Sistema completo de gestão de processos para escritórios de médio e grande porte.
              </p>
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <ArrowRight key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs font-bold text-slate-400 ml-2">(124 avaliações)</span>
              </div>
              <button className="w-full py-3 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                Ver detalhes
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function CategoryCard({ icon, title, count, color }: any) {
  return (
    <div className="p-8 clay-card hover:bg-slate-50 transition-colors cursor-pointer group">
      <div className={`w-12 h-12 ${color} text-white rounded-xl flex items-center justify-center mb-6 clay-button active:scale-100 group-hover:rotate-6 transition-transform`}>
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-slate-400 text-sm">{count} softwares</p>
    </div>
  );
}
