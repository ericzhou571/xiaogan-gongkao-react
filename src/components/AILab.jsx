import React from 'react';
import { Coffee } from 'lucide-react';

const AILab = () => {
    return (
        <section id="lab" className="py-32 px-8 glass mx-8 rounded-[40px] mb-20 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <Coffee className="w-full h-full text-gold-500" />
            </div>
            <div className="max-w-4xl relative z-10">
                <h2 className="text-4xl font-serif font-bold text-white mb-8 leading-tight">舒适的学习环境 <br/> <span className="text-gold-500">沉浸式备考体验</span></h2>
                <p className="text-lg text-slate-400 mb-12">我们位于孝感市中心核心商圈，交通便利。教室内配备多媒体教学设备、中央空调、休息区，为学员提供安静、舒适、专注的学习氛围。</p>
                <div className="flex flex-wrap gap-4">
                    <span className="px-6 py-2 rounded-full border border-white/10 text-sm text-slate-300">多媒体教室</span>
                    <span className="px-6 py-2 rounded-full border border-white/10 text-sm text-slate-300">安静自习室</span>
                    <span className="px-6 py-2 rounded-full border border-white/10 text-sm text-slate-300">茶水休息区</span>
                    <span className="px-6 py-2 rounded-full border border-white/10 text-sm text-slate-300">全覆盖WiFi</span>
                </div>
            </div>
        </section>
    );
};

export default AILab;