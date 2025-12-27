import React, { useState, useEffect } from 'react';
import { Users, CheckCircle, Clock } from 'lucide-react';

export default function LiveStats() {
    const [repairCount, setRepairCount] = useState(4897);
    const [activeTechnicians, setActiveTechnicians] = useState(3);
    const [currentTime, setCurrentTime] = useState<string | null>(null);

    useEffect(() => {
        // Set time only on client to avoid hydration mismatch
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

        const interval = setInterval(() => {
            if (Math.random() > 0.95) {
                setRepairCount(prev => prev + 1);
            }
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 bg-brand-navy/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-navy transition-colors">
                    <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-brand-navy group-hover:text-white" />
                </div>
                <div>
                    <div className="text-2xl lg:text-3xl font-black text-brand-navy leading-none mb-2 tracking-tighter">
                        {repairCount.toLocaleString()}+
                    </div>
                    <div className="text-[9px] lg:text-[10px] text-gray-400 font-black uppercase tracking-widest leading-tight">Aparelhos Salvador</div>
                </div>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors relative">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-green-500 group-hover:text-white" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
                </div>
                <div>
                    <div className="text-2xl lg:text-3xl font-black text-brand-navy leading-none mb-2 tracking-tighter">
                        {activeTechnicians}
                    </div>
                    <div className="text-[9px] lg:text-[10px] text-gray-400 font-black uppercase tracking-widest leading-tight">Técnicos em Bancada</div>
                </div>
            </div>

            <div className="col-span-2 md:col-span-1 bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-row items-center gap-4 lg:gap-5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 bg-brand-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-brand-gold group-hover:text-brand-navy" />
                </div>
                <div>
                    <div className="text-2xl lg:text-3xl font-black text-brand-navy leading-none mb-2 tracking-tighter uppercase">
                        {currentTime || '--:--'}
                    </div>
                    <div className="text-[9px] lg:text-[10px] text-gray-400 font-black uppercase tracking-widest leading-tight">Loja Aberta</div>
                </div>
            </div>
        </div>
    );
}
