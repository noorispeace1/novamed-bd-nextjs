"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const [user, setUser] = useState({
        name: "John Doe",
        profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    });

    const handleLogout = () => {
        setUser(null);
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'All Appointment', href: '/all-appointment' },
        { name: 'Dashboard', href: '/dashboard' },
    ];

    return (
        <nav className="bg-gradient-to-r from-teal-50 via-teal-50/30 to-emerald-50/50 border-b border-teal-100/80 shadow-sm relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
                        <div className="bg-teal-600/10 p-2 rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                            {/* ফিক্সড ইমেজ পাথ এবং অবজেক্ট ফিট */}
                            <Image 
                                src="/logo.png" 
                                alt="NovaMeD-BD Logo" 
                                width={36} 
                                height={36} 
                                className="object-contain" 
                                priority
                            />
                        </div>
                        {/* লোগোর পাশের ব্র্যান্ড নেম */}
                        <span className="text-xl font-extrabold bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent tracking-tight">
                            NovaMeD<span className="text-teal-500">-</span>BD
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1 font-semibold">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link 
                                    key={link.href}
                                    href={link.href} 
                                    className={`px-5 py-2.5 rounded-xl transition-all duration-300 text-sm tracking-wide ${
                                        isActive 
                                            ? "bg-teal-600 text-white shadow-md shadow-teal-600/20" 
                                            : "text-slate-600 hover:bg-teal-600/10 hover:text-teal-700"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4 bg-teal-900/5 pl-3 pr-2 py-1.5 rounded-2xl border border-teal-900/5">
                                <span className="text-sm font-semibold text-teal-900">{user.name}</span>
                                <Image
                                    src={user.profilePic} 
                                    alt={user.name} 
                                    width={38}
                                    height={38}
                                    className="w-9 h-9 rounded-xl border-2 border-teal-500 object-cover shadow-sm"
                                />
                                <button 
                                    onClick={handleLogout}
                                    className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl font-bold transition-all duration-200 text-xs tracking-wider uppercase shadow-sm"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link 
                                    href="/login"
                                    className={`px-5 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm ${
                                        pathname === '/login'
                                            ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                                            : "text-teal-700 hover:bg-teal-600/10 hover:text-teal-800"
                                    }`}
                                >
                                    Login
                                </Link>
                                <Link 
                                    href="/register"
                                    className={`px-5 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm shadow-md ${
                                        pathname === '/register'
                                            ? "bg-teal-700 text-white shadow-teal-700/20"
                                            : pathname === '/login'
                                                ? "text-teal-700 hover:bg-teal-600/10 hover:text-teal-800"
                                                : "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-teal-600/20"
                                    }`}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2.5 rounded-xl text-teal-700 hover:text-teal-900 hover:bg-teal-100/60 focus:outline-none transition-all border border-teal-100"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md left-0 shadow-xl border-b border-teal-50 transition-all duration-300 ease-in-out ${
                    isOpen ? "top-20 opacity-100 visible" : "-top-96 opacity-0 invisible"
                }`}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                                    isActive
                                        ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-600/10"
                                        : "text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <hr className="my-4 border-teal-50" />

                    <div className="px-2">
                        {user ? (
                            <div className="flex items-center justify-between bg-teal-50/50 p-3 rounded-xl border border-teal-100/50">
                                <div className="flex items-center space-x-3">
                                    <Image
                                        src={user.profilePic}
                                        alt={user.name}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-xl border-2 border-teal-500 object-cover"
                                    />
                                    <span className="text-teal-900 font-bold text-sm">{user.name}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl font-bold transition-colors text-xs uppercase tracking-wider"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-2.5">
                                <Link 
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className={`w-full text-center font-bold py-3 rounded-xl transition-all text-sm ${
                                        pathname === '/login'
                                            ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md"
                                            : "text-teal-700 hover:bg-teal-50 border border-teal-200/60"
                                    }`}
                                >
                                    Login
                                </Link>
                                <Link 
                                    href="/register"
                                    onClick={() => setIsOpen(false)}
                                    className={`w-full text-center font-bold py-3 rounded-xl transition-all text-sm shadow-md ${
                                        pathname === '/register'
                                            ? "bg-teal-700 text-white"
                                            : pathname === '/login'
                                                ? "text-teal-700 hover:bg-teal-50 border border-teal-200/60"
                                                : "bg-gradient-to-r from-teal-600 to-emerald-600 text-white"
                                    }`}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;