import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const facultyList = [
    { name: "夏晓华", title: "全国公培行业领军人物 / 二十余年命题人", desc: "亲授2024国考人行全国状元(92分)。二十余年考公命题及阅卷经验，公考面试教父级人物。", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    { name: "张敏", title: "首席讲师 / 原市委党校教授", desc: "资深面试考官，亲自授课。长期负责孝感处级干部培训，对本地政治理论有教科书级的理解。", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "王建国", title: "特级教研员 / 原人社局面试专家", desc: "曾任职于孝感市人社局考试中心，深谙事业单位招聘全流程规则。", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
    { name: "陈思思", title: "高级心理咨询师 / 压力面试专家", desc: "国家二级心理咨询师，专攻考前焦虑与高压环境下的临场应变训练。", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { name: "刘志强", title: "资深考官 / 应急应变题型专家", desc: "15年基层政法工作经验，针对公安、司法岗位的实务题有独家解题模型。", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
    { name: "周晓慧", title: "言语理解专家 / 演讲冠军导师", desc: "多次指导学员获得全省演讲比赛金奖，擅长从语言气场上压制对手。", img: "https://images.unsplash.com/photo-1598550832205-d8b552b92139?auto=format&fit=crop&w=400&q=80" },
    { name: "赵刚", title: "综合分析专家 / 政策解读顾问", desc: "政府研究室特约评论员，能将最新的大政方针转化为高分答题素材。", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
    { name: "吴丽", title: "礼仪形象顾问 / 前空乘教官", desc: "负责考生的进场礼仪、着装搭配及眼神交流训练，打造第一眼“眼缘”。", img: "https://images.unsplash.com/photo-1534751516042-4c860c7b3564?auto=format&fit=crop&w=400&q=80" }
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
                            <h3 className="text-3xl font-serif font-bold text-white">政仕教育专家委员会名录</h3>
                            <p className="text-gold-500 text-sm tracking-widest uppercase mt-1">Faculty Committee</p>
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
                    <div className="p-6 bg-navy-900 border-t border-white/10 text-center text-slate-500 text-sm">
                        *注：以上专家均为政仕教育（孝感研究院）全职或独家签约专家，严禁其他机构冒用。
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
                    <h2 className="text-4xl font-serif font-bold text-white mb-6 underline decoration-gold-500/30 underline-offset-8">顶尖师资：政仕专家委员会</h2>
                    <p className="text-slate-400">在政仕，我们拒绝巡讲老师。由全国公培行业领军人物夏晓华教授领衔，资深面试考官亲自授课。</p>
                </div>
                <button onClick={onShowModal} className="text-gold-500 font-bold flex items-center gap-2">查看完整名录 <ArrowRight className="w-4 h-4" /></button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
                <div className="group relative rounded-3xl overflow-hidden glass border-white/10">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" className="w-full h-[500px] object-cover opacity-60 group-hover:opacity-100 transition duration-700" alt="夏晓华教授"/>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent">
                        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 block">院长 / 全国公培行业领军人物</span>
                        <h3 className="text-3xl font-bold text-white mb-4">夏晓华 教授</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">二十余年考公命题人、阅卷人。亲授学员斩获2024国考人行全国状元(92分)。</p>
                    </div>
                </div>
                <div className="group relative rounded-3xl overflow-hidden glass border-white/10">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" className="w-full h-[500px] object-cover opacity-60 group-hover:opacity-100 transition duration-700" alt="张敏教授"/>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent">
                        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 block">首席讲师 / 资深面试考官</span>
                        <h3 className="text-3xl font-bold text-white mb-4">张敏 女士</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">资深面试考官亲自授课。擅长高压仿真训练，长期负责孝感处级干部培训。</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faculty;