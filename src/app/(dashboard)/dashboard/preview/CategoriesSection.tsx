import React from "react";

const CategoriesSection = () => {
  return (
    <div className="font-sans">
      {"bg-gray-100 "}
      <section id="category" className=" py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold">Categories</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "For Multiple Cats",
                description:
                  "Discover litter boxes designed to accommodate more than one cat.",
                image:
                  "https://pub-342b3b8ce2b7489f9956e8987813d7c6.r2.dev/cat1.png",
              },
              {
                name: "Smart Litter Boxes",
                description:
                  "Explore our range of smart, self-cleaning litter boxes.",
                image:
                  "https://pub-342b3b8ce2b7489f9956e8987813d7c6.r2.dev/cat2.png",
              },
              {
                name: "Budget-Friendly",
                description:
                  "Quality and affordability meet in our budget-friendly models.",
                image:
                  "https://pub-342b3b8ce2b7489f9956e8987813d7c6.r2.dev/cat3.png",
              },
              {
                name: "Compact Solutions",
                description:
                  "Space-saving designs perfect for small apartments.",
                image:
                  "https://pub-342b3b8ce2b7489f9956e8987813d7c6.r2.dev/cat4.png",
              },
            ].map((category, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="mx-auto mb-4"
                />
                <h3 className="mb-2 text-2xl font-bold">{category.name}</h3>
                <p className="mb-4 text-left">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesSection;
