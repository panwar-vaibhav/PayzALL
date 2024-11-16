import React from 'react';
import { Shield, Zap, Globe, BarChart, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Global Transactions',
    description: 'Execute payouts to your global workforce simultaneously, eliminating delays and reducing costs.'
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'Zero-Knowledge Proofs ensure complete data privacy while maintaining full compliance.'
  },
  {
    icon: BarChart,
    title: 'Automated Compliance',
    description: 'Smart contracts handle tax deductions and reporting automatically.'
  },
  {
    icon: Users,
    title: 'ESOP Management',
    description: 'Manage tokenized equity compensation with transparent claiming processes.'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Pay your team anywhere in the world with instant crypto transactions.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and multi-sig protection for your funds.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-crypto-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose PayzAll?
          </h2>
          <p className="text-xl text-gray-400">
            Experience the future of payroll management with our cutting-edge features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-crypto-card border border-gray-800 hover:border-indigo-600/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}