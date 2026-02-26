import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export default function Testimonials() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Patient Stories</h1>
            <p className="text-lg text-slate-600">
              We take pride in the smiles we've helped create. Read what our patients have to say about their experience at MM Dental Care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 relative"
              >
                <div className="absolute top-10 right-12 text-blue-100">
                  <Quote size={80} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 text-yellow-500 mb-8">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-xl text-slate-700 italic mb-10 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <User size={32} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-24 pt-20 border-t border-slate-200">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              <div className="flex items-center gap-2 font-bold text-2xl">Google Reviews</div>
              <div className="flex items-center gap-2 font-bold text-2xl">HealthCare PK</div>
              <div className="flex items-center gap-2 font-bold text-2xl">Dental Council</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
