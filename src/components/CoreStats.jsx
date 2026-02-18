import React from 'react';

const CoreStats = () => {
    return (
        <section className="py-20 bg-white/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">82.98%</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">2025年省考面试上岸率</p>
                </div>
                <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">67.59%</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">2025年省考笔试进面率</p>
                </div>
                <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">92分</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">2024国考人行面试状元</p>
                </div>
                <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">80.76分</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">2025选调生全省状元</p>
                </div>
            </div>
        </section>
    );
};

export default CoreStats;