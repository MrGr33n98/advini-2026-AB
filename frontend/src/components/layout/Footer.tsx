import Link from "next/link";
import { Scale, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-xl text-white">
              <Scale size={20} />
            </div>
            <span className="font-bold text-xl text-slate-800">LegalTech</span>
          </Link>
          <p className="text-slate-500 mb-6 leading-relaxed">
            A maior plataforma de reviews e comparações de softwares jurídicos do Brasil. 
            Transparência para advogados e visibilidade para vendors.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-primary clay-button"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-primary clay-button"><Linkedin size={18} /></a>
            <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-primary clay-button"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6">Plataforma</h4>
          <ul className="space-y-4 text-slate-500">
            <li><Link href="/products" className="hover:text-primary">Produtos</Link></li>
            <li><Link href="/categories" className="hover:text-primary">Categorias</Link></li>
            <li><Link href="/top-rated" className="hover:text-primary">Melhores Avaliados</Link></li>
            <li><Link href="/vendors" className="hover:text-primary">Para Vendors</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6">Recursos</h4>
          <ul className="space-y-4 text-slate-500">
            <li><Link href="/blog" className="hover:text-primary">Blog & Insights</Link></li>
            <li><Link href="/guide" className="hover:text-primary">Guia de Compra</Link></li>
            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link href="/support" className="hover:text-primary">Suporte</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6">Newsletter</h4>
          <p className="text-slate-500 mb-4">Receba novidades e relatórios trimestrais do mercado.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-white px-4 py-2 border border-slate-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-xl font-bold clay-button">OK</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm gap-4">
        <p>© 2026 LegalTech Review. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <Link href="/terms" className="hover:text-slate-600">Termos</Link>
          <Link href="/privacy" className="hover:text-slate-600">Privacidade</Link>
          <Link href="/cookies" className="hover:text-slate-600">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
