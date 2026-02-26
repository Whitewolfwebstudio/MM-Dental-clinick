import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock, Users, ChevronRight, Play, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, SERVICES, TESTIMONIALS } from '../data/clinicData';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 opacity-70" />
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6 tracking-wider uppercase">
              <Star size={14} fill="currentColor" />
              Top Rated Dental Clinic in Karachi
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Premium Dental <br />
              <span className="text-blue-600">Care in Karachi</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Experience world-class dental treatments with Dr. Annas. From advanced orthodontics to painless root canals, we bring luxury dental care to Korangi.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group"
              >
                Book Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                WhatsApp Now
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pinimg.com/736x/f6/09/5a/f6095ae23f45923bed83317d6c63665b.jpg`}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    alt="Patient"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {CLINIC_INFO.googleRating} Google Rating (4 Reviews)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://i.pinimg.com/736x/0e/cf/07/0ecf07040c7806a0b017331a5d75d661.jpg"
                alt="Modern Dental Clinic"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:scale-110 transition-transform">
                <Play fill="currentColor" size={32} />
              </button>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-blue-50 z-20 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Certified</p>
                  <p className="text-sm font-bold text-slate-900">Advanced Sterilization</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-blue-50 z-20 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Experience</p>
                  <p className="text-sm font-bold text-slate-900">10+ Years Expertise</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">World-Class Dental Services</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide a comprehensive range of dental treatments using the latest technology and techniques to ensure the best results for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {/* Dynamic icon rendering would go here, using a placeholder for now */}
                  <Star size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-10">Setting the Standard in Dental Excellence</h3>
              
              <div className="space-y-8">
                {[
                  { title: "Modern Equipment", desc: "We use state-of-the-art dental technology for precise diagnosis and treatment." },
                  { title: "Experienced Dentist", desc: "Dr. Annas brings years of specialized experience in complex dental procedures." },
                  { title: "Painless Procedures", desc: "Our advanced techniques ensure minimal discomfort during all treatments." },
                  { title: "Clean & Sterile", desc: "We follow international standards for sterilization and clinic hygiene." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-8 border-white/10">
                <img
                  src="https://i.pinimg.com/736x/d1/09/14/d10914cd89cf455e6229427211868094.jpg"
                  alt="Modern Equipment"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-10 rounded-3xl shadow-2xl">
                <p className="text-5xl font-bold mb-2">5.0</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900">What Our Patients Say</h3>
            </div>
            <Link to="/testimonials" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Reviews <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-1 text-yellow-500 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.444747447874!2d67.1683416!3d24.8486111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a68f6a9f4c3%3A0x6a3b6a9f4c3a6a3b!2sKorangi%20No.5%20Road%2C%20Sector%2036%20A%20Market%2C%20Karachi!5e0!3m2!1sen!2spk!4v1708890000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Location</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">Visit Us in Korangi</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-blue-600 shrink-0" size={24} />
                  <p className="text-slate-600">{CLINIC_INFO.location}</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-blue-600 shrink-0" size={24} />
                  <p className="text-slate-600">{CLINIC_INFO.phone}</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-blue-600 shrink-0" size={24} />
                  <div>
                    <p className="text-slate-600">Mon - Sat: {CLINIC_INFO.hours.mon_sat}</p>
                    <p className="text-slate-600">Sun: {CLINIC_INFO.hours.sun}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a
                  href="https://goo.gl/maps/your-google-maps-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                >
                  Get Directions <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready for a Perfect Smile?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards a healthier, brighter smile with Dr. Annas.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="bg-blue-700 text-white border border-blue-500 px-10 py-5 rounded-full font-bold hover:bg-blue-800 transition-all"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
