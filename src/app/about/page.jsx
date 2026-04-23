import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    // Fake team data
    const team = [
        { name: "Alice Johnson", role: "CEO & Founder", img: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
        { name: "Bob Smith", role: "Lead Developer", img: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
        { name: "Charlie Davis", role: "Head of Design", img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
    ];

    return (
        <div className="min-h-screen bg-base-200 py-16 px-4 sm:px-6 lg:px-8">

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl p-3 sm:text-5xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Building the Future, Today.
                </h1>
                <p className="text-lg text-base-content/80">
                    We are a collective of dreamers, designers, and developers. Our mission is to craft intuitive digital experiences that empower people and simplify the complex.
                </p>
            </div>

            {/* Stats Section */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {[
                    { label: "Active Users", value: "10K+" },
                    { label: "Projects Completed", value: "500+" },
                    { label: "Team Members", value: "25" },
                    { label: "Coffee Consumed", value: "9,001 ☕" },
                ].map((stat, idx) => (
                    <div key={idx} className="stat bg-base-100 shadow-sm rounded-box text-center place-items-center">
                        <div className="stat-value text-primary text-3xl">{stat.value}</div>
                        <div className="stat-desc text-base-content/70 mt-1 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Team Section */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-base-content">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow items-center text-center p-6">
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        width={96}
                                        height={96}
                                        className="rounded-full" 
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-primary font-medium mt-1">{member.role}</p>
                            <p className="text-sm text-base-content/70 mt-3">
                                Passionate about creating seamless user experiences and writing clean, scalable code.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AboutPage;