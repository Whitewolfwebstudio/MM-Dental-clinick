import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: 1, category: 'Braces', title: 'Orthodontic Correction', before: 'https://i.pinimg.com/736x/df/41/38/df4138cd5ead262c3655c50900ec4265.jpg', after: 'https://i.pinimg.com/736x/90/99/4e/90994ee9013ef7bcfc2ebd7f74c8f580.jpg' },
  { id: 2, category: 'Implants', title: 'Full Mouth Restoration', before: 'https://i.pinimg.com/1200x/38/a0/4d/38a04d2c6b165845d4080146a1317107.jpg', after: 'https://i.pinimg.com/736x/af/fb/52/affb52bc161f69b9ade65bd4023cb8df.jpg' },
  { id: 3, category: 'Whitening', title: 'Professional Whitening', before: 'https://i.pinimg.com/736x/d7/6c/c7/d76cc7d453d47cb9faea841dc9c65760.jpg', after: 'https://i.pinimg.com/736x/fa/a8/0c/faa80ce333d2782f6eb5a898ded2d757.jpg' },
  { id: 4, category: 'Braces', title: 'Teeth Alignment', before: 'https://i.pinimg.com/1200x/aa/16/b2/aa16b2b81fb58b147a87a6ed20faab3d.jpg', after: 'https://i.pinimg.com/1200x/ce/89/db/ce89dba40e1c213fbd5bb1c67b3eef89.jpg' },
  { id: 5, category: 'Scaling', title: 'Deep Cleaning', before: 'https://i.pinimg.com/1200x/5d/cc/c8/5dccc8eef5ccf9567aa168d7205cc87a.jpg', after: 'https://i.pinimg.com/1200x/c9/6e/43/c96e431b64c24334b55e1b9f8c1b5550.jpg' },
  { id: 6, category: 'Implants', title: 'Single Tooth Implant', before: 'https://i.pinimg.com/736x/40/fc/6a/40fc6a1498996292c6334a4817fc7396.jpg', after: 'https://i.pinimg.com/736x/8c/3d/d4/8c3dd452791ea9b2602996dccdb14095.jpg' },
];

const CATEGORIES = ['All', 'Braces', 'Implants', 'Whitening', 'Scaling'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Smile Gallery</h1>
            <p className="text-lg text-slate-600">
              Real results from our real patients. See the transformations we've achieved at MM Dental Care.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={item.after}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div>
                        <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">{item.category}</p>
                        <h4 className="text-white font-bold text-xl">{item.title}</h4>
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative p-4 flex justify-end">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-center font-bold text-slate-500 uppercase tracking-widest text-xs">Before</p>
                  <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                    <img src={selectedItem.before} alt="Before" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-center font-bold text-blue-600 uppercase tracking-widest text-xs">After</p>
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] border-4 border-blue-100">
                    <img src={selectedItem.after} alt="After" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedItem.title}</h3>
                <p className="text-slate-500">{selectedItem.category} Treatment</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
