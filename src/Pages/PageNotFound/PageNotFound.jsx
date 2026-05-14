import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] px-4 text-center relative overflow-hidden">

            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Background blobs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-900/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-12 w-56 h-56 bg-violet-800/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-[8%] w-20 h-20 bg-violet-700/15 rounded-full blur-2xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-md w-full">

                {/* Floating fund/money illustration */}
                <div className="relative mb-8">
                    {/* Outer dashed ring */}
                    <div className="absolute inset-0 -m-10 rounded-full border border-dashed border-violet-500/30 animate-spin [animation-duration:28s]" />
                    {/* Inner dashed ring */}
                    <div className="absolute inset-0 -m-4 rounded-full border border-dashed border-violet-400/40 animate-spin [animation-duration:18s] [animation-direction:reverse]" />

                    {/* Fund / broken wallet SVG illustration */}
                    <div className="w-40 h-40 relative z-10 flex items-center justify-center animate-[float_4s_ease-in-out_infinite]"
                        style={{ animation: 'float 4s ease-in-out infinite' }}
                    >
                        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-36">
                            {/* Wallet body */}
                            <rect x="20" y="55" width="120" height="75" rx="12" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="2" />
                            {/* Wallet flap */}
                            <rect x="20" y="45" width="120" height="24" rx="10" fill="#2e1065" stroke="#7c3aed" strokeWidth="1.5" />
                            {/* Coin pocket */}
                            <rect x="95" y="75" width="38" height="30" rx="8" fill="#0a0a0f" stroke="#6d28d9" strokeWidth="1.5" />
                            {/* Empty coin circle */}
                            <circle cx="114" cy="90" r="8" fill="none" stroke="#4c1d95" strokeWidth="1.5" strokeDasharray="4 3" />
                            {/* Question mark inside coin */}
                            <text x="114" y="95" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">?</text>
                            {/* Sad face on wallet */}
                            <circle cx="62" cy="90" r="20" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1.5" />
                            <circle cx="55" cy="86" r="2" fill="#a78bfa" />
                            <circle cx="69" cy="86" r="2" fill="#a78bfa" />
                            <path d="M55 97 Q62 92 69 97" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                            {/* Flying coins */}
                            <circle cx="130" cy="40" r="10" fill="#312e81" stroke="#7c3aed" strokeWidth="1.5" />
                            <text x="130" y="45" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">$</text>
                            <circle cx="108" cy="25" r="7" fill="#312e81" stroke="#6d28d9" strokeWidth="1.5" />
                            <text x="108" y="29" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">$</text>
                            <circle cx="148" cy="22" r="5" fill="#312e81" stroke="#6d28d9" strokeWidth="1" />
                            <text x="148" y="26" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">$</text>
                            {/* Dotted trail from coins flying away */}
                            <path d="M120 45 Q115 35 108 30" stroke="#6d28d9" strokeWidth="1" strokeDasharray="3 3" />
                            <path d="M135 32 Q140 26 148 25" stroke="#6d28d9" strokeWidth="1" strokeDasharray="3 3" />
                            {/* Stars / sparkles */}
                            <text x="30" y="42" fill="#7c3aed" fontSize="14" opacity="0.7">✦</text>
                            <text x="145" y="68" fill="#6d28d9" fontSize="10" opacity="0.5">✦</text>
                        </svg>
                    </div>
                </div>

                {/* Float keyframe */}
                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-14px); }
                    }
                `}</style>

                {/* 404 outlined text */}
                <h1
                    className="text-[96px] font-extrabold leading-none tracking-tighter mb-2 select-none"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #7c3aed',
                    }}
                >
                    404
                </h1>

                {/* Title */}
                <h2 className="text-xl font-bold text-violet-100 mb-3">
                    Page not found
                </h2>

                {/* Subtitle */}
                <p className="text-sm text-gray-400 max-w-xs mb-8 leading-relaxed">
                    Looks like this page drifted off into the void —
                    just like your missing funds.
                </p>

                {/* CTA Button */}
                <Link to="/">
                    <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 active:scale-95 text-white text-sm font-semibold rounded-xl transition-all duration-200">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Back to home
                    </button>
                </Link>

                {/* Divider */}
                <div className="flex items-center gap-3 w-full my-5 max-w-xs">
                    <div className="flex-1 h-px bg-white/[0.08]" />
                    <span className="text-xs text-gray-600">or</span>
                    <div className="flex-1 h-px bg-white/[0.08]" />
                </div>

                {/* Tag pills */}
                <div className="flex gap-2 flex-wrap justify-center">
                    {['Error 404', 'Page missing', 'Wrong URL?'].map(tag => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-violet-950/60 text-violet-400 border border-violet-800/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;