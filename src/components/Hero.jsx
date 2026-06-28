import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Quality Healthcare at Your Service
            </h1>
            <p className="text-lg text-teal-100 mb-8">
              Sannvitha Hospitals is committed to providing world-class medical services with cutting-edge technology and compassionate care. Your health is our priority.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2">
                Book Appointment <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-teal-700 font-semibold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="bg-teal-500 rounded-lg shadow-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <p className="text-xl font-semibold">Modern Medical Facility</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">500+</h3>
            <p className="text-teal-100 mt-2">Doctors & Specialists</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">50K+</h3>
            <p className="text-teal-100 mt-2">Happy Patients</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">25+</h3>
            <p className="text-teal-100 mt-2">Medical Departments</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">24/7</h3>
            <p className="text-teal-100 mt-2">Emergency Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
