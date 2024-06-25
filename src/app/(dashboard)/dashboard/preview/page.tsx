// "use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import GenerateButton from "./GenerateButton";
import { api } from "~/trpc/server";
import HeroSection from "./HeroSection";
import ProductionSection from "./ProductionSection";
import CategoriesSection from "./CategoriesSection";
import ReviewSection from "./ReviewSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";
import { ScrollArea } from "@radix-ui/react-scroll-area";
const Preview = async () => {
  // const data = await api.post.getCompanyInfo({ companyName: "11111" });
  await api.post.callCoze();
  const { company, products, categories, reviews, faqs } =
    await api.post.getByCompanyName("Tonepie");
  const companyName = "Tonepie";
  const data = "data";
  console.log("------------------preview----------------------------");
  console.log(data);
  return (
    <div className="px-4">
      <div className="flex h-14 items-center justify-between">
        <div>
          <div className="text-3xl font-bold">Preview</div>
          <div className="text-slate-400">Preview your website</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="ml-auto">
            Cancel
          </Button>
          <Link href="/dashboard/product/addProduct">
            <Button className="ml-auto bg-black text-white">Publish</Button>
          </Link>
          <GenerateButton></GenerateButton>
        </div>
      </div>
      <Separator className="mb-6 mt-6 w-full bg-slate-200" />
      <div className="mb-6 grid grid-cols-1 gap-20">
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400 ">
          {/* Navigation Header */}
          <header className="shadow-lg">
            <div className="container mx-auto flex justify-between py-4">
              <div className="text-2xl font-bold">{companyName}</div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="#home"
                      className="text-blue-500 hover:text-blue-700"
                    >
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
                    <a
                      href="#faq"
                      className="text-blue-500 hover:text-blue-700"
                    >
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
              backgroundImage: `url(${company?.heroImage})`,
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${company?.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <section className="bg-blue-500 py-20 text-white"> */}
            <div className="container mx-auto space-y-16 pt-60 text-center">
              <h1 className={company?.headLineStyle}>{company?.headLine}</h1>
              <p className={company?.subHeadLineStyle}>
                {company?.subHeadLine}
              </p>
              <p>
                <a
                  href="#products"
                  className="rounded-full bg-white px-6 py-3 text-lg text-blue-500"
                >
                  Shop Now
                </a>
              </p>
            </div>
          </section>
        </div>
        <div className="w-full border-2 border-slate-600  hover:bg-slate-400">
          {/* Products Section */}
          <section id="products" className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="mb-12 text-4xl font-bold">Our Products</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-lg"
                  >
                    <img
                      src={product.productLink}
                      alt={product.productName}
                      className="mx-auto mb-4"
                    />
                    <h3 className="mb-2 text-2xl font-bold">
                      {product.productName}
                    </h3>
                    <p className="mb-4 text-left">
                      {product.productDescription}
                    </p>
                    <p className="mb-4 text-xl font-bold">
                      {product.productPrice}
                    </p>
                    <a
                      href="#"
                      className="rounded-full bg-blue-500 px-4 py-2 text-white"
                    >
                      Buy Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400">
          {/* Categories Section */}
          <section id="category" className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="mb-12 text-4xl font-bold">Categories</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-lg"
                  >
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
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400">
          {/* Reviews Section */}
          <section id="reviews" className="py-12">
            <div className="container mx-auto px-6">
              <h2 className="mb-8 text-center text-3xl font-bold">
                What Our Customers Are Saying
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 text-center shadow-lg"
                  >
                    <p className="mb-4">{'"' + review.review + '"'}</p>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400">
          {/* FAQ Section */}
          <section id="faq" className="py-12">
            <div className="container mx-auto px-6">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-lg"
                  >
                    <h3 className="mb-2 text-xl font-semibold">
                      {faq.question}
                    </h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="w-full border-2 border-slate-600 hover:bg-slate-400">
          {/* Contact Section */}
          <section id="contact" className="py-12">
            <div className="container mx-auto px-6 text-center">
              <h2 className="mb-8 text-3xl font-bold">Contact Us</h2>
              <p className="mb-4">Email: {company?.email}</p>
              <p className="mb-4">Phone: {company?.phone}</p>
              <p className="mb-4">Address: {company?.address}</p>
              <div className="mt-6 flex justify-center space-x-6">
                <a
                  href={"https://facebook.com/" + companyName}
                  className="text-blue-600"
                >
                  Facebook
                </a>
                <a
                  href={"https://instagram.com/" + companyName}
                  className="text-pink-600"
                >
                  Instagram
                </a>
                <a
                  href={"https://youtube.com/" + companyName}
                  className="text-red-600"
                >
                  YouTube
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Preview;
