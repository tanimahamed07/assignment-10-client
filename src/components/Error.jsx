import React from 'react';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';
import { HiOutlineArrowLongLeft, HiOutlinePaintBrush } from 'react-icons/hi2';

const Error = () => {
    return (
        <div className="relative min-h-screen bg-base-100 flex flex-col items-center justify-center overflow-hidden p-6">
            
            {/* Background Abstract Art Elements */}
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]"></div>
            
            {/* Main Content */}
            <div className="relative z-10 text-center space-y-8">
                
                {/* Creative 404 Text */}
                <Fade direction="down" triggerOnce>
                    <div className="relative inline-block">
                        <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-base-200 select-none">
                            404
                        </h1>
                        {/* Overlaying Brush Stroke Effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
                                Lost in Art
                            </h2>
                        </div>
                    </div>
                </Fade>

                <Fade direction="up" delay={200} triggerOnce>
                    <div className="space-y-4 max-w-lg mx-auto">
                        <div className="flex justify-center gap-2 text-primary mb-2">
                            <HiOutlinePaintBrush size={32} className="animate-bounce" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral">
                            This Masterpiece is Missing
                        </h3>
                        <p className="text-neutral/50 italic leading-relaxed">
                            The canvas you're looking for hasn't been painted yet, or it has been moved to a private collection.
                        </p>
                    </div>
                </Fade>

                {/* Navigation Button */}
                <Fade direction="up" delay={400} triggerOnce>
                    <div className="pt-8">
                        <Link 
                            to="/" 
                            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-neutral text-white font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-2xl"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <HiOutlineArrowLongLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                                Return to Gallery
                            </span>
                            {/* Hover Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Link>
                    </div>
                </Fade>
            </div>

            {/* Floating Decorative Icons */}
            <div className="absolute hidden lg:block top-20 right-[15%] text-primary/20 -rotate-12 animate-bounce">
                <HiOutlinePaintBrush size={80} />
            </div>
            
            {/* Custom Bottom Decor */}
            <div className="absolute bottom-10 left-10 hidden md:block">
                <div className="flex items-center gap-4 border-l-2 border-primary pl-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral/30">
                        Artify © 2026 <br />
                        Creative Showcase
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Error;