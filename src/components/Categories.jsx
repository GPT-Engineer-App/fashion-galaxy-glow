import { motion } from "framer-motion";

const categories = [
  { name: "Women's Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  { name: "Men's Fashion", image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img src={category.image} alt={category.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
