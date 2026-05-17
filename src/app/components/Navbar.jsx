"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    // Mock authentication state for demonstration
    // Toggle this to true/false to see the different navbar states
    const [user, setUser] = useState({
        name: "John Doe",
        profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    });

    const handleLogout = () => {
        // Add your actual logout logic here
        setUser(null);
    };

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            {/* Logo + Name */}
            <div className="flex items-center space-x-3 cursor-pointer">
                <div className="flex items-center justify-center">
                    <Image 
                        src="/logo.png" 
                        alt="NovaMeD-BD Logo" 
                        width={40} 
                        height={40} 
                        className="object-contain"
                    />
                </div>
                <span className="text-xl font-bold text-gray-800 tracking-tight">
                    NovaMeD-BD
                </span>
            </div>

            {/* Navigation Links */}
        <div className="flex items-center space-x-8 font-medium text-gray-600">
    <Link href="/" className="hover:text-blue-600 transition-colors">
        Home
    </Link>
    <Link href="/all-appointment" className="hover:text-blue-600 transition-colors">
        All Appointment
    </Link>
    <Link href="/dashboard" className="hover:text-blue-600 transition-colors">
        Dashboard
    </Link>
</div>

            {/* Conditional Authentication UI */}
            <div className="flex items-center space-x-4">
                {user ? (
                    // If user is logged in
                    <div className="flex items-center space-x-4">
                        <Image
                            src={user.profilePic} 
                            alt={user.name} 
                            width={200}
                            height={200}
                            className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
                        />
                        <button 
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    // If no user is logged in
                    <div className="flex items-center space-x-3">
                        <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors">
                            Login
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                            Register
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;