import React from "react";

const ProductionSection = () => {
  return (
    <div className="font-sans">
      <section id="products" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold">Our Products</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Toniepie Max",
                description:
                  "Our most advanced model with self-cleaning capabilities and smart sensor technology.",
                price: "$499.99",
                cta: "Buy Now",
                image:
                  "https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/7d3c95f8736c4be8b4515d254c24b4dc.png",
              },
              {
                name: "Toniepie Lite",
                description:
                  "A compact, budget-friendly option with essential features for a clean litter experience.",
                price: "$299.99",
                cta: "Buy Now",
                image:
                  "https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/debd13e6498d42f2a225b4c21bbc6c03.png",
              },
              {
                name: "Toniepie Pro",
                description:
                  "Designed for multi-cat households, with enhanced durability and odor control.",
                price: "$399.99",
                cta: "Buy Now",
                image:
                  "https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/9c72d9b76e8a43a5a79390c1eb617ef4.png",
              },
              {
                name: "Toniepie Mini",
                description:
                  "Perfect for small spaces, this product features a sleek and modern design, along with quiet operation",
                price: "$199.99",
                cta: "Buy Now",
                image:
                  "https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/e9b673d95c1f4425b97440607bc1d4fd.png",
              },
            ].map((product, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto mb-4"
                />
                <h3 className="mb-2 text-2xl font-bold">{product.name}</h3>
                <p className="mb-4 text-left">{product.description}</p>
                <p className="mb-4 text-xl font-bold">{product.price}</p>
                <a
                  href="#"
                  className="rounded-full bg-blue-500 px-4 py-2 text-white"
                >
                  {product.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionSection;
