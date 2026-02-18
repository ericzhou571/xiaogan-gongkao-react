import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-8 border-t border-white/5 text-center">
            <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center font-bold text-white mx-auto mb-8 shadow-xl shadow-gold-500/20 text-2xl">毕</div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">毕上公考（孝感）教育科技有限公司</h2>
            <p className="text-slate-500 mb-12">湖北省孝感市孝南区长征路282号晨勇商务综合楼04层0405室</p>
            <div className="flex justify-center gap-12 text-sm text-slate-400 mb-12">
                <span>📞 课程咨询热线：138-xxxx-xxxx</span>
                <span>📱 微信客服：xxxxxx</span>
            </div>
            <p className="text-xs text-slate-700">© 2026 毕上公考（孝感）. All Rights Reserved. </p>
        </footer>
    );
};

export default Footer;