import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, MapPin } from 'lucide-react';

const PowerSection = () => {
    return (
        <section id="power" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "本土化教研", desc: "深入研究孝感历年考情，针对性开发面试题本与笔试讲义。", icon: MapPin },
                    { title: "小班制教学", desc: "坚持小班授课，确保每位学员都能得到老师的一对一指导与点评。", icon: Users },
                    { title: "全流程服务", desc: "从岗位分析、报名指导到笔面培训、体检政审，全程贴心陪伴。", icon: BookOpen }
                ].map((item, i) => (
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="p-8 glass rounded-3xl border-white/10 relative overflow-hidden group"
                        key={i}
                    >
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition">
                            <item.icon className="w-32 h-32 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PowerSection;