import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data/clinicData';
import { Award, Heart, CheckCircle2, ShieldCheck, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Our Story</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              MM Dental Care Clinic was founded with a single mission: to provide premium, high-trust dental care to the community of Karachi. We believe everyone deserves a healthy, confident smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dr. Annas Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <img
                  src="https://i.pinimg.com/1200x/0a/26/83/0a2683be69721321922e38281caf5a07.jpg"
                  alt="Dr. Annas"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
                <p className="text-2xl font-bold mb-1">{CLINIC_INFO.doctor}</p>
                <p className="text-sm opacity-80 font-medium uppercase tracking-widest">Lead Dentist</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Meet the Expert</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">Expertise You Can Trust</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Dr. Annas is a highly skilled dental professional with a passion for restorative and cosmetic dentistry. With years of experience in Karachi's leading dental institutions, he brings a wealth of knowledge to MM Dental Care.
                </p>
                <p>
                  Specializing in advanced procedures like dental implants and complex orthodontics, Dr. Annas is committed to staying at the forefront of dental technology to provide his patients with the best possible care.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <Award size={20} />
                    </div>
                    <span className="font-bold text-slate-900">Certified Expert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                      <Star size={20} />
                    </div>
                    <span className="font-bold text-slate-900">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide our practice every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Patient Comfort", desc: "We prioritize your comfort and peace of mind during every procedure." },
              { icon: ShieldCheck, title: "Quality Care", desc: "We never compromise on the quality of materials or treatments." },
              { icon: CheckCircle2, title: "Transparency", desc: "Clear communication about procedures, costs, and expectations." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
