import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function LiveIndicators() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const currentMinutes = hour * 60 + minute;

            if (day >= 1 && day <= 5) {
                setIsOpen(currentMinutes >= 9 * 60 && currentMinutes < 18 * 60);
            } else if (day === 6) {
                setIsOpen(currentMinutes >= 9 * 60 && currentMinutes < 12 * 60);
            } else {
                setIsOpen(false);
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed top-32 right-4 z-[60] space-y-2 pointer-events-none hidden sm:flex flex-col items-end max-w-[calc(100vw-2rem)]">
            <div className="bg-brand-gold/90 backdrop-blur-md text-brand-navy px-4 py-2 rounded-full text-[10px] flex items-center gap-2 shadow-2xl border border-white/20 animate-fade-scale">
                <div className="w-2 h-2 bg-brand-navy rounded-full animate-pulse"></div>
                <span className="font-black uppercase tracking-widest text-[9px]">Laboratório Online em Salvador</span>
            </div>
            <div className="bg-white/90 backdrop-blur-md text-brand-navy px-4 py-2 rounded-full text-xs flex items-center gap-2 shadow-lg border border-gray-100 animate-fade-scale animate-delay-200">
                <Zap className="w-3 h-3 text-brand-gold fill-current" />
                <span className="font-bold text-[10px]">Espera média: 15 min</span>
            </div>
        </div>
    );
}
