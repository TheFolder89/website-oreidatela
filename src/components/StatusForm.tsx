import React, { useState } from 'react';
import { Search, Package, CheckCircle, AlertCircle, Clock, Zap, Wrench, RefreshCw } from 'lucide-react';

export default function StatusForm() {
    const [osNumber, setOsNumber] = useState('');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult(null);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            if (osNumber === '1234') {
                setResult({
                    status: 'Pronto',
                    device: 'iPhone 13 Pro',
                    service: 'Troca de Tela',
                    date: '24/12/2025',
                    description: 'Seu aparelho já está pronto para retirada ou entrega.'
                });
            } else if (osNumber === '5678') {
                setResult({
                    status: 'Em Bancada',
                    device: 'Apple Watch S7',
                    service: 'Troca de Tela',
                    date: '23/12/2025',
                    description: 'O especialista está trabalhando no seu aparelho neste momento.'
                });
            } else if (osNumber === '9999') {
                setResult({
                    status: 'Aguardando Peça',
                    device: 'iPad Air 5',
                    service: 'Reparo de Placa',
                    date: '22/12/2025',
                    description: 'Peça premium solicitada ao fornecedor. Previsão: 2 dias.'
                });
            } else {
                setError('Ordem de Serviço não encontrada em nossa base de dados.');
            }
        }, 1500);
    };

    return (
        <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 max-w-2xl mx-auto overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-navy"></div>

            <h2 className="text-4xl font-black text-brand-navy mb-10 text-center tracking-tighter uppercase leading-none">Status de <span className="text-brand-gold">Laboratório</span></h2>

            <form onSubmit={handleSearch} className="mb-12">
                <div className="relative group">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-300 w-7 h-7 group-focus-within:text-brand-gold transition-colors" />
                    <input
                        type="text"
                        value={osNumber}
                        onChange={(e) => setOsNumber(e.target.value)}
                        placeholder="NÚMERO DA OS (EX: 1234)"
                        className="w-full pl-16 pr-6 py-6 bg-brand-navy/5 border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-brand-gold outline-none transition-all text-2xl font-black text-brand-navy placeholder:text-gray-200 shadow-inner tracking-widest"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-6 bg-brand-navy text-white py-6 rounded-[2rem] font-black text-xl hover:bg-black transition-all shadow-2xl shadow-brand-navy/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 active:scale-95 uppercase tracking-widest"
                >
                    {loading ? (
                        <>
                            <RefreshCw className="w-7 h-7 animate-spin" />
                            BUSCANDO...
                        </>
                    ) : (
                        <>
                            LOCALIZAR EQUIPAMENTO <Zap className="w-6 h-6 fill-current text-brand-gold" />
                        </>
                    )}
                </button>
            </form>

            {error && (
                <div className="bg-red-50 text-red-600 p-6 rounded-[2rem] flex items-center gap-5 animate-fade-scale border border-red-100">
                    <AlertCircle className="w-8 h-8 flex-shrink-0" />
                    <span className="font-black text-sm uppercase tracking-tight">{error}</span>
                </div>
            )}

            {result && (
                <div className="bg-brand-navy rounded-[2.5rem] p-10 border border-white/10 animate-slide-up relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Wrench className="w-32 h-32 text-white" />
                    </div>

                    <div className="flex items-center gap-6 mb-10 pb-10 border-b border-white/10">
                        <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center relative shadow-2xl ${result.status === 'Pronto' ? 'bg-green-500 text-white' :
                            result.status === 'Aguardando Peça' ? 'bg-brand-gold text-brand-navy' : 'bg-white text-brand-navy'
                            }`}>
                            {result.status === 'Pronto' ? <CheckCircle className="w-10 h-10" /> :
                                result.status === 'Aguardando Peça' ? <Package className="w-10 h-10" /> : <Clock className="w-10 h-10 animate-pulse" />}
                        </div>
                        <div>
                            <div className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-black mb-1">Status Atualizado</div>
                            <div className={`text-4xl font-black tracking-tighter uppercase ${result.status === 'Pronto' ? 'text-green-400' :
                                result.status === 'Aguardando Peça' ? 'text-brand-gold' : 'text-white'
                                }`}>{result.status}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-8 gap-x-6 mb-10">
                        <div>
                            <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Dispositivo</div>
                            <div className="font-black text-white text-lg tracking-tight uppercase leading-none">{result.device}</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Serviço</div>
                            <div className="font-black text-white text-lg tracking-tight uppercase leading-none">{result.service}</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Data de Entrada</div>
                            <div className="font-black text-white text-lg tracking-tight uppercase leading-none">{result.date}</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Previsão</div>
                            <div className="font-black text-brand-gold text-lg tracking-tight uppercase leading-none">URGENTE</div>
                        </div>
                    </div>

                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-sm text-white/60 font-medium italic mb-10 leading-relaxed">
                        "{result.description}"
                    </div>

                    {result.status === 'Pronto' ? (
                        <a href="https://wa.me/557194142627?text=Olá, vi que minha OS está pronta. Gostaria de combinar a entrega." className="block w-full bg-green-500 text-white text-center py-6 rounded-[1.5rem] font-black text-xl hover:bg-green-600 shadow-2xl shadow-green-500/30 transition-all active:scale-95 uppercase tracking-widest">
                            LIBERAR ENTREGA AGORA
                        </a>
                    ) : (
                        <a href="https://wa.me/557194142627" className="block w-full bg-white/10 text-white text-center py-6 rounded-[1.5rem] font-black text-xl hover:bg-white/20 transition-all uppercase tracking-widest">
                            FALAR COM ESPECIALISTA
                        </a>
                    )}
                </div>
            )}

            <div className="mt-12 text-center">
                <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.3em] mb-3">Problemas com a Ordem?</p>
                <a href="https://wa.me/557194142627" className="text-brand-navy font-black hover:text-brand-gold transition-colors tracking-widest text-[10px] uppercase border-b-2 border-brand-gold pb-1 leading-none">
                    OUVIDORIA E RECLAMAÇÕES →
                </a>
            </div>
        </div>
    );
}
