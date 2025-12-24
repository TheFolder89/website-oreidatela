import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Carlos Silva",
        avatar: "CS",
        rating: 5,
        text: "Salvaram meu iPhone 13! A tela ficou perfeita, nem parece que foi trocada. O atendimento no delivery foi super rápido.",
        location: "Barra"
    },
    {
        id: 2,
        name: "Fernanda Costa",
        avatar: "FC",
        rating: 5,
        text: "Troquei o vidro do Apple Watch e ficou top. Muito mais barato que na autorizada e mantiveram o display original.",
        location: "Horto Florestal"
    },
    {
        id: 3,
        name: "Ricardo Oliveira",
        avatar: "RO",
        rating: 5,
        text: "Profissionais excelentes. Buscam e entregam com segurança. Recomendo de olhos fechados.",
        location: "Pituba"
    },
    {
        id: 4,
        name: "Mariana Santos",
        avatar: "MS",
        rating: 5,
        text: "O atendimento pelo WhatsApp é muito ágil. Tiraram todas as minhas dúvidas e o reparo foi feito na hora.",
        location: "Caminho das Árvores"
    }
];

export default function ReviewsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="absolute top-8 right-8 text-yellow-400 flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                ))}
            </div>

            <div className="min-h-[200px] flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-8">
                    "{reviews[currentIndex].text}"
                </blockquote>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {reviews[currentIndex].avatar}
                    </div>
                    <div>
                        <div className="font-bold text-gray-900">{reviews[currentIndex].name}</div>
                        <div className="text-sm text-gray-500">{reviews[currentIndex].location}</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-2 mt-8">
                <button onClick={prev} className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors" aria-label="Anterior">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={next} className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors" aria-label="Próximo">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
