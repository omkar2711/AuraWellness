import React, { useState } from 'react';
import { Send, Phone, Mail, User, Building2, MessageSquare } from 'lucide-react';

function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    healness: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Please fill out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[#A76192]" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#A76192] focus:border-[#A76192] transition duration-150 ease-in-out"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-[#A76192]" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#A76192] focus:border-[#A76192] transition duration-150 ease-in-out"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#A76192]" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#A76192] focus:border-[#A76192] transition duration-150 ease-in-out"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Healness Name Input */}
            <div>
              <label htmlFor="healness" className="block text-sm font-medium text-gray-700 mb-1">
                Name of Healness
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-[#A76192]" />
                </div>
                <input
                  type="text"
                  id="healness"
                  name="healness"
                  value={formData.healness}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#A76192] focus:border-[#A76192] transition duration-150 ease-in-out"
                  placeholder="Enter healness name"
                  required
                />
              </div>
            </div>

            {/* Description Input */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-[#A76192]" />
                </div>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#A76192] focus:border-[#A76192] transition duration-150 ease-in-out resize-none"
                  placeholder="Please describe your inquiry..."
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#A76192] hover:bg-[#955483] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A76192] transition duration-150 ease-in-out"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactInfo;