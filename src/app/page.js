import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col font-sans">

      {/* Hero Section */}
      <main className="grow flex items-center justify-center relative overflow-hidden px-4 py-20 sm:py-32">

        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-3xl h-[80%] blur-[120px] opacity-20 pointer-events-none bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="badge badge-primary badge-outline mb-6 py-3 px-4 font-semibold text-sm rounded-full shadow-sm">
            🚀 Master Authentication Today
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 text-base-content leading-tight">
            Secure Your App with <br />
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next-Level Auth
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-base-content/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            A practice playground to master user flows. Build seamless Sign In, Sign Up, and protected dashboard experiences using modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/sign-up"
              className="btn btn-primary rounded-full px-8 py-3 h-auto text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all w-full sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/auth/sign-in"
              className="btn btn-outline border-base-300 hover:bg-base-200 hover:border-base-300 hover:text-base-content rounded-full px-8 py-3 h-auto text-lg font-semibold transition-all w-full sm:w-auto"
            >
              Existing User? Sign In
            </Link>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-base-200 py-24 px-4 border-t border-base-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">Why Authentication Matters</h2>
            <p className="text-lg text-base-content/70 max-w-xl mx-auto">
              Explore the core security features we are building and implementing in this practice project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Sign Up",
                desc: "Collect user data safely with validated forms, instant feedback, and robust error handling.",
                icon: "📝"
              },
              {
                title: "Secure Login",
                desc: "Verify credentials and issue secure session tokens to keep personal data strictly private.",
                icon: "🔒"
              },
              {
                title: "Protected Routes",
                desc: "Ensure only authenticated users can bypass the 'Access Restricted' page and view the dashboard.",
                icon: "🛡️"
              }
            ].map((feature, idx) => (
              <div key={idx} className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow border border-base-200 hover:-translate-y-1 duration-300">
                <div className="card-body items-center text-center p-8">
                  <div className="text-5xl mb-4 p-4 bg-base-200 rounded-full">{feature.icon}</div>
                  <h3 className="card-title text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-base-content/70 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="footer footer-center p-10 bg-base-100 text-base-content/60 border-t border-base-200">
        <aside>
          <p className="font-medium">Copyright © {new Date().getFullYear()} - Built for Next.js Auth Practice</p>
        </aside>
      </footer>

    </div>
  );
};

export default HomePage;