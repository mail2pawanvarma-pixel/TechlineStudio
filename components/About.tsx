
import React from 'react';
import { POSTER_DATA } from '../constants';
import { CheckCircle2, Award, Zap, Laptop } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/seed/tech1/400/500"
                alt="Tech Education"
                className="rounded-3xl shadow-2xl mt-8 transition-transform hover:-rotate-2 cursor-pointer"
              />
              <img
                src="https://picsum.photos/seed/tech2/400/500"
                alt="Cyber Security Lab"
                className="rounded-3xl shadow-2xl transition-transform hover:rotate-2 cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-10">
              <span className="text-red-600 font-bold tracking-widest uppercase text-sm">About Techline Studio</span>
              <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6 leading-tight">
                Modern Learning for the <br />
                <span className="text-blue-600">Next Generation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {POSTER_DATA.description}
              </p>
            </div>

            <div className="space-y-6">
              {POSTER_DATA.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500 group-hover:scale-125 transition-transform" />
                  </div>
                  <p className="text-gray-700 font-semibold text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl flex items-center space-x-4 border border-slate-100">
                <Award className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-gray-900">Certified Training</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl flex items-center space-x-4 border border-slate-100">
                <Zap className="h-8 w-8 text-red-600" />
                <span className="font-bold text-gray-900">100% Practical</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl flex items-center space-x-4 border border-slate-100 col-span-2">
                <Laptop className="h-8 w-8 text-indigo-600" />
                <span className="font-bold text-gray-900">Hands-on Lab Training Beside Shubh Honda</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
