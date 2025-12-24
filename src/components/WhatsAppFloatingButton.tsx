import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [message, setMessage] = useState("Olá! Gostaria de um orçamento.");

  useEffect(() => {
    // Logic to determine contextual message based on URL
    const path = window.location.pathname;
    
    if (path.includes('conserto-iphone')) {
      setMessage("Olá! Preciso de um orçamento para meu iPhone.");
    } else if (path.includes('conserto-apple-watch')) {
      setMessage("Olá! Quanto custa o reparo do Apple Watch?");
    } else if (path.includes('unidades/')) {
      setMessage("Olá! Vi que vocês atendem no meu bairro. Gostaria de agendar.");
    }
  }, []);

  return (
    <a
      href={`https://wa.me/5571999999999?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
      aria-label="Falar no WhatsApp"
    >
      <div className="bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-full mr-3 whitespace-nowrap hidden md:block">
        <p className="text-sm font-medium text-gray-700">Falar com Técnico</p>
      </div>
      <div className="bg-[#25D366] p-4 rounded-full shadow-xl shadow-green-500/30 flex items-center justify-center animate-pulse-slow">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>
    </a>
  );
}
