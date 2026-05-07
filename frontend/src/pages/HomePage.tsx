import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Sparkles, Wrench, Droplets, Paintbrush, Leaf, Scissors, Star, ArrowRight, Home, Truck, Bug, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import cleaningImg from '../assets/cleaning.png';
import electricalImg from '../assets/electrical.png';
import plumbingImg from '../assets/plumbing.png';
import paintingImg from '../assets/painting.png';
import gardeningImg from '../assets/gardening.png';
import repairImg from '../assets/repair.png';
import barberImg from '../assets/barber.png';
import beautyImg from '../assets/beauty.png';
import carpentryImg from '../assets/carpentery.png';
import movingImg from '../assets/moving.png';
import pestImg from '../assets/pest.png';
import securityImg from '../assets/security.png';

const SERVICE_CATEGORIES = [
  {
    name: 'Cleaning',
    icon: Sparkles,
    desc: 'Deep clean & sanitize',
    image: cleaningImg,
    color: 'from-blue-500/80',
  },
  {
    name: 'Electrical',
    icon: Zap,
    desc: 'Wiring, fixtures & more',
    image: electricalImg,
    color: 'from-yellow-500/80',
  },
  {
    name: 'Plumbing',
    icon: Droplets,
    desc: 'Pipes, leaks & drains',
    image: plumbingImg,
    color: 'from-cyan-500/80',
  },
  {
    name: 'Painting',
    icon: Paintbrush,
    desc: 'Interior & exterior',
    image: paintingImg,
    color: 'from-orange-500/80',
  },
  {
    name: 'Gardening',
    icon: Leaf,
    desc: 'Lawn care & landscaping',
    image: gardeningImg,
    color: 'from-green-500/80',
  },
  {
    name: 'Repair',
    icon: Wrench,
    desc: 'Home & appliance fixes',
    image: repairImg,
    color: 'from-red-500/80',
  },
  {
    name: 'Barber',
    icon: Scissors,
    desc: 'Haircut & grooming',
    image: barberImg,
    color: 'from-purple-500/80',
  },
  {
    name: 'Beauty',
    icon: Star,
    desc: 'Salon & spa at home',
    image: beautyImg,
    color: 'from-pink-500/80',
  },
  {
    name: 'Carpentry',
    icon: Home,
    desc: 'Furniture & woodwork',
    image: carpentryImg,
    color: 'from-amber-700/80',
  },
  {
    name: 'Moving',
    icon: Truck,
    desc: 'Packing & relocation',
    image: movingImg,
    color: 'from-indigo-500/80',
  },
  {
    name: 'Pest',
    icon: Bug,
    desc: 'Control & prevention',
    image: pestImg,
    color: 'from-lime-600/80',
  },
  {
    name: 'Security',
    icon: Shield,
    desc: 'CCTV & alarm setup',
    image: securityImg,
    color: 'from-slate-600/80',
  },
];


const HomePage: React.FC = () => {

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative px-6 pt-10">
        <div className="mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-600 rounded-full text-sm font-bold mb-6 border border-brand-100">
                <ShieldCheck size={16} />
                Trusted by 50,000+ Customers
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-ink-1 leading-[1.1] mb-6 tracking-tight">
                Fix Everything at <span className="text-gradient">Fixora.</span>
              </h1>
              <p className="text-xl text-ink-2 mb-10 leading-relaxed max-w-lg">
                Book professional local services in seconds. From plumbing to painting, we've got the experts you need.
              </p>
              

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-premium">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2959443?auto=format&fit=crop&q=80&w=1200" 
                  alt="" 
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl z-20 shadow-premium"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-teal rounded-full flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-ink-1">Verified Expert</div>
                    <div className="text-xs text-ink-2">Background Checked</div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl z-20 shadow-premium"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-ink-1">Quick Booking</div>
                    <div className="text-xs text-ink-2">In under 2 minutes</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-ink-1 mb-3">Our <span className="text-gradient">Services</span></h2>
              <p className="text-ink-2 font-medium">Everything your home needs, all in one place.</p>
            </div>
            <Link to="/services">
              <Button variant="secondary" className="hidden sm:flex items-center gap-2">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <Link
                  to={`/services?category=${cat.name}`}
                  className="block relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Background image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-80`} />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white">
                        <cat.icon size={16} />
                      </div>
                      <h3 className="font-black text-white text-lg leading-tight">{cat.name}</h3>
                    </div>
                    <p className="text-white/80 text-xs font-medium">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="px-6 py-20 bg-surface-dark rounded-[3rem] mx-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Built for Trust.</h2>
            <p className="text-brand-100/70 text-lg">We provide a seamless experience from booking to completion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Every provider is background checked and verified for your peace of mind.' },
              { icon: Heart, title: 'Happiness Guarantee', desc: 'Not satisfied with the job? We will make it right, guaranteed.' },
              { icon: Zap, title: 'Instant Support', desc: 'Our customer support team is available 24/7 to help you out.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-500 mx-auto mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-brand-100/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
