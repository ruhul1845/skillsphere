'use client';

import React, { useRef } from 'react';
import { MdOutlineRepeat } from 'react-icons/md';
import { PiBrainBold } from 'react-icons/pi';
import { BsPencilSquare, BsCalendarCheck } from 'react-icons/bs';
import { LuAlarmClock } from 'react-icons/lu';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const tips = [
    { number: "01", title: "Spaced Repetition", desc: "Review core concepts at increasing intervals to improve long-term retention.", icon: MdOutlineRepeat, tilt: '-2deg', from: { x: -200, y: -100, rotate: -20, opacity: 0 } },
    { number: "02", title: "The Feynman Technique", desc: "Explain complex topics in simple terms to identify gaps in your knowledge.", icon: PiBrainBold, tilt: '2deg', from: { x: 200, y: -80, rotate: 15, opacity: 0 } },
    { number: "03", title: "Active Recall", desc: "Test yourself frequently rather than passively re-reading course materials.", icon: BsPencilSquare, tilt: '-1.5deg', from: { x: -180, y: 60, rotate: -12, opacity: 0 } },
    { number: "04", title: "Time Blocking", desc: "Dedicate specific chunks of your day to focused learning without distractions.", icon: LuAlarmClock, tilt: '1.5deg', from: { x: 180, y: 80, rotate: 18, opacity: 0 } },
    { number: "05", title: "Weekly Review", desc: "Spend 30 mins every Sunday planning your learning goals for the week ahead.", icon: BsCalendarCheck, tilt: '2deg', from: { x: 0, y: 200, rotate: -8, opacity: 0 } },
];

// Each card animates from its own direction/angle
const NoteCard = ({ tip, delay }) => {
    const Icon = tip.icon;

    const { ref, inView } = useInView({
        triggerOnce: true,  // animate only once
        threshold: 0.2,     // trigger when 20% visible
    });

    // Scroll-triggered entrance from different sides
    const entranceSpring = useSpring({
        from: tip.from,
        to: inView
            ? { x: 0, y: 0, rotate: parseFloat(tip.tilt), opacity: 1 }
            : tip.from,
        delay,
        config: { tension: 160, friction: 22, mass: 1.2 },
    });

    // Hover spring
    const [hoverSpring, hoverApi] = useSpring(() => ({
        scale: 1,
        y: 0,
        config: { tension: 300, friction: 15 },
    }));

    return (
        <animated.div
            ref={ref}
            style={{
                opacity: entranceSpring.opacity,
                x: entranceSpring.x,
                y: entranceSpring.y,
                rotate: entranceSpring.rotate,
            }}
        >
            <animated.div
                style={{
                    scale: hoverSpring.scale,
                    y: hoverSpring.y,
                }}
                onMouseEnter={() => hoverApi.start({ scale: 1.06, y: -6 })}
                onMouseLeave={() => hoverApi.start({ scale: 1, y: 0 })}
            >
                {/* Spiral holes */}
                <div className="flex justify-around px-3">
                    {Array.from({ length: 10 }).map((_, j) => (
                        <div
                            key={j}
                            className="w-3.5 h-3.5 rounded-full border-2 border-yellow-700/50 bg-green-400"
                            style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.4)' }}
                        />
                    ))}
                </div>

                {/* Wire bar */}
                <div
                    className="h-2 w-full"
                    style={{
                        background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 6px, #b8860b 6px, #b8860b 10px)',
                    }}
                />

                {/* Paper */}
                <div className="relative px-6 pt-5 pb-6 rounded-b-xl bg-white shadow-xl">

                    {/* Ruled lines */}
                    <div
                        className="absolute inset-0 rounded-b-xl pointer-events-none overflow-hidden"
                        style={{
                            backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 23px, rgba(100,140,200,0.15) 23px, rgba(100,140,200,0.15) 24px)`,
                            backgroundPositionY: '32px',
                        }}
                    />

                    {/* Red margin line */}
                    <div className="absolute top-0 bottom-0 left-10 w-px bg-red-400/30" />

                    <div className="relative z-10 pl-4">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-black tracking-widest text-green-800">
                                {tip.number}
                            </span>
                            <span className="w-9 h-9 rounded-full flex items-center justify-center bg-green-50">
                                <Icon size={18} color="#2d7a3a" />
                            </span>
                        </div>
                        <h3 className="text-sm font-black mb-1.5 leading-snug text-green-900" style={{ fontFamily: 'Georgia, serif' }}>
                            {tip.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-stone-700" style={{ fontFamily: 'Georgia, serif' }}>
                            {tip.desc}
                        </p>
                    </div>
                </div>
            </animated.div>
        </animated.div>
    );
};

const Learning = () => {

    // Title animates in from top
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const titleSpring = useSpring({
        from: { opacity: 0, y: -40 },
        to: titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 },
        config: { tension: 180, friction: 20 },
    });

    return (
        <div className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-[#020b18] via-[#0e3a6e] to-[#2176c2] overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `repeating-linear-gradient(175deg, transparent 0px, rgba(255,255,255,0.015) 1px, transparent 2px, transparent 8px)`,
                }}
            />

            <div className="relative max-w-5xl mx-auto">

                {/* Animated heading */}
                <animated.div ref={titleRef} style={titleSpring} className="text-center mb-14">
                    <h2 className="text-3xl font-extrabold text-white drop-shadow-md tracking-tight">
                        Learning Tips
                    </h2>
                    <p className="text-amber-200 text-sm mt-2 opacity-80">
                        Master any subject with these proven techniques
                    </p>
                </animated.div>

                {/* Row 1 — card 0 from top-left, card 1 from top-right */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                    <div />
                    <NoteCard tip={tips[0]} delay={0} />
                    <div />
                    <NoteCard tip={tips[1]} delay={100} />
                </div>

                {/* Row 2 — card 2 from left, card 3 from right */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                    <NoteCard tip={tips[2]} delay={200} />
                    <div />
                    <NoteCard tip={tips[3]} delay={300} />
                    <div />
                </div>

                {/* Row 3 — card 4 from bottom center */}
                <div className="grid grid-cols-4 gap-6">
                    <div />
                    <NoteCard tip={tips[4]} delay={400} />
                    <div />
                    <div />
                </div>

            </div>
        </div>
    );
};

export default Learning;