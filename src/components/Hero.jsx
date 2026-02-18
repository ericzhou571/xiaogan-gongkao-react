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
                    专注孝感本土公考 · 面试笔试一体化服务
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                    毕上公考（孝感）<br/>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-500 to-amber-200">助力每一位学员成功上岸</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-light">
                    深耕孝感公考培训市场，提供公务员、事业单位、招警、选调生等考试的考前咨询与培训服务。
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="px-8 py-4 gold-gradient text-white font-bold rounded-xl shadow-2xl shadow-gold-600/30 hover:scale-105 transition transform">
                        2026 省考/事业单位咨询
                    </button>
                    <button onClick={onShowFaculty} className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition">
                        了解我们的师资
                    </button>
                </div>
            </motion.div>
        </header>
    );
};

export default Hero;