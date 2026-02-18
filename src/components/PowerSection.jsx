import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Award } from 'lucide-react';

const PowerSection = () => {
    return (
        <section id="power" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "二十余年命题阅卷", desc: "由全国公培领军人物夏晓华教授领衔，拥有20余年公务员考试命题及阅卷经验。", icon: ShieldCheck },
                    { title: "资深考官亲自授课", desc: "拒绝照本宣科。我们的课程均由具有丰富实战经验的资深面试考官亲自讲授。", icon: Building2 },
                    { title: "上岸夺魁佳绩", desc: "2024国考人行面试92分（全国状元），2025选调生80.76分（全省状元）。", icon: Award }
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