import React from 'react';

export const TopographicPattern = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply overflow-hidden z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0 80 C 30 20 60 20 100 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0 60 C 40 40 70 40 100 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0 40 C 30 60 60 60 100 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0 20 C 20 80 50 80 100 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
    </div>
);

export const MountainSilhouette = () => (
    <div className="fixed bottom-0 left-0 w-full h-64 pointer-events-none z-0 opacity-10 text-brand-green">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-current">
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path d="M0,320L48,288C96,256,192,192,288,192C384,192,480,256,576,288C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" opacity="0.5"></path>
        </svg>
    </div>
);
