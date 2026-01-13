import React, { useState } from 'react';
import { Smartphone, Watch, ArrowRight, CheckCircle, ChevronRight, Calculator, Zap } from 'lucide-react';
import modelsData from '../data/models.json';

const devices = [
    { id: 'iphone', name: 'iPhone', icon: Smartphone },
    { id: 'apple-watch', name: 'Apple Watch', icon: Watch },
    { id: 'samsung', name: 'Samsung', icon: Smartphone },
    { id: 'xiaomi', name: 'Xiaomi', icon: Smartphone },
];

const problems = [
    { id: 'tela', name: 'Tela Quebrada' },
    { id: 'display', name: 'Display/Touch Falhando' },
    { id: 'bateria', name: 'Bateria Ruim' },
    { id: 'outros', name: 'Outro Defeito' },
];

export default function BudgetWizard() {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({ device: '', model: '', problem: '' });
    const [isCalculating, setIsCalculating] = useState(false);

    const haptic = (type: 'success' | 'click' = 'click') => {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(type === 'success' ? 100 : 30);
        }
    };

    const handleNext = async () => {
        haptic();
        if (step === 3) {
            setIsCalculating(true);
            await new Promise(r => setTimeout(r, 1500));
            setIsCalculating(false);
            haptic('success');
        }
        setStep(step + 1);
    };

    const getPriceEstimate = () => {
        if (selection.device === 'apple-watch') return 'R$ 499';
        if (selection.device === 'iphone' && selection.problem === 'Tela Quebrada') return 'R$ 299';
        return 'Sob Consulta';
    };

    const handleWhatsAppRedirect = () => {
        const text = `Olá! Gostaria de um orçamento para *${selection.device.toUpperCase()} ${selection.model}* com problema de *${selection.problem}*. Vi a estimativa de ${getPriceEstimate()} no site.`;
        window.open(`https://wa.me/557194142627?text=${encodeURIComponent(text)}`, '_blank');
    };

    const getModelsForDevice = () => {
        if (selection.device && selection.device in modelsData) {
            return modelsData[selection.device as keyof typeof modelsData] || [];
        }
        return [];
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 max-w-2xl mx-auto relative z-20 overflow-hidden border border-gray-100 animate-fade-scale">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy"></div>

            <div className="flex justify-between items-center mb-12">
                <div>
                    <h3 className="text-3xl font-black text-brand-navy leading-tight uppercase tracking-tighter">ORÇAMENTO</h3>
                    <p className="text-[10px] text-brand-gold font-black uppercase tracking-[0.3em]">Passo {step} de 4</p>
                </div>
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`h-2.5 rounded-full transition-all duration-700 ${i <= step ? 'bg-brand-gold w-10 shadow-lg shadow-brand-gold/20' : 'bg-gray-100 w-6'}`} />
                    ))}
                </div>
            </div>

            <div className="min-h-[350px] flex flex-col justify-center">
                {isCalculating ? (
                    <div className="text-center py-10 animate-pulse">
                        <div className="relative w-28 h-28 mx-auto mb-8">
                            <Calculator className="w-full h-full text-brand-gold" />
                            <div className="absolute inset-0 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <h4 className="text-2xl font-black text-brand-navy uppercase tracking-tight">Otimizando Orçamento...</h4>
                        <p className="text-xs text-brand-gold font-bold mt-2 uppercase tracking-widest">Consultando Tabela Premium 2025</p>
                    </div>
                ) : (
                    <>
                        {step === 1 && (
                            <div className="animate-slide-up">
                                <h4 className="text-2xl font-black mb-10 text-center text-brand-navy uppercase tracking-tight">Qual seu dispositivo?</h4>
                                <div className="grid grid-cols-2 gap-8">
                                    {devices.map((d, i) => (
                                        <button
                                            key={d.id}
                                            onClick={() => { setSelection({ ...selection, device: d.id }); handleNext(); }}
                                            className="flex flex-col items-center p-8 bg-brand-navy/5 rounded-[2rem] hover:bg-brand-navy transition-all group border border-transparent hover:shadow-2xl hover:-translate-y-2"
                                        >
                                            <d.icon className="w-16 h-16 text-brand-navy group-hover:text-brand-gold mb-6 transition-all group-hover:scale-110" />
                                            <span className="font-black text-lg text-brand-navy group-hover:text-white uppercase tracking-tighter">{d.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-slide-up">
                                <h4 className="text-2xl font-black mb-10 text-center text-brand-navy uppercase tracking-tight">Identifique o Modelo</h4>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                    {getModelsForDevice().map((m, i) => (
                                        <button
                                            key={m}
                                            onClick={() => { setSelection({ ...selection, model: m }); handleNext(); }}
                                            className="py-5 px-4 bg-brand-navy/5 rounded-2xl hover:bg-brand-navy hover:text-white transition-all font-black text-brand-navy text-xs uppercase tracking-widest shadow-sm hover:shadow-xl hover:-translate-y-1"
                                        >
                                            {m}
                                        </button>
                                    ))}
                                </div>
                                <style>{`
                                    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                                    .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
                                    .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
                                    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
                                `}</style>
                                <button onClick={() => setStep(1)} className="mt-8 text-[10px] text-gray-400 hover:text-brand-gold font-black flex items-center gap-2 mx-auto tracking-[0.3em]">
                                    <ChevronRight className="w-3 h-3 rotate-180" /> VOLTAR
                                </button>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-slide-up">
                                <h4 className="text-2xl font-black mb-10 text-center text-brand-navy uppercase tracking-tight">Qual o problema?</h4>
                                <div className="flex flex-col gap-4">
                                    {problems.map((p, i) => (
                                        <button
                                            key={p.id}
                                            onClick={() => { setSelection({ ...selection, problem: p.name }); handleNext(); }}
                                            className="p-6 bg-brand-navy/5 rounded-2xl hover:bg-brand-navy hover:text-white transition-all flex justify-between items-center group shadow-sm border border-transparent"
                                        >
                                            <span className="font-black text-brand-navy group-hover:text-white uppercase tracking-tight">{p.name}</span>
                                            <ChevronRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setStep(2)} className="mt-12 text-[10px] text-gray-400 hover:text-brand-gold font-black flex items-center gap-2 mx-auto tracking-[0.3em]">
                                    <ChevronRight className="w-3 h-3 rotate-180" /> VOLTAR
                                </button>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="text-center animate-fade-scale">
                                <div className="relative w-28 h-28 mx-auto mb-10">
                                    <div className="absolute inset-0 bg-brand-gold/20 rounded-full animate-ping"></div>
                                    <div className="relative z-10 w-full h-full bg-brand-navy rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                                        <CheckCircle className="w-14 h-14 text-brand-gold" />
                                    </div>
                                </div>

                                <h3 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-4">Estimativa de Laboratório</h3>
                                <div className="text-7xl font-black text-brand-navy mb-6 tracking-tighter">{getPriceEstimate()}</div>
                                <p className="text-gray-400 mb-12 max-w-sm mx-auto text-sm font-medium leading-relaxed uppercase tracking-tight">
                                    Valor aproximado para peças <span className="text-brand-navy font-black underline decoration-brand-gold decoration-4 underline-offset-4">Premium</span> e especialista <span className="text-brand-navy font-black underline decoration-brand-gold decoration-4 underline-offset-4">Certificado</span>.
                                </p>

                                <button
                                    onClick={handleWhatsAppRedirect}
                                    className="group w-full bg-[#25D366] text-white py-7 rounded-[2rem] font-black text-2xl hover:bg-[#1dbf57] transition-all flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:scale-[1.02] active:scale-95"
                                >
                                    AGENDAR AGORA <Zap className="w-8 h-8 fill-current group-hover:animate-pulse" />
                                </button>

                                <p className="text-[10px] text-gray-400 mt-8 font-black uppercase tracking-[0.4em]">
                                    Sem cobrança de taxa de análise
                                </p>
                                <button onClick={() => setStep(1)} className="mt-6 text-[10px] text-gray-400 hover:text-brand-gold font-black uppercase tracking-[0.2em] underline decoration-gray-200 underline-offset-4">
                                    Fazer novo orçamento
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
