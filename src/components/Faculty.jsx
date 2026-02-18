import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

// 真实师资数据
const facultyList = [
    { 
        name: "夏晓华 博士", 
        title: "毕上公考董事长 / 首席专家", 
        desc: "“夏晓华博士专家团队”把脉，以结构化面试为核心。拥有丰富经验的师资保障，上岸夺魁的实战佳绩。亲授2024国考人行全国状元(92分)。", 
        img: "/assets/teacher-xia.jpg" 
    },
    { 
        name: "秉文 老师", 
        title: "资深公考面试讲师", 
        desc: "教学风格干练，直击考点。擅长挖掘学员个人特质，进行个性化点评。多年公考培训经验，深受学员好评。", 
        img: "/assets/teacher-male.jpg" 
    }
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
                    className="relative bg-navy-800 border border-white/10 rounded-3xl w-full max-w-5xl overflow-hidden flex flex-col shadow-2xl shadow-black/50"
                >
                    <div className="p-8 border-b border-white/10 flex justify-between items-center bg-navy-900 sticky top-0 z-10">
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-white">毕上公考核心师资</h3>
                            <p className="text-gold-500 text-sm tracking-widest uppercase mt-1">Expert Team</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition">
                            <X className="w-8 h-8 text-white" />
                        </button>
                    </div>
                    <div className="p-12 grid md:grid-cols-2 gap-12">
                        {facultyList.map((item, idx) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx} 
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-64 h-80 mb-6 rounded-2xl overflow-hidden border-4 border-white/5 group-hover:border-gold-500 transition shadow-2xl relative">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                </div>
                                <h4 className="text-3xl font-serif font-bold text-white mb-2">{item.name}</h4>
                                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-wider">{item.title}</span>
                                <p className="text-slate-400 leading-relaxed max-w-sm">{item.desc}</p>
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
                    <h2 className="text-4xl font-serif font-bold text-white mb-6 underline decoration-gold-500/30 underline-offset-8">名师领衔：拒绝照本宣科</h2>
                    <p className="text-slate-400">由夏晓华博士亲自把脉，资深实战派讲师全程面授。我们不卖视频课，我们只做有温度的教育。</p>
                </div>
                <button onClick={onShowModal} className="text-gold-500 font-bold flex items-center gap-2">查看名师详情 <ArrowRight className="w-4 h-4" /></button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
                {facultyList.map((item, i) => (
                    <div key={i} className="group relative rounded-3xl overflow-hidden glass border-white/10 cursor-pointer" onClick={onShowModal}>
                        {/* 调整图片显示方式，确保人像居中 */}
                        <div className="h-[500px] w-full overflow-hidden bg-navy-800">
                            <img src={item.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700 object-top" alt={item.name}/>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-navy-900 via-navy-900/90 to-transparent">
                            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 block">{item.title}</span>
                            <h3 className="text-3xl font-bold text-white mb-4">{item.name}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faculty;