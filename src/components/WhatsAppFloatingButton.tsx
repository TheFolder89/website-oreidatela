import React, { useEffect, useState } from 'react';
import { MessageCircle, Zap } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [message, setMessage] = useState("Olá! Gostaria de um orçamento.");
  const [tooltip, setTooltip] = useState("Falar com Especialista");

  useEffect(() => {
    // Logic to determine contextual message based on URL
    const path = window.location.pathname;

    if (path.includes('pecas-iphone')) {
      setMessage("Olá! Preciso de um orçamento urgente para meu iPhone.");
      setTooltip("Orçamento iPhone Agora");
    } else if (path.includes('pecas-apple-watch')) {
      setMessage("Olá! Quanto custa a troca no Apple Watch?");
      setTooltip("Dúvidas Apple Watch");
    } else if (path.includes('unidades/')) {
      setMessage("Olá! Vi que vocês atendem no meu bairro. Gostaria de agendar uma coleta.");
      setTooltip("Agendar Coleta no Bairro");
    } else if (path.includes('status-os')) {
      setMessage("Olá! Gostaria de falar sobre o status da minha Ordem de Serviço.");
      setTooltip("Falar com Laboratório");
    }
  }, []);

  return (
    <a
      href={`https://wa.me/557194142627?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-50 group flex items-center gap-3 transition-all duration-500 hover:-translate-y-2 active:scale-90"
      aria-label="Falar no WhatsApp"
    >
      {/* Dynamic Tooltip */}
      <div className="bg-brand-navy text-white px-5 py-2.5 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-full mr-4 whitespace-nowrap hidden md:flex items-center gap-2 border border-white/10 translate-x-4 group-hover:translate-x-0">
        <Zap className="w-3 h-3 text-brand-gold fill-current" />
        <p className="text-[10px] font-black uppercase tracking-widest">{tooltip}</p>
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-navy rotate-45 border-r border-t border-white/10"></div>
      </div>

      <div className="relative">
        {/* Ring Animations */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <div className="absolute -inset-2 bg-brand-gold rounded-full animate-pulse opacity-10"></div>

        <div className="relative bg-[#25D366] p-5 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
          <MessageCircle className="w-9 h-9 text-white fill-white" />

          {/* Notification Dot */}
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 border-2 border-[#25D366] rounded-full animate-bounce shadow-xl"></span>
        </div>
      </div>
    </a>
  );
}
