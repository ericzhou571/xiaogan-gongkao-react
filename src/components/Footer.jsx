import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-8 border-t border-white/5 text-center">
            <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center font-bold text-white mx-auto mb-8 shadow-xl shadow-gold-500/20 text-2xl">政</div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">政仕教育 (孝感总部)</h2>
            <p className="text-slate-500 mb-12">湖北省孝感市乾坤大道政务核心区政仕大厦 (全楼层)</p>
            <div className="flex justify-center gap-12 text-sm text-slate-400 mb-12">
                <span>📞 400-888-2026</span>
                <span>📱 138-0000-XGMS</span>
                <span>🌐 www.zhengshi-edu.com</span>
            </div>
            <p className="text-xs text-slate-700">© 2026 Zhengshi Institute of Public Service. All Rights Reserved. 鄂ICP备20260123号</p>
        </footer>
    );
};

export default Footer;