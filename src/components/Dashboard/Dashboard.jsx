import Image from 'next/image';
import React from 'react';

const DashboardPage = ({ user }) => {
    // Fake data for the dashboard
    const stats = [
        { title: "Total Revenue", value: "$45,231", trend: "+20.1%", icon: "💰", color: "text-success" },
        { title: "Active Users", value: "2,314", trend: "+15.3%", icon: "👥", color: "text-primary" },
        { title: "New Signups", value: "342", trend: "-4.2%", icon: "📈", color: "text-error" },
    ];

    const activities = [
        { id: 1, user: "Alice Johnson", action: "Created an account", time: "2 mins ago", status: "success", label: "Completed" },
        { id: 2, user: "Bob Smith", action: "Updated billing info", time: "1 hour ago", status: "info", label: "Pending" },
        { id: 3, user: "Charlie Davis", action: "Failed login attempt", time: "3 hours ago", status: "error", label: "Failed" },
        { id: 4, user: "Diana Prince", action: "Upgraded to Pro plan", time: "5 hours ago", status: "success", label: "Completed" },
    ];

    return (
        <div className="min-h-screen bg-base-200 flex font-sans">

            {/* Sidebar (Desktop Only) */}
            <aside className="w-64 bg-base-100 border-r border-base-300 hidden md:flex flex-col p-4 shadow-sm z-10">
                <div className="text-2xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-8 px-2 tracking-tight">
                    MyDashboard
                </div>
                <ul className="menu menu-md w-full p-0 gap-2 flex-1 text-base-content/80 font-medium">
                    <li><a className="active bg-primary/10 text-primary">Overview</a></li>
                    <li><a className="hover:bg-base-200">User Management</a></li>
                    <li><a className="hover:bg-base-200">Analytics</a></li>
                    <li><a className="hover:bg-base-200">Settings</a></li>
                </ul>
                {/* Place your signOut function on this button later */}
                <button className="btn btn-outline btn-error w-full mt-auto rounded-full">
                    Sign Out
                </button>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">

                {/* Header */}
                <header className="h-16 bg-base-100/80 backdrop-blur-md border-b border-base-200 flex items-center justify-between px-4 sm:px-8 z-20">
                    <div className="flex items-center gap-2 md:hidden">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <span className="text-xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">MD</span>
                    </div>

                    <div className="hidden md:block">
                        <h2 className="text-xl font-semibold text-base-content">Dashboard Overview</h2>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-5">
                        <button className="btn btn-circle btn-ghost">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-content/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            </div>
                        </button>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer transition-transform hover:scale-105">
                                <Image src="https://i.pravatar.cc/150?u=amity" alt="User Avatar" width={40} height={40} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Dashboard Content */}
                <main className="flex-1 p-4 sm:p-8 overflow-y-auto">

                    {/* Greeting */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-base-content">Welcome back, {user.name}! 👋</h1>
                        <p className="text-base-content/70 mt-2 text-lg">Here is what is happening with your application today.</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat bg-base-100 rounded-3xl shadow-sm border border-base-200 hover:shadow-md transition-shadow">
                                <div className="stat-figure text-4xl">{stat.icon}</div>
                                <div className="stat-title text-base-content/60 font-medium mb-1">{stat.title}</div>
                                <div className="stat-value text-base-content text-3xl">{stat.value}</div>
                                <div className={`stat-desc font-semibold mt-2 ${stat.color}`}>
                                    {stat.trend} from last month
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity Table */}
                    <div className="bg-base-100 rounded-3xl shadow-sm border border-base-200 p-6 sm:p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-base-content">Recent Auth Activity</h3>
                            <button className="btn btn-sm btn-ghost text-primary">View All</button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr className="text-base-content/60 border-base-200 uppercase text-xs tracking-wider">
                                        <th>User</th>
                                        <th>Action</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activities.map((item) => (
                                        <tr key={item.id} className="hover:bg-base-200/50 transition-colors border-base-200">
                                            <td className="font-semibold text-base-content">{item.user}</td>
                                            <td className="text-base-content/80">{item.action}</td>
                                            <td className="text-base-content/60 text-sm">{item.time}</td>
                                            <td>
                                                <span className={`badge badge-${item.status} badge-outline badge-sm font-medium`}>
                                                    {item.label}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default DashboardPage;