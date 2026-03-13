import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import ParticleHeading from './ParticleHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Construct mailto link
    const mailtoLink = `mailto:ny186871@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Simulate a brief "sending" state before triggering the email client
    setTimeout(() => {
      window.location.href = mailtoLink;
      
      // Delay success message slightly to ensure 'Preparing' is seen
      setTimeout(() => {
        setStatus('success');
        
        // Reset after 5 seconds to give user time to see it
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
      }, 500);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-brand-800 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <ParticleHeading
          text="Contact Me"
          as="h3"
          className="text-sm font-bold mb-14 tracking-wide uppercase text-brand-300"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-brand-50 font-serif font-bold text-4xl mb-6">Let's build something exceptional together.</h4>
            <p className="text-brand-300 text-lg mb-12 leading-relaxed max-w-lg">
              Whether you have a specific project in mind or just want to explore possibilities, I'm always open to discussing new opportunities and challenges.
            </p>

            <div className="space-y-8">
              <a href="mailto:ny186871@gmail.com" className="group flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-brand-800/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-800/50 flex items-center justify-center border border-brand-700/50 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                  <Mail className="text-brand-300 group-hover:text-cyan-400 transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-500 font-bold mb-1">Email</p>
                  <p className="text-brand-50 font-medium">ny186871@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919236864106" className="group flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-brand-800/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-800/50 flex items-center justify-center border border-brand-700/50 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                  <Phone className="text-brand-300 group-hover:text-cyan-400 transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-500 font-bold mb-1">Phone</p>
                  <p className="text-brand-50 font-medium">+91 923 686 4106</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/nikhilkryadav/" target="_blank" rel="noreferrer" className="group flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-brand-800/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-800/50 flex items-center justify-center border border-brand-700/50 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                  <Linkedin className="text-brand-300 group-hover:text-cyan-400 transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-500 font-bold mb-1">LinkedIn</p>
                  <p className="text-brand-50 font-medium">nikhilkryadav</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl border border-brand-800 bg-brand-900/40 backdrop-blur-xl shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-brand-900/60 backdrop-blur-sm rounded-3xl z-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="text-cyan-400" size={40} />
                  </motion.div>
                  <h5 className="text-brand-50 text-2xl font-serif font-bold mb-2">Message Prepared!</h5>
                  <p className="text-brand-300 max-w-[250px]">Your email client should have opened. Click send there to finish.</p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-brand-400 font-bold ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl bg-brand-800/30 border border-brand-700/50 text-brand-50 placeholder:text-brand-600 focus:outline-none focus:border-brand-400 transition-all focus:bg-brand-800/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-brand-400 font-bold ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 rounded-xl bg-brand-800/30 border border-brand-700/50 text-brand-50 placeholder:text-brand-600 focus:outline-none focus:border-brand-400 transition-all focus:bg-brand-800/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-brand-400 font-bold ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject"
                  className="w-full px-5 py-4 rounded-xl bg-brand-800/30 border border-brand-700/50 text-brand-50 placeholder:text-brand-600 focus:outline-none focus:border-brand-400 transition-all focus:bg-brand-800/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-brand-400 font-bold ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full px-5 py-4 rounded-xl bg-brand-800/30 border border-brand-700/50 text-brand-50 placeholder:text-brand-600 focus:outline-none focus:border-brand-400 transition-all focus:bg-brand-800/50 resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={status === 'idle' ? { scale: 1.02, y: -2 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] ${
                  status === 'idle' ? 'bg-brand-50 text-brand-900 hover:bg-white' : 'bg-brand-800 text-brand-400 cursor-not-allowed'
                }`}
              >
                {status === 'sending' ? 'Preparing...' : 'Send Message'}
                {status === 'idle' && <Send size={18} />}
              </motion.button>
            </form>

            <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <MessageSquare className="text-brand-900" size={24} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
