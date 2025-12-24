import React, { useState } from 'react';
import { Smartphone, Watch, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const devices = [
    { id: 'iphone', name: 'iPhone', icon: Smartphone },
    { id: 'watch', name: 'Apple Watch', icon: Watch },
];

const models = {
    iphone: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 14 Pro Max', 'iPhone 13', 'iPhone 12', 'iPhone 11'],
    watch: ['Series 9', 'Series 8', 'Ultra', 'Series 7', 'SE'],
};

const problems = [
    { id: 'tela', name: 'Tela Quebrada (Vidro)' },
    { id: 'display', name: 'Display/Touch Falhando' },
    { id: 'bateria', name: 'Bateria Ruim' },
    { id: 'outros', name: 'Outro Defeito' },
];

export default function BudgetWizard() {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({ device: '', model: '', problem: '' });

    const handleNext = () => setStep(step + 1);

    const getPriceEstimate = () => {
        if (selection.device === 'watch') return 'R$ 499';
        if (selection.device === 'iphone' && selection.problem === 'tela') return 'R$ 299';
        return 'Sob Consulta';
    };

    const handleWhatsAppRedirect = () => {
        const text = `Olá! Gostaria de um orçamento para *${selection.device} ${selection.model}* com problema de *${selection.problem}*. Vi a estimativa de ${getPriceEstimate()} no site.`;
        window.open(`https://wa.me/5571999999999?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 max-w-2xl mx-auto relative z-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl"></div>

            <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-bold text-gray-800">Orçamento Rápido</h3>
                <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`h-1.5 w-8 rounded-full transition-all ${i <= step ? 'bg-brand-blue' : 'bg-gray-100'}`} />
                    ))}
                </div>
            </div>

            <div className="min-h-[250px]">
                {step === 1 && (
                    <div className="animate-fade-in">
                        <h4 className="text-2xl font-bold mb-8 text-center text-gray-900">Selecione o Dispositivo</h4>
                        <div className="grid grid-cols-2 gap-6">
                            {devices.map((d) => (
                                <button
                                    key={d.id}
                                    onClick={() => { setSelection({ ...selection, device: d.id }); handleNext(); }}
                                    className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:shadow-lg transition-all group border-2 border-transparent hover:border-brand-blue relative overflow-hidden"
                                >
                                    <d.icon className="w-14 h-14 text-gray-400 group-hover:text-brand-blue mb-4 transition-colors" />
                                    <span className="font-bold text-lg text-gray-700 group-hover:text-brand-blue">{d.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-fade-in">
                        <h4 className="text-2xl font-bold mb-6 text-center text-gray-900">Qual o modelo?</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {models[selection.device as keyof typeof models].map((m) => (
                                <button
                                    key={m}
                                    onClick={() => { setSelection({ ...selection, model: m }); handleNext(); }}
                                    className="py-3 px-4 bg-gray-50 rounded-lg hover:bg-brand-blue hover:text-white transition-all font-medium text-gray-600 text-sm shadow-sm hover:shadow-md"
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setStep(1)} className="mt-8 text-sm text-gray-400 hover:text-brand-blue font-medium flex items-center gap-1">
                            <ChevronRight className="w-4 h-4 rotate-180" /> Voltar
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-fade-in">
                        <h4 className="text-2xl font-bold mb-6 text-center text-gray-900">Qual o defeito?</h4>
                        <div className="flex flex-col gap-3">
                            {problems.map((p) => (
                                <button
                                    key={p.id}
                                    onClick={() => { setSelection({ ...selection, problem: p.name }); handleNext(); }}
                                    className="p-4 bg-gray-50 rounded-xl hover:bg-red-50 hover:text-red-600 border border-transparent hover:border-red-200 text-left font-medium transition-all flex justify-between items-center group"
                                >
                                    {p.name}
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-400" />
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setStep(2)} className="mt-8 text-sm text-gray-400 hover:text-brand-blue font-medium flex items-center gap-1">
                            <ChevronRight className="w-4 h-4 rotate-180" /> Voltar
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center animate-fade-in py-2">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Orçamento Prévio</h3>
                        <div className="text-5xl font-bold text-brand-blue mb-2 tracking-tight">{getPriceEstimate()}</div>
                        <p className="text-gray-500 mb-8 max-w-xs mx-auto">Valor estimado para pagamento à vista. Consulte condições de parcelamento.</p>

                        <button
                            onClick={handleWhatsAppRedirect}
                            className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1dbf57] transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-500/20 hover:scale-[1.02]"
                        >
                            Confirmar no WhatsApp <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-xs text-gray-400 mt-4">Atendimento humano em horário comercial</p>
                    </div>
                )}
            </div>
        </div>
    );
}
