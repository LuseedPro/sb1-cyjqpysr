import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center mb-4">
              <Play className="w-6 h-6 mr-2" />
              TEAM 33
            </Link>
            <p className="text-gray-400">Revolutionizing hockey scouting with advanced AI technology.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Technology</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/technology/ai-engine" className="hover:text-white">AI Engine</Link></li>
              <li><Link to="/technology/player-analysis" className="hover:text-white">Player Analysis</Link></li>
              <li><Link to="/technology/performance-metrics" className="hover:text-white">Performance Metrics</Link></li>
              <li><Link to="/technology/scouting-reports" className="hover:text-white">Scouting Reports</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/resources/research" className="hover:text-white">Research Papers</Link></li>
              <li><Link to="/resources/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/resources/docs" className="hover:text-white">Documentation</Link></li>
              <li><Link to="/resources/api" className="hover:text-white">API Access</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Team 33. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}