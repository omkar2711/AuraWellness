import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    content:
      'This platform has completely transformed how we approach our digital strategy. The results have been nothing short of extraordinary.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Senior Developer',
    company: 'InnovateLabs',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    content:
      "The attention to detail and technical excellence displayed by the team is remarkable. They've helped us achieve our goals faster than we imagined possible.",
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'CEO',
    company: 'DesignWorks',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    content:
      'Working with this team has been a game-changer for our business. Their innovative solutions and dedication to excellence are unmatched.',
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#A76192] text-[#A76192]" />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Quote className="absolute -top-4 -left-4 w-10 h-10 text-[#A76192] bg-white rounded-full p-1 shadow-lg" />
      <div className="flex items-start gap-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-2xl object-cover shadow-md"
        />
        <div className="flex-1 space-y-4">
          <StarRating rating={testimonial.rating} />
          <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
            <p className="text-[#A76192] font-medium text-sm">
              {testimonial.role} • {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why leading companies choose us for their success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
