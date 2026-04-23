import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-4 font-sans">
            <h1 className="text-6xl font-bold tracking-tight mb-2">404</h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8">
                This page could not be found.
            </p>

            <Link
                href="/"
                className="px-5 py-2.5 text-sm font-medium transition-colors border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
                Return Home
            </Link>
        </div>
    );
};

export default NotFoundPage;