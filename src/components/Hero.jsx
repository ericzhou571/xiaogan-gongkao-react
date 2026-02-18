import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onShowFaculty }) => {
    return (
        <header className="relative pt-32 pb-20 px-8 text-center max-w-6xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="inline-block px-4 py-1 rounded-full bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase mb-6 border border-gold-500/20">
                    由全国公培行业领军人物 夏晓华教授 领衔
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                    二十余年考公命题人亲授 <br/>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-500 to-amber-200">上岸夺魁 唯有政仕</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-light">
                    资深面试考官团队亲自授课。2024国考人行全国状元（92分）、2025湖北选调生全省状元（80.76分）均出自本校。
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="px-8 py-4 gold-gradient text-white font-bold rounded-xl shadow-2xl shadow-gold-600/30 hover:scale-105 transition transform">
                        进入 2026 面试特训营
                    </button>
                    <button onClick={onShowFaculty} className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition">
                        查看名师委员会背景
                    </button>
                </div>
            </motion.div>
        </header>
    );
};

export default Hero;