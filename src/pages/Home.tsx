import React from 'react';
import { Trophy, Users, Video, ChevronRight, Globe, Shield, BarChart, Brain, Cpu, Target } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">Revolutionary AI-Powered Hockey Scouting</h1>
            <p className="text-xl mb-8">Advanced machine learning algorithms that analyze and evaluate NHL player abilities, including the intangible "hockey sense" with unprecedented accuracy.</p>
            <button className="bg-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 flex items-center">
              Discover Our Technology
              <ChevronRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&q=80"
              alt="Professional hockey game in action"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Scouting Revolution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Hockey Sense Analysis</h3>
              <p className="text-gray-600">Proprietary algorithms that quantify and evaluate player decision-making, spatial awareness, and game reading abilities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Cpu className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Machine Learning Engine</h3>
              <p className="text-gray-600">Advanced AI models trained on decades of NHL data to identify patterns and predict player potential.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Precision Metrics</h3>
              <p className="text-gray-600">Comprehensive evaluation system that combines traditional stats with AI-driven insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transforming NHL Scouting</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Trophy className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-gray-600">NHL Teams & Organizations</p>
            </div>
            <div>
              <Globe className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <Shield className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-gray-600">Prediction Accuracy</p>
            </div>
            <div>
              <Video className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <p className="text-4xl font-bold mb-2">500K+</p>
              <p className="text-gray-600">Games Analyzed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Scouting Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join the future of hockey talent evaluation with our AI-powered scouting platform.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
            Request Demo
          </button>
        </div>
      </section>
    </>
  );
}