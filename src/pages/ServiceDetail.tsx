import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES, CLINIC_INFO } from '../data/clinicData';
import { CheckCircle2, ArrowRight, Calendar, Phone } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors">
            <ArrowRight size={20} className="rotate-180" /> Back to Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-10">
              {service.details}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl">
                Book Consultation
              </Link>
              <div className="bg-blue-700/50 backdrop-blur-md px-8 py-4 rounded-full font-bold border border-white/20">
                {service.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-16">
              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Benefits of {service.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
                      <span className="font-semibold text-slate-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">The Procedure</h2>
                <div className="space-y-8 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-100">
                  {service.steps.map((step, i) => (
                    <div key={i} className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                        {i + 1}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step}</h4>
                      <p className="text-slate-600">Our expert team ensures every step is handled with precision and care.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/20 blur-2xl" />
                <h3 className="text-2xl font-bold mb-6">Need Help?</h3>
                <p className="text-slate-400 mb-8">Have questions about this treatment? Talk to our experts today.</p>
                <div className="space-y-4">
                  <a href={`tel:${CLINIC_INFO.phone}`} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                    <Phone className="text-blue-400" />
                    <span className="font-bold">{CLINIC_INFO.phone}</span>
                  </a>
                  <Link to="/contact" className="flex items-center gap-4 p-4 bg-blue-600 rounded-2xl hover:bg-blue-700 transition-colors">
                    <Calendar className="text-white" />
                    <span className="font-bold">Book Appointment</span>
                  </Link>
                </div>
              </div>

              <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Working Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Mon - Sat</span>
                    <span className="font-bold text-slate-900">{CLINIC_INFO.hours.mon_sat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sunday</span>
                    <span className="font-bold text-red-500">{CLINIC_INFO.hours.sun}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
