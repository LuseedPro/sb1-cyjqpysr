import React from 'react';
import { Brain, Cpu, Target, ChevronRight } from 'lucide-react';

export function Technology() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Technology</h1>
          <p className="text-xl mb-8 max-w-2xl">Leveraging cutting-edge AI and machine learning to revolutionize hockey player evaluation and scouting.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Advanced Player Analysis</h2>
                <p className="text-gray-600">Our AI algorithms analyze player movements, decision-making patterns, and game interactions to quantify hockey sense and predict player potential.</p>
              </div>
              <div>
                <Cpu className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Machine Learning Core</h2>
                <p className="text-gray-600">Trained on millions of data points from professional hockey games, our ML models identify subtle patterns that human scouts might miss.</p>
              </div>
              <div>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Real-time Analytics</h2>
                <p className="text-gray-600">Get instant insights during games with our real-time analysis system, helping teams make data-driven decisions on the fly.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1515703407324-5f73fb9696b4?auto=format&fit=crop&q=80"
                alt="Hockey analytics visualization"
                className="rounded-lg shadow-xl mb-8"
              />
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                <ul className="space-y-4 text-gray-600">
                  <li>• Neural network architecture optimized for sports analysis</li>
                  <li>• Real-time processing of multi-camera feeds</li>
                  <li>• Advanced pattern recognition algorithms</li>
                  <li>• Proprietary player tracking technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Future of Hockey Scouting</h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 inline-flex items-center">
            Schedule a Demo
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}