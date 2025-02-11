import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

export function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Flexible Pricing Plans</h1>
          <p className="text-xl mb-8 max-w-2xl">Choose the perfect plan for your scouting needs with our tiered subscription options.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fan Tier */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Fan Tier</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for hockey enthusiasts and fantasy league players.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic player statistics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Limited scouting reports</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Player comparison tools</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
                Get Started
              </button>
            </div>

            {/* General Tier */}
            <div className="bg-blue-600 p-8 rounded-lg shadow-lg text-white transform scale-105">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-tr-lg rounded-bl-lg">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Scout</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$19.99</span>
                <span className="text-gray-200">/month</span>
              </div>
              <p className="text-gray-200 mb-6">Ideal for scouts and analysts.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span>Advanced scouting tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span>Full player evaluations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span>Custom report generation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span>Video analysis tools</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                Start Free Trial
              </button>
            </div>

            {/* Professional Tier */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">General Manager</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For professional teams and organizations.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>All General Tier features</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Real-time analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Team management tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer tailored packages for leagues, organizations, and special use cases.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 inline-flex items-center">
            Let's Talk
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}
