
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { POSTER_DATA, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    class: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Enrollment Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Class:* ${formData.class}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Fill the form below to enroll your child in the upcoming AI & Cybersecurity batch. 
            The form will be delivered directly to our WhatsApp.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-blue-700 p-12 text-white">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-blue-100 uppercase text-xs tracking-wider">Call or WhatsApp</p>
                  <a href={`tel:${POSTER_DATA.contact}`} className="text-lg font-bold hover:underline">
                    {POSTER_DATA.contact}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-blue-100 uppercase text-xs tracking-wider">Email Us</p>
                  <a href={`mailto:${POSTER_DATA.email}`} className="text-lg font-bold hover:underline">
                    {POSTER_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-blue-100 uppercase text-xs tracking-wider">Visit Us</p>
                  <p className="text-lg font-bold leading-tight">
                    {POSTER_DATA.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="bg-blue-600/50 p-6 rounded-2xl border border-blue-400/30">
                <h4 className="font-bold text-xl mb-2">Class Starts</h4>
                <p className="text-blue-50 font-medium">Sunday, 18 January 2026</p>
                <p className="text-blue-50 font-medium">01:00 PM Sharp</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl transition-all outline-none"
                    placeholder="Enter student name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl transition-all outline-none"
                    placeholder="Active WhatsApp number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Current Class / College Year</label>
                <input
                  type="text"
                  name="class"
                  required
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl transition-all outline-none"
                  placeholder="e.g. Class 10th or 2nd Year"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl transition-all outline-none resize-none"
                  placeholder="Ask any questions here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1 shadow-xl"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Submit & Send to WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
