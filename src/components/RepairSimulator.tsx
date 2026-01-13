import React, { useState, useEffect } from 'react';
import { Search, Wrench, RefreshCw, Layers, CheckCircle } from 'lucide-react';

interface RepairStep {
    id: number;
    title: string;
    duration: number;
    icon: React.ReactNode;
}

const repairSteps: RepairStep[] = [
    { id: 1, title: "Diagnóstico", duration: 2000, icon: <Search className="w-6 h-6" /> },
    { id: 2, title: "Desmontagem", duration: 3000, icon: <Wrench className="w-6 h-6" /> },
    { id: 3, title: "Instalação", duration: 4000, icon: <RefreshCw className="w-6 h-6" /> },
    { id: 4, title: "Montagem", duration: 3000, icon: <Layers className="w-6 h-6" /> },
    { id: 5, title: "Teste Final", duration: 2000, icon: <CheckCircle className="w-6 h-6" /> }
];

export default function RepairSimulator() {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let currentStep = 0;
        const runSimulation = async () => {
            while (currentStep < repairSteps.length) {
                setActiveStep(currentStep);
                setProgress(0);

                const duration = repairSteps[currentStep].duration;
                const startTime = Date.now();

                await new Promise(resolve => {
                    const interval = setInterval(() => {
                        const elapsed = Date.now() - startTime;
                        const newProgress = Math.min((elapsed / duration) * 100, 100);
                        setProgress(newProgress);

                        if (newProgress >= 100) {
                            clearInterval(interval);
                            resolve(null);
                        }
                    }, 50);
                });

                currentStep++;
                if (currentStep === repairSteps.length) {
                    await new Promise(r => setTimeout(r, 2000));
                    currentStep = 0;
                }
            }
        };

        runSimulation();
    }, []);

    return (
        <div className="bg-brand-navy p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Wrench className="w-32 h-32" />
            </div>

            <h3 className="text-2xl font-black mb-10 flex items-center gap-3 uppercase tracking-tighter">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                Live Process
            </h3>

            <div className="space-y-8">
                {repairSteps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`flex items-center gap-6 transition-all duration-700 ${index === activeStep ? 'opacity-100 scale-105' : 'opacity-20 scale-100'}`}
                    >
                        <div className={`p-4 rounded-2xl ${index === activeStep ? 'bg-brand-gold text-brand-navy' : 'bg-white/5'}`}>
                            {step.icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-2">
                                <span className="font-black uppercase tracking-widest text-xs">{step.title}</span>
                                {index === activeStep && <span className="text-[10px] font-black text-brand-gold">{Math.round(progress)}%</span>}
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-gold transition-all duration-100 ease-linear shadow-[0_0_10px_#C5A059]"
                                    style={{ width: index === activeStep ? `${progress}%` : index < activeStep ? '100%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Status: <span className="text-green-400">Bancada Ativa</span>
                </div>
                <div className="text-[10px] font-mono text-brand-gold animate-pulse tracking-widest">
                    TECH_SYNC_v3
                </div>
            </div>
        </div>
    );
}
