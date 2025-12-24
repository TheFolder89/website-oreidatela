import React, { useState } from 'react';
import { Search, Package, CheckCircle, AlertCircle, Clock } from 'lucide-react';

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
                    service: 'Troca de Vidro',
                    date: '23/12/2025',
                    description: 'O técnico está trabalhando no seu aparelho neste momento.'
                });
            } else {
                setError('Ordem de Serviço não encontrada. Verifique o número e tente novamente.');
            }
        }, 1500);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Consultar Status de OS</h2>

            <form onSubmit={handleSearch} className="mb-8">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        value={osNumber}
                        onChange={(e) => setOsNumber(e.target.value)}
                        placeholder="Digite o número da OS (ex: 1234)"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg font-medium"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                            Consultando...
                        </>
                    ) : (
                        'Verificar Status'
                    )}
                </button>
            </form>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    {error}
                </div>
            )}

            {result && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 animate-fade-in">
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${result.status === 'Pronto' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                            {result.status === 'Pronto' ? <CheckCircle className="w-6 h-6 text-green-600" /> : <Clock className="w-6 h-6 text-yellow-600" />}
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Status Atual</div>
                            <div className={`text-xl font-bold ${result.status === 'Pronto' ? 'text-green-600' : 'text-yellow-600'}`}>{result.status}</div>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span className="font-medium">Aparelho:</span>
                            <span>{result.device}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Serviço:</span>
                            <span>{result.service}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Entrada:</span>
                            <span>{result.date}</span>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
                        {result.description}
                    </div>

                    {result.status === 'Pronto' && (
                        <div className="mt-6">
                            <a href="https://wa.me/5571999999999?text=Ol%C3%A1%2C%20vi%20que%20minha%20OS%20est%C3%A1%20pronta.%20Gostaria%20de%20combinar%20a%20entrega." className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
                                Agendar Entrega / Retirada
                            </a>
                        </div>
                    )}
                </div>
            )}

            <p className="text-center text-gray-400 text-sm mt-6">
                Não sabe seu número de OS? <a href="https://wa.me/5571999999999" className="text-blue-600 underline">Fale conosco no WhatsApp</a>.
            </p>
        </div>
    );
}
