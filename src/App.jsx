import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PowerSection from './components/PowerSection';
import ExamMonitor from './components/ExamMonitor';
import StrategicResources from './components/StrategicResources';
import CoreStats from './components/CoreStats';
import Faculty, { FacultyModal } from './components/Faculty';
import AILab from './components/AILab';
import Footer from './components/Footer';
import SEOContent from './components/SEOContent';

const App = () => {
    const [showFacultyModal, setShowFacultyModal] = useState(false);

    return (
        <div className="relative overflow-hidden font-sans min-h-screen">
            <FacultyModal isOpen={showFacultyModal} onClose={() => setShowFacultyModal(false)} />

            {/* 背景装饰 */}
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full"></div>
            </div>

            <Navbar />
            <Hero onShowFaculty={() => setShowFacultyModal(true)} />
            <PowerSection />
            <ExamMonitor />
            <StrategicResources />
            <CoreStats />
            <Faculty onShowModal={() => setShowFacultyModal(true)} />
            <AILab />
            <Footer />
            <SEOContent />
        </div>
    );
};

export default App;