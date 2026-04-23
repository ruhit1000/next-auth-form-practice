'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlinks = () => {
    const pathname = usePathname();

    return (
        <>
            <li><Link 
            href="/"
            className={`font-semibold ${pathname === '/' ? 'text-primary border-b-2 pb-1' : 'text-gray-700'}`}
            >
                Home
            </Link></li>
            <li><Link 
            href="/dashboard"
            className={`font-semibold ${pathname === '/dashboard' ? 'text-primary border-b-2 pb-1' : 'text-gray-700'}`}
            >
                Dashboard
            </Link></li>
            <li><Link 
            href="/about"
            className={`font-semibold ${pathname === '/about' ? 'text-primary border-b-2 pb-1' : 'text-gray-700'}`}
            >
                About
            </Link></li>
        </>
    );
};

export default Navlinks;