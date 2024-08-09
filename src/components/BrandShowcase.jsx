import { motion } from "framer-motion";

const brands = [
  { name: "Gucci", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/2560px-1960s_Gucci_Logo.svg.png" },
  { name: "Chanel", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/2560px-Chanel_logo_interlocking_cs.svg.png" },
  { name: "Louis Vuitton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/2560px-Louis_Vuitton_logo_and_wordmark.svg.png" },
  { name: "Hermès", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Herm%C3%A8s_logo.svg/1280px-Herm%C3%A8s_logo.svg.png" },
  { name: "Prada", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/2560px-Prada-Logo.svg.png" },
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-1/2 md:w-1/3 lg:w-1/5"
            >
              <img src={brand.logo} alt={brand.name} className="max-h-12 mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
