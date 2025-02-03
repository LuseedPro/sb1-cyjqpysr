import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Play className="w-8 h-8 mr-2" />
            TEAM 33
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/technology" 
              className={`hover:text-gray-300 ${location.pathname === '/technology' ? 'text-blue-400' : ''}`}
            >
              Technology
            </Link>
            <Link 
              to="/solutions" 
              className={`hover:text-gray-300 ${location.pathname === '/solutions' ? 'text-blue-400' : ''}`}
            >
              Solutions
            </Link>
            <Link 
              to="/resources" 
              className={`hover:text-gray-300 ${location.pathname === '/resources' ? 'text-blue-400' : ''}`}
            >
              Resources
            </Link>
            <Link 
              to="/pricing" 
              className={`hover:text-gray-300 ${location.pathname === '/pricing' ? 'text-blue-400' : ''}`}
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            to="/login" 
            className={`px-4 py-2 text-sm hover:text-gray-300 ${location.pathname === '/login' ? 'text-blue-400' : ''}`}
          >
            Log In
          </Link>
          <Link to="/try-free" className="bg-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Try for Free
          </Link>
        </div>
      </nav>
    </header>
  );
}