import React from 'react';
import { useRouteError, useNavigate } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

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

            {/* Purple glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"
                style={{ background: 'radial-gradient(circle, rgba(83,74,183,0.2) 0%, transparent 70%)' }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-md w-full">

                {/* Icon */}
                <div className="w-20 h-20 rounded-full border border-violet-500/50 bg-violet-500/10 flex items-center justify-center mb-6 animate-pulse">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                </div>

                {/* Error code */}
                <h1
                    className="text-[96px] font-extrabold leading-none tracking-tighter mb-2 select-none"
                    style={{
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #534AB7 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    {error?.status || '500'}
                </h1>

                {/* Title */}
                <h2 className="text-xl font-bold text-violet-100 mb-3">
                    Something went wrong
                </h2>

                {/* Message */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
                    {error?.message || 'An unexpected error occurred while processing your request.'}
                </p>

                {/* Error pill */}
                {error?.statusText && (
                    <div className="inline-block bg-white/5 border border-white/10 rounded-lg px-4 py-1.5 text-xs text-gray-400 font-mono mb-6">
                        {error.statusText}
                    </div>
                )}

                {/* Button */}
                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 active:scale-95 text-white text-sm font-semibold rounded-xl transition-all duration-200"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Go back home
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 w-full my-5">
                    <div className="flex-1 h-px bg-white/[0.08]" />
                    <span className="text-xs text-gray-600">or</span>
                    <div className="flex-1 h-px bg-white/[0.08]" />
                </div>

                {/* Try again */}
                <button
                    onClick={() => window.location.reload()}
                    className="text-sm text-violet-400 hover:text-violet-300 transition-colors bg-transparent border-none cursor-pointer"
                >
                    Try again →
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;