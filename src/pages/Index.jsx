import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import BrandShowcase from "../components/BrandShowcase";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-black text-white" ref={ref}>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            LUXE
          </motion.h1>
          <div className="hidden md:flex space-x-6">
            {["Collections", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown
                className={`h-6 w-6 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black bg-opacity-90 py-4"
          >
            {["Collections", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      <motion.header
        style={{ opacity, scale }}
        className="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-4"
          >
            Elegance Redefined
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Discover our latest collection
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main>
        <FeaturedProducts />
        <Categories />
        <Testimonials />
        <BrandShowcase />
        <Newsletter />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">LUXE</h3>
              <p className="text-gray-400">Redefining luxury fashion since 2024.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Collections", "About", "Contact", "FAQ"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["Facebook", "Instagram", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
