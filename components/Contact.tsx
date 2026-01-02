
import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, ExternalLink, ArrowRight, Mail } from 'lucide-react';
import { POSTER_DATA, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', class: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Enrollment Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Class:* ${formData.class}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-500 font-medium tracking-tight">Visit us or reach out via WhatsApp / Call / Email.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Buttons */}
          <div className="space-y-4">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center p-8 bg-[#25D366] rounded-[30px] text-white hover:scale-[1.02] transition-transform shadow-lg">
              <MessageCircle className="h-10 w-10 mr-6" />
              <div>
                <p className="text-xs font-black uppercase tracking-widest opacity-80">Message Us</p>
                <p className="text-2xl font-black">WhatsApp</p>
              </div>
            </a>
            
            <a href={`tel:${POSTER_DATA.contact}`} className="flex items-center p-8 bg-blue-600 rounded-[30px] text-white hover:scale-[1.02] transition-transform shadow-lg">
              <Phone className="h-10 w-10 mr-6" />
              <div>
                <p className="text-xs font-black uppercase tracking-widest opacity-80">Call Mentor</p>
                <p className="text-2xl font-black">{POSTER_DATA.contact}</p>
              </div>
            </a>

            <a href={`mailto:${POSTER_DATA.email}`} className="flex items-center p-8 bg-red-500 rounded-[30px] text-white hover:scale-[1.02] transition-transform shadow-lg">
              <Mail className="h-10 w-10 mr-6" />
              <div>
                <p className="text-xs font-black uppercase tracking-widest opacity-80">Send Email</p>
                <p className="text-xl font-black">contact@rebrainsol...</p>
              </div>
            </a>

            <div className="p-8 bg-slate-900 rounded-[30px] text-white">
              <MapPin className="h-10 w-10 mb-4 text-red-500" />
              <p className="text-lg font-bold leading-tight mb-4">{POSTER_DATA.location}</p>
              <a href="https://maps.google.com/?q=Techline+Studio+Ambikapur" className="text-xs font-black uppercase tracking-widest text-red-400 flex items-center">
                Open Maps <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-slate-50 p-12 md:p-16 rounded-[40px] border border-slate-100">
            <h3 className="text-3xl font-black text-slate-900 mb-10">Application Form</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input name="name" required onChange={handleChange} className="bg-transparent text-xl font-bold py-4 border-b-2 border-slate-300 focus:border-blue-600 outline-none" placeholder="Full Name" />
                <input name="phone" required onChange={handleChange} className="bg-transparent text-xl font-bold py-4 border-b-2 border-slate-300 focus:border-blue-600 outline-none" placeholder="Mobile Number" />
              </div>
              <input name="class" required onChange={handleChange} className="w-full bg-transparent text-xl font-bold py-4 border-b-2 border-slate-300 focus:border-blue-600 outline-none" placeholder="Your Class (e.g. 10th)" />
              <button type="submit" className="w-full bg-slate-900 text-white font-black py-6 rounded-[20px] text-xl hover:bg-black transition-all flex items-center justify-center">
                Send Application <ArrowRight className="ml-4 h-6 w-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
