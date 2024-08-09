import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Elegant Evening Gown",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "$599",
  },
  {
    id: 2,
    name: "Classic Suit",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "$799",
  },
  {
    id: 3,
    name: "Designer Handbag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "$399",
  },
  {
    id: 4,
    name: "Luxury Watch",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "$1,299",
  },
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Featured Products
        </motion.h2>
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                className="flex"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="w-full flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600">{product.price}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300"
            onClick={prevProduct}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300"
            onClick={nextProduct}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
