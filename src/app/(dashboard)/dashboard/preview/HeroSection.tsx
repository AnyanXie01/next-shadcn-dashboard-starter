import React from "react";

const HeroSection = () => {
  const data = "This is data placeholder";
  return (
    <div className="font-sans">
      {/* Navigation Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto flex justify-between py-4">
          <div className="text-2xl font-bold">Toniepie</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-blue-500 hover:text-blue-700">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#category"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Category
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="text-blue-500 hover:text-blue-700">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section
        id="home"
        className="py-20 text-white"
        style={{
          backgroundImage: "url(/litterBox.png)",
          background:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/litterBox.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* https://loremflickr.com/cache/resized/65535_52690403064_1961271c4f_z_640_360_nofilter.jpg */}
        {/* <section className="bg-blue-500 py-20 text-white"> */}
        <div className="container mx-auto space-y-16 pt-60 text-center">
          {/* <h1 className="text-5xl font-bold mb-4">Revolutionize Your Cat&apos;s Litter Experience</h1> */}
          <h1 className={data}>{data}</h1>
          <p className="mb-8 text-xl">
            Automated, Hygienic, and Hassle-Free Cat Litter Boxes by Toniepie
          </p>
          <p>
            <a
              href="#products"
              className="rounded-full bg-white px-6 py-3 text-lg text-blue-500"
            >
              Shop Now
            </a>
          </p>
          {/* <div className="mt-8">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Hero"
            className="mx-auto"
          />
        </div> */}{" "}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
