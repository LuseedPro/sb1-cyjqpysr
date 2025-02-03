import React from 'react';
import { Users, Layout, Presentation, ChevronRight, BarChart2, Briefcase, DollarSign, LineChart } from 'lucide-react';

export function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Professional Scouting Solutions</h1>
          <p className="text-xl mb-8 max-w-2xl">Empowering teams with comprehensive player evaluation tools backed by our team of 33 expert scouts and cutting-edge AI technology.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Player Management</h3>
              <p className="text-gray-600 mb-4">Comprehensive player profiles with scout evaluations, stats, and performance metrics.</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Detailed stat tracking</li>
                <li>• Scout evaluations</li>
                <li>• Performance history</li>
                <li>• Video highlights</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Layout className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Team Management</h3>
              <p className="text-gray-600 mb-4">Strategic tools for team organization, game planning, and roster optimization.</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Digital whiteboard</li>
                <li>• Game management</li>
                <li>• Budget planning</li>
                <li>• Performance predictions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Presentation className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Scouting Reports</h3>
              <p className="text-gray-600 mb-4">Customizable reports combining expert analysis with AI-driven insights.</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Printable formats</li>
                <li>• Digital sharing</li>
                <li>• Custom metrics</li>
                <li>• Comparative analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Team Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80"
                alt="Hockey team strategy session"
                className="rounded-lg shadow-xl mb-8"
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <BarChart2 className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
                    <p className="text-gray-600">Advanced metrics and AI-driven insights for player and team evaluation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Player Marketplace</h3>
                    <p className="text-gray-600">Streamlined platform for player trading, scouting, and recruitment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Why Choose Team 33?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-500 mr-3" />
                    <span>Cost-effective scouting solutions</span>
                  </li>
                  <li className="flex items-center">
                    <LineChart className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Data-driven decision making</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 text-purple-500 mr-3" />
                    <span>Expert scout network</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 inline-flex items-center">
                  Schedule a Demo
                  <ChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}