import React from 'react';
import { FileText, Book, Video, Code, ChevronRight, Download } from 'lucide-react';

export function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Resources & Documentation</h1>
          <p className="text-xl mb-8 max-w-2xl">Access comprehensive guides, research papers, and case studies about our AI-powered scouting technology.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Research Papers</h2>
                <p className="text-gray-600 mb-6">Access our latest research on AI in sports analytics and player evaluation methodologies.</p>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span>AI in Hockey Analytics 2024</span>
                    <Download className="w-5 h-5 text-blue-600" />
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span>Player Evaluation Metrics</span>
                    <Download className="w-5 h-5 text-blue-600" />
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Book className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
                <p className="text-gray-600 mb-6">Real-world examples of how teams have benefited from our scouting platform.</p>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span>NHL Team Success Story</span>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span>Draft Analysis 2023</span>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Video className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Tutorial Videos</h2>
                <p className="text-gray-600 mb-6">Learn how to maximize the potential of our scouting platform.</p>
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg"></div>
                  <h3 className="font-semibold">Platform Overview</h3>
                  <p className="text-gray-600">A comprehensive guide to using Team 33's scouting tools.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">API Documentation</h2>
                <p className="text-gray-600 mb-6">Technical documentation for integrating with our platform.</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 inline-flex items-center">
                  Access API Docs
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