import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 glass border-b border-white/5 px-8 py-4 flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-gold-500/20">政</div>
                <div>
                    <h2 className="text-xl font-bold tracking-tighter text-white">政仕教育 <span className="text-gold-500 font-light text-sm ml-2">研究院</span></h2>
                </div>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-200">
                <a href="#power" className="hover:text-gold-500 transition">实力背景</a>
                <a href="#monitor" className="hover:text-gold-500 transition">考情监测</a>
                <a href="#resources" className="hover:text-gold-500 transition">战略资源</a>
                <a href="#contact" className="text-gold-500 border border-gold-500/30 px-4 py-1 rounded-full hover:bg-gold-500 hover:text-white transition">预约测评</a>
            </div>
        </nav>
    );
};

export default Navbar;