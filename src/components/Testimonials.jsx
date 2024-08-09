import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Fashion Blogger",
    content: "LUXE has completely transformed my wardrobe. The quality and style of their pieces are unmatched!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Executive",
    content: "I always turn to LUXE for my professional attire. Their suits make me feel confident and stylish.",
    rating: 5,
  },
  {
    name: "Sophia Rodriguez",
    role: "Lifestyle Influencer",
    content: "The attention to detail in LUXE's accessories is incredible. They're my go-to for statement pieces.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <p className="mb-4">{testimonial.content}</p>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
