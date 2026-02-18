import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-8 border-t border-white/5 bg-navy-900 text-center">
            <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center font-bold text-white mx-auto mb-8 shadow-xl shadow-gold-500/20 text-2xl">毕</div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">毕上公考（孝感）教育科技有限公司</h2>
            <p className="text-slate-500 mb-12">湖北省孝感市孝南区长征路282号晨勇商务综合楼04层0405室</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
                <div className="text-left">
                    <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">咨询热线 (24小时)</p>
                    <p className="text-2xl font-bold text-white hover:text-gold-500 transition cursor-pointer">198-8831-9666</p>
                    <p className="text-2xl font-bold text-white hover:text-gold-500 transition cursor-pointer mt-1">198-8831-0666</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                    <img src="/assets/contact-qr.jpg" alt="添加企业微信客服" className="w-32 h-32 object-cover mb-2" />
                    <p className="text-navy-900 text-xs font-bold text-center">扫码加企业微信</p>
                </div>
            </div>
            
            <p className="text-xs text-slate-700">© 2026 毕上公考（孝感）. All Rights Reserved. 鄂ICP备2026xxxx号</p>
        </footer>
    );
};

export default Footer;