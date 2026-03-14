"use client";

import Link from "next/link";
import { Search, Scale, Menu, UserCircle } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 clay-card">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl text-white clay-button active:scale-100 group-hover:rotate-12 transition-transform">
            <Scale size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">
            Legal<span className="text-primary">Tech</span> Review
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <Link href="/products" className="hover:text-primary transition-colors">Produtos</Link>
          <Link href="/categories" className="hover:text-primary transition-colors">Categorias</Link>
          <Link href="/compare" className="hover:text-primary transition-colors">Comparar</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:text-primary clay-button md:block hidden">
            <Search size={20} />
          </button>
          <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold clay-button">
            <UserCircle size={20} />
            <span>Entrar</span>
          </Link>
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
