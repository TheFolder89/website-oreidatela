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

    const isStoreOpen = () => {
        const now = new Date();
        const day = now.getDay(); // 0 (Sun) to 6 (Sat)
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentTimeInMinutes = hour * 60 + minute;

        // Monday to Friday: 09:00 to 18:00
        if (day >= 1 && day <= 5) {
            return currentTimeInMinutes >= 9 * 60 && currentTimeInMinutes < 18 * 60;
        }
        // Saturday: 09:00 to 12:00
        if (day === 6) {
            return currentTimeInMinutes >= 9 * 60 && currentTimeInMinutes < 12 * 60;
        }
        // Sunday: Closed
        return false;
    };

    const isOpen = isStoreOpen();

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
                    {isOpen && <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>}
                </div>
                <div>
                    <div className="text-2xl lg:text-3xl font-black text-brand-navy leading-none mb-2 tracking-tighter">
                        {isOpen ? activeTechnicians : 0}
                    </div>
                    <div className="text-[9px] lg:text-[10px] text-gray-400 font-black uppercase tracking-widest leading-tight">Especialistas em Bancada</div>
                </div>
            </div>

            <div className="col-span-2 md:col-span-1 bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-row items-center gap-4 lg:gap-5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className={`w-12 h-12 lg:w-16 lg:h-16 shrink-0 rounded-2xl flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-gold/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy' : 'bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white'}`}>
                    <Clock className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <div>
                    <div className="text-2xl lg:text-3xl font-black text-brand-navy leading-none mb-2 tracking-tighter uppercase">
                        {currentTime || '--:--'}
                    </div>
                    <div className={`text-[9px] lg:text-[10px] font-black uppercase tracking-widest leading-tight ${isOpen ? 'text-gray-400' : 'text-red-500'}`}>
                        {isOpen ? 'Loja Aberta' : 'Loja Fechada'}
                    </div>
                </div>
            </div>
        </div>
    );
}
