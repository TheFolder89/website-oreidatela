import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

const cases = [
    {
        id: 1,
        device: "iPhone 13 Pro",
        problem: "Tela Estilhaçada",
        before: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800&auto=format&fit=crop&fm=webp", // Simulated broken screen
        after: "https://images.unsplash.com/photo-1556656793-062ff9878258?q=80&w=800&auto=format&fit=crop&fm=webp", // Fixed screen
        description: "Troca de vidro e display mantendo o Face ID original.",
        time: "45 min"
    },
    {
        id: 2,
        device: "Apple Watch Series 8",
        problem: "Vidro Quebrado",
        before: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1b?q=80&w=800&auto=format&fit=crop&fm=webp",
        after: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop&fm=webp",
        description: "Recondicionamento de vidro mantendo o display original.",
        time: "2 horas"
    }
];

export default function BeforeAfterGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAfter, setShowAfter] = useState(false);

    const next = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="md:flex">
                <div className="md:w-1/2 relative bg-gray-900 aspect-square md:aspect-auto">
                    <img
                        src={showAfter ? cases[currentIndex].after : cases[currentIndex].before}
                        alt="Reparo"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        <button
                            onClick={() => setShowAfter(false)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${!showAfter ? 'bg-brand-blue text-white shadow-lg' : 'bg-white/20 text-white backdrop-blur-md'}`}
                        >
                            ANTES
                        </button>
                        <button
                            onClick={() => setShowAfter(true)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${showAfter ? 'bg-green-500 text-white shadow-lg' : 'bg-white/20 text-white backdrop-blur-md'}`}
                        >
                            DEPOIS
                        </button>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center gap-2 text-brand-blue mb-2">
                            <Smartphone className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-wider text-sm">{cases[currentIndex].device}</span>
                        </div>
                        <p className="text-white font-bold text-xl">{cases[currentIndex].problem}</p>
                    </div>
                </div>

                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gray-50">
                    <div className="mb-8">
                        <h4 className="text-gray-900 font-bold text-2xl mb-4">Caso de Sucesso</h4>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {cases[currentIndex].description}
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <span className="block text-brand-blue font-black text-2xl">{cases[currentIndex].time}</span>
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Tempo de Reparo</span>
                            </div>
                            <div className="w-px h-10 bg-gray-200"></div>
                            <div className="text-center">
                                <span className="block text-green-500 font-black text-2xl">100%</span>
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Originalidade</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={prev} className="p-4 bg-white rounded-full border border-gray-100 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={next} className="p-4 bg-white rounded-full border border-gray-100 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm flex-1 font-bold">
                            Ver Próximo Caso
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
