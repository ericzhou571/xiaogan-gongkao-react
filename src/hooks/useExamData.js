import { useState, useEffect, useCallback } from 'react';

// “洗白”后的数据源：只保留官方和中性名称
const SOURCES = ['孝感人社局', '湖北人事考试网', '政仕研究院', '应城发布', '大悟政府网', '汉川人社', '云梦发布', '考试资讯网'];

const TITLES = [
    "2026年度孝感市事业单位统一公开招聘工作人员公告",
    "2026湖北省考孝感考区面试资格复审名单公示",
    "应城市2026医疗卫生事业单位紧缺人才引进公告",
    "孝感市直机关遴选公务员笔试成绩查询入口开通",
    "大悟县2026中小学教师招聘岗位核减公告",
    "汉川市2026人才引进（第一批）面试考核方案",
    "云梦县事业单位2026公开招聘体检结果公示",
    "孝昌县2026社区工作者招录笔试时间调整通知"
];

// 生成随机时间
const getRandomTime = () => {
    const now = new Date();
    const minutesAgo = Math.floor(Math.random() * 60); 
    now.setMinutes(now.getMinutes() - minutesAgo);
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// 动态生成数据
const generateRealTimeData = () => {
    return Array.from({ length: 8 }).map((_, i) => {
        const isOfficial = Math.random() > 0.4;
        // 随机选择一个“干净”的来源
        const sourceName = SOURCES[i % SOURCES.length];
        
        return {
            id: Date.now() + i,
            title: TITLES[i % TITLES.length] + (Math.random() > 0.8 ? "【重磅】" : ""),
            source: sourceName,
            date: getRandomTime(),
            type: isOfficial ? "官方" : (sourceName === '政仕研究院' ? "独家" : "资讯"),
            // 隐蔽的跳转链接：指向华图，但用户在界面上看不出来
            url: `https://www.huatu.com/` 
        };
    });
};

export const useExamData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const fetchData = useCallback(async () => {
        setLoading(true);
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 600)); 
        
        const newData = generateRealTimeData();
        
        setData(newData);
        setLoading(false);
        setLastUpdated(new Date());
    }, []);

    useEffect(() => {
        fetchData(); 
        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, [fetchData]);

    return { data, loading, lastUpdated, refresh: fetchData };
};