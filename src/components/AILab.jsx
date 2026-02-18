import React from 'react';
import { Boxes } from 'lucide-react';

const AILab = () => {
    return (
        <section id="lab" className="py-32 px-8 glass mx-8 rounded-[40px] mb-20 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <Boxes className="w-full h-full text-gold-500" />
            </div>
            <div className="max-w-4xl relative z-10">
                <h2 className="text-4xl font-serif font-bold text-white mb-8 leading-tight">全省首家 <br/> <span className="text-gold-500">公考面试智能大数据实验室</span></h2>
                <p className="text-lg text-slate-400 mb-12">我们耗资千万引入了业界领先的“微表情实时捕捉系统”与“考官逻辑匹配引擎”。通过10万+真实面试样本深度学习，为每位学员生成独一无二的“高分基因报告”。</p>
                <div className="flex flex-wrap gap-4">
                    <span className="px-6 py-2 rounded-full border border-white/10 text-sm text-slate-300">实时语调分析</span>
                    <span className="px-6 py-2 rounded-full border border-white/10 text-sm text-slate-300">考官压力模拟</span>
                    <span className="px-6 py-2 rounded-full border border-white/10 text-sm text-slate-300">热点预测模型</span>
                    <span className="px-6 py-2 rounded-full border border-white/10 text-sm text-slate-300">1:1 AI 辅助陪练</span>
                </div>
            </div>
        </section>
    );
};

export default AILab;