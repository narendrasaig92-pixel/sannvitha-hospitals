import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Emergency Care',
      description: '24/7 emergency medical services with trained staff and modern equipment',
      features: ['Rapid Response', 'ICU Facilities', 'Trauma Center']
    },
    {
      title: 'Outpatient Services',
      description: 'Comprehensive outpatient care and consultation with specialist doctors',
      features: ['Consultation', 'Diagnostics', 'Prescription']
    },
    {
      title: 'Inpatient Services',
      description: 'Comfortable hospital rooms and comprehensive inpatient care programs',
      features: ['Private Rooms', 'Nursing Care', '24-hour Monitoring']
    },
    {
      title: 'Surgical Services',
      description: 'Advanced surgical procedures with state-of-the-art operation theaters',
      features: ['General Surgery', 'Laparoscopic Surgery', 'Emergency Surgery']
    },
    {
      title: 'Diagnostic Services',
      description: 'Complete diagnostic facilities including imaging and laboratory tests',
      features: ['CT Scan', 'MRI', 'Blood Tests', 'Ultrasound']
    },
    {
      title: 'Rehabilitation',
      description: 'Post-operative and recovery rehabilitation programs',
      features: ['Physiotherapy', 'Occupational Therapy', 'Counseling']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Complete range of healthcare services for all your medical needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md card-hover"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={20} className="text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
