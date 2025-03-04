import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr Vinod Gidwani ',
    location: 'Mumbai ',
     content:'I recently tried frequency healing for the first time, and I am truly amazed by the results! The session was incredibly relaxing, and I could feel the positive energy flowing through my body. Afterward, I noticed a significant improvement in my overall well-being - I felt more balanced, focused, and energized. The practitioner was knowledgeable, caring, and created a safe space for me to relax and heal. I highly recommend frequency healing to anyone looking to enhance their physical, emotional, and spiritual health. I will definitely be returning for more sessions in the future!.',
    rating: 5,
  },
  {
    name: 'Aliasgar Lokhandwala',
    location: 'Pune',
    content:
      'Murtaza is a rare gift—his healing presence brings peace 🕊️, clarity 🌟, and deep transformation 🔮. Through his profound wisdom, frequency healing ⚡ and distance energy work 🌍, I have felt my burdens lift and my mind find balance.His guidance is gentle yet powerful, like a soothing light 💫 leading the way. More than a coach, he is a true healer, a friend, and a soul who genuinely cares 💖.If you seek healing, clarity, and inner peace, Murtaza is the one to trust. His energy is pure serenity ✨.Highly recommended! 🌟',
    rating: 5,
  },
  {
    name: 'Rajesh Budhrani',
    location: 'Delhi',
    content:
      'I have experienced enormous stress and suffering in my relations. I have been a victim of backstabbing, disrespectful and toxic behavior. All this had greatly harmed my peace & calmness and has put me in depression. I had become angry and short tempered. My mental stability had disappeared until I met Murtaza Hakimji. I am grateful to him for patiently listening and  understanding my story. He then gave me counselling and guidance for the life ahead. All that he shared has transformed my life and made me A Better Person ! My life today is better, my relations have healed, my emotional health and stability is better, my sleep is better. All this is because of Murtaza Hakimji, and I am forever grateful to him for that 🙏 My prayers and good wishes for everyone going through stress and suffering !',
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
  //   <div className="flex gap-1.5">
  //   {[...Array(rating)].map((_, i) => (
  //     <Star key={i} className="w-5 h-5 fill-[#A76192] text-[#A76192]" />
  //   ))}
  // </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Quote className="absolute -top-4 -left-4 w-10 h-10 text-[#A76192] bg-white rounded-full p-1 shadow-lg" />
      <div className="flex items-start gap-6">
       
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
