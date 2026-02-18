import React from 'react';

const CoreStats = () => {
    return (
        <section className="py-20 bg-white/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">100%</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">用心服务承诺</p>
                </div>
                <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">1对1</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">个性化岗位分析</p>
                </div>
                <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">小班</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">精品教学模式</p>
                </div>
                <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">全程</h4>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">考前考后跟进</p>
                </div>
            </div>
        </section>
    );
};

export default CoreStats;