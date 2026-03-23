import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Star, ChevronRight, Instagram, Facebook, Scissors, Sparkles, GraduationCap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-rose-200 selection:text-rose-900">
      {/* Top Bar */}
      <div className="bg-stone-900 text-stone-300 py-2 px-4 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center z-50 relative">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <a href="tel:09179767000" className="flex items-center hover:text-rose-400 transition-colors">
            <Phone className="w-3 h-3 mr-2" />
            09179767000
          </a>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-2" />
            Open Daily: 10:00 AM - 8:00 PM
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://maps.app.goo.gl/rZWoDtVteNmH7sfb8" target="_blank" rel="noreferrer" className="flex items-center hover:text-rose-400 transition-colors">
            <MapPin className="w-3 h-3 mr-2" />
            Arera Colony, Bhopal
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
                Ideal Family <span className="text-rose-600">Salon</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-stone-600 hover:text-rose-600 font-medium transition-colors">Services</a>
              <a href="#academy" className="text-stone-600 hover:text-rose-600 font-medium transition-colors">Academy</a>
              <a href="#about" className="text-stone-600 hover:text-rose-600 font-medium transition-colors">About Us</a>
            </div>
            <div className="flex items-center">
              <a 
                href="tel:09179767000"
                className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm shadow-rose-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop" 
            alt="Beautiful bride getting makeup done" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 text-rose-200 text-sm font-semibold tracking-wider uppercase mb-6 border border-rose-500/30">
              Bhopal's Premier Beauty Destination
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Reveal Your <span className="text-rose-400 italic">Perfect</span> Look
            </h2>
            <p className="text-lg text-stone-300 mb-8 max-w-xl leading-relaxed">
              Expert bridal make-up, premium grooming services, and a professional training academy. Experience luxury beauty care at Ideal Family Salon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:09179767000"
                className="inline-flex justify-center items-center bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-medium transition-all text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call to Book
              </a>
              <a 
                href="https://maps.app.goo.gl/rZWoDtVteNmH7sfb8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all text-lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-rose-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Premium Services for Every Occasion</h2>
            <p className="text-stone-600 text-lg">From your special wedding day to regular grooming, our expert stylists ensure you always look your absolute best.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop" 
                  alt="Bridal Makeup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-rose-600">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-3">Bridal Make-up</h4>
                <p className="text-stone-600 mb-6 line-clamp-3">
                  Flawless, long-lasting bridal makeup tailored to your features and wedding theme. Let us make your special day truly unforgettable.
                </p>
                <a href="tel:09179767000" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700">
                  Book Consultation <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop" 
                  alt="Beauty & Grooming" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-rose-600">
                  <Scissors className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-3">Beauty & Grooming</h4>
                <p className="text-stone-600 mb-6 line-clamp-3">
                  Comprehensive grooming services including haircuts, styling, facials, manicures, and pedicures for a complete refresh.
                </p>
                <a href="tel:09179767000" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700">
                  View Services <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" 
                  alt="Training Academy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-rose-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-3">Training Academy</h4>
                <p className="text-stone-600 mb-6 line-clamp-3">
                  Start your career in the beauty industry. Professional certification courses in makeup, hair styling, and salon management.
                </p>
                <a href="tel:09179767000" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700">
                  Enroll Now <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 bg-rose-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready for a Transformation?</h2>
          <p className="text-rose-200 text-lg mb-10">Visit us in Arera Colony, Bhopal, and let our expert stylists work their magic.</p>
          <a 
            href="tel:09179767000"
            className="inline-block bg-white text-rose-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-colors shadow-lg"
          >
            Call 09179767000
          </a>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="about" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-rose-600 font-semibold tracking-wide uppercase text-sm mb-3">Visit Us</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Your Local Beauty Haven in Bhopal</h2>
              <p className="text-stone-600 text-lg mb-8">
                Conveniently located in Arera Colony, Ideal Family Salon provides a relaxing, luxurious environment where you can unwind while we take care of your beauty needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 text-rose-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-stone-900">Address</h4>
                    <p className="text-stone-600 mt-1">44-A, E-5, Main Road, near Baghira Appartment,<br/>E-5, Arera Colony, Bhopal,<br/>Madhya Pradesh 462016</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 text-rose-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-stone-900">Contact</h4>
                    <p className="text-stone-600 mt-1">09179767000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 text-rose-600">
                    <Star className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-stone-900">Highly Rated</h4>
                    <p className="text-stone-600 mt-1">Check out our reviews on Google Business!</p>
                    <a href="https://maps.app.goo.gl/rZWoDtVteNmH7sfb8" target="_blank" rel="noreferrer" className="text-rose-600 font-medium hover:underline mt-2 inline-block">
                      View Google Profile &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Embed Google Maps iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.529285094285!2d77.4326442!3d23.2238423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4269e8012629%3A0x6b4034b71bf38654!2sIdeal%20Family%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ideal Family Salon Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white tracking-tight mb-4">
                Ideal Family <span className="text-rose-600">Salon</span>
              </h2>
              <p className="mb-4 max-w-sm">
                Bhopal's best destination for bridal make-up, beauty, grooming services, and professional training.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-rose-400 transition-colors">Bridal Make-up</a></li>
                <li><a href="#services" className="hover:text-rose-400 transition-colors">Beauty & Grooming</a></li>
                <li><a href="#academy" className="hover:text-rose-400 transition-colors">Training Academy</a></li>
                <li><a href="https://maps.app.goo.gl/rZWoDtVteNmH7sfb8" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">Google Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Monday - Sunday</span> <span>10:00 AM - 8:00 PM</span></li>
                <li className="pt-4 mt-4 border-t border-stone-800">
                  <a href="tel:09179767000" className="text-2xl font-serif text-white hover:text-rose-400 transition-colors">09179767000</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-900 text-sm text-center flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Ideal Family Salon. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
