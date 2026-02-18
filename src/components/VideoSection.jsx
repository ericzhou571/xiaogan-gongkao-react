import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-32 px-8 max-w-7xl mx-auto">
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
                {/* 视频层 */}
                <video 
                    ref={videoRef}
                    className="w-full h-full object-cover aspect-video bg-black"
                    src="/assets/promo-video.mp4"
                    loop
                    playsInline
                    poster="/assets/teacher-xia.jpg" // 暂用夏老师照片做封面，或者您可以提供专门的封面
                ></video>

                {/* 遮罩层 (播放前显示) */}
                <div 
                    className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <button 
                        onClick={togglePlay}
                        className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mb-6 hover:scale-110 transition shadow-lg shadow-gold-500/30"
                    >
                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </button>
                    <h2 className="text-4xl font-serif font-bold text-white mb-2">毕上公考 · 实战教学现场</h2>
                    <p className="text-slate-300">点击观看学员真实的备考日常</p>
                </div>

                {/* 暂停按钮 (悬停显示) */}
                {isPlaying && (
                    <button 
                        onClick={togglePlay}
                        className="absolute bottom-8 right-8 p-4 bg-black/50 rounded-full text-white hover:bg-gold-500 transition opacity-0 group-hover:opacity-100"
                    >
                        <Pause className="w-6 h-6" fill="currentColor" />
                    </button>
                )}
            </div>
        </section>
    );
};

export default VideoSection;