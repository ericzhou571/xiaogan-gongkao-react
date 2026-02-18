import React, { useState } from 'react';
import { Library, Video, FileText, ArrowRight, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StrategicResources = () => {
    const [activeResource, setActiveResource] = useState(null);

    // 资源配置：尝试使用毕上的移动端页面或特定板块
    const resources = [
        { 
            id: 'question', 
            title: '毕上题库（旗舰版）', 
            icon: Library, 
            color: 'blue', 
            desc: '收录历年国考、省考及事业单位真题，智能组卷，精准估分。',
            url: 'https://www.bishangjiaoyu.com/tiku' 
        },
        { 
            id: 'course', 
            title: '名师视频课程', 
            icon: Video, 
            color: 'emerald', 
            desc: '夏晓华等名师亲授，涵盖申论、行测、面试全科系精品网课。',
            url: 'https://www.bishangjiaoyu.com/course' 
        },
        { 
            id: 'notice', 
            title: '最新考试公告', 
            icon: FileText, 
            color: 'purple', 
            desc: '2026年国考、省考及事业单位招考简章、职位表一键查询。',
            url: 'https://www.bishangjiaoyu.com/news' 
        }
    ];

    return (
        <section id="resources" className="py-20 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-white mb-4">战略合作伙伴资源库</h2>
                <p className="text-slate-400">政仕教育携手行业领袖 <span className="text-gold-500 font-bold">毕上教育</span>，为您提供全网最顶级的备考资源</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                {resources.map((res) => (
                    <div 
                        key={res.id}
                        onClick={() => setActiveResource(res)}
                        className="group bg-navy-800 p-8 rounded-2xl border border-white/5 hover:border-gold-500/50 hover:-translate-y-2 transition duration-300 cursor-pointer"
                    >
                        <div className={`w-16 h-16 bg-${res.color}-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${res.color}-500/20 transition`}>
                            <res.icon className={`w-8 h-8 text-${res.color}-400`} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{res.title}</h3>
                        <p className="text-slate-400 text-sm mb-4">{res.desc}</p>
                        <span className="text-gold-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                            立即访问 <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                ))}
            </div>

            {/* 全屏资源浏览 Modal */}
            <AnimatePresence>
                {activeResource && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex flex-col bg-navy-900"
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-navy-800">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded bg-${activeResource.color}-500/20`}>
                                    <activeResource.icon className={`w-5 h-5 text-${activeResource.color}-400`} />
                                </div>
                                <h3 className="text-white font-bold">{activeResource.title}</h3>
                            </div>
                            <div className="flex gap-4">
                                <a href={activeResource.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm">
                                    <Maximize2 className="w-4 h-4" /> 新窗口打开
                                </a>
                                <button onClick={() => setActiveResource(null)} className="p-2 hover:bg-white/10 rounded-full transition">
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Iframe Container */}
                        <div className="flex-1 w-full bg-white relative">
                            {/* Loading State */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 pointer-events-none">
                                <span className="animate-pulse">正在安全加载资源...</span>
                            </div>
                            <iframe 
                                src={activeResource.url} 
                                className="w-full h-full border-0 relative z-10"
                                title="Resource Preview"
                                // 尝试绕过部分简单的防盗链
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default StrategicResources;