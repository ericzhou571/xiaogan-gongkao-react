import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const facultyList = [
    { name: "李老师", title: "资深公考讲师", desc: "拥有多年公考笔试教学经验，擅长行测数量关系与资料分析模块，解题技巧独特实用。", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    { name: "张老师", title: "面试辅导专家", desc: "深耕结构化面试领域，对孝感事业单位面试考情有深入研究，擅长挖掘学员个性化亮点。", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "王老师", title: "申论金牌讲师", desc: "理论功底扎实，对申论大作文写作有独到见解，能帮助学员快速构建写作框架。", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
    { name: "陈老师", title: "言语理解讲师", desc: "教学风格风趣幽默，善于将复杂的逻辑填空题简单化，深受学员喜爱。", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" }
];

export const FacultyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            >
                <div className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm" onClick={onClose}></div>
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative bg-navy-800 border border-white/10 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-black/50"
                >
                    <div className="p-8 border-b border-white/10 flex justify-between items-center bg-navy-900 sticky top-0 z-10">
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-white">毕上公考师资团队</h3>
                            <p className="text-gold-500 text-sm tracking-widest uppercase mt-1">Professional Team</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition">
                            <X className="w-8 h-8 text-white" />
                        </button>
                    </div>
                    <div className="p-8 overflow-y-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-hide">
                        {facultyList.map((item, idx) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={idx} 
                                className="bg-navy-900/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/50 transition group"
                            >
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition shadow-lg">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-xl font-bold text-white text-center mb-1">{item.name}</h4>
                                <p className="text-gold-500 text-xs text-center font-bold uppercase mb-3 h-8 flex items-center justify-center">{item.title}</p>
                                <p className="text-slate-400 text-sm text-center leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Faculty = ({ onShowModal }) => {
    return (
        <section id="faculty" className="py-32 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-6 underline decoration-gold-500/30 underline-offset-8">专业师资：助力上岸</h2>
                    <p className="text-slate-400">毕上公考拥有一支经验丰富、认真负责的师资队伍。我们坚持以学员为中心，提供高质量的教学服务。</p>
                </div>
                <button onClick={onShowModal} className="text-gold-500 font-bold flex items-center gap-2">查看完整名录 <ArrowRight className="w-4 h-4" /></button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
                {facultyList.slice(0, 2).map((item, i) => (
                    <div key={i} className="group relative rounded-3xl overflow-hidden glass border-white/10">
                        <img src={item.img} className="w-full h-[500px] object-cover opacity-60 group-hover:opacity-100 transition duration-700" alt={item.name}/>
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent">
                            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 block">{item.title}</span>
                            <h3 className="text-3xl font-bold text-white mb-4">{item.name}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faculty;