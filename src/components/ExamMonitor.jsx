import React, { useState } from 'react';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExamData } from '../hooks/useExamData';

const ExamMonitor = () => {
    const { data, loading, lastUpdated, refresh } = useExamData();

    return (
        <section id="monitor" className="py-12 px-8 max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <h3 className="text-gold-500 font-bold tracking-widest text-xs uppercase">Real-time Intelligence</h3>
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-white">全网考情实时监测中心</h2>
                        <div className="flex items-center gap-3 text-slate-400 text-sm mt-2">
                            <p>数据源自 
                                <span className="text-gold-500 font-bold ml-1">
                                    政仕大数据中心 (Zhengshi Big Data)
                                </span> 
                                实时同步
                            </p>
                            <span className="text-slate-600">|</span>
                            
                            {/* 手动刷新区域 */}
                            <button 
                                onClick={refresh}
                                disabled={loading}
                                className="flex items-center gap-2 hover:text-white transition group disabled:opacity-50"
                                title="点击强制刷新数据"
                            >
                                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-gold-500' : 'text-slate-500 group-hover:text-gold-500'}`} />
                                <span className="text-xs font-mono">
                                    {loading ? '正在同步...' : `最后更新: ${lastUpdated.toLocaleTimeString()}`}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {['孝感人社局', '湖北人事考试网', '孝感组工网', '应城发布'].map(src => (
                            <span key={src} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> {src}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            // Loading Skeleton
                            <motion.div 
                                key="skeleton"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="col-span-2 grid md:grid-cols-2 gap-4"
                            >
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div key={`skeleton-${i}`} className="p-4 bg-navy-800/30 rounded-xl border border-white/5 animate-pulse flex items-center gap-4">
                                        <div className="w-12 h-6 bg-slate-700/50 rounded"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
                                            <div className="h-3 bg-slate-700/30 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            // Real Data List
                            data.map((news, i) => (
                                <motion.a 
                                    key={news.id}
                                    href="https://www.huatu.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group flex items-center justify-between p-4 bg-navy-800/50 rounded-xl border border-white/5 hover:border-gold-500/30 hover:bg-navy-800 transition cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold border ${
                                            news.type === '官方' ? 'border-red-500/30 text-red-400 bg-red-500/10' : 
                                            news.type === '独家' ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' : 
                                            'border-blue-500/30 text-blue-400 bg-blue-500/10'
                                        }`}>
                                            {news.type}
                                        </span>
                                        <div className="flex-1">
                                            <h4 className="text-white text-sm font-medium group-hover:text-gold-500 transition line-clamp-1">{news.title}</h4>
                                            <div className="flex gap-2 text-[10px] text-slate-500 mt-1">
                                                <span>来源: {news.source}</span>
                                                <span>•</span>
                                                <span>{news.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-gold-500 transition min-w-[16px]" />
                                </motion.a>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ExamMonitor;