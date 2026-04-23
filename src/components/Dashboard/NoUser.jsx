import React from 'react';
import Link from 'next/link';

const NoUser = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10 w-full">
            <div className="max-w-md w-full bg-base-100 p-8 sm:p-10 rounded-[2rem] shadow-xl border border-base-200 text-center transition-all hover:shadow-2xl">

                {/* Decorative Icon Circle */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-base-content">Access Restricted</h2>
                <p className="text-base-content/70 mb-8 leading-relaxed">
                    You need to be logged in to view your dashboard. Sign in to your account or create a new one to get started!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/auth/sign-in"
                        className="btn btn-outline border-base-300 hover:bg-base-200 hover:border-base-300 hover:text-base-content flex-1 rounded-full text-base"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/sign-up"
                        className="btn btn-primary flex-1 rounded-full shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-base"
                    >
                        Sign Up
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NoUser;