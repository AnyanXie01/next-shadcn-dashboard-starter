import React from "react";

const FAQSection = () => {
  return (
    <div className="font-sans">
      {" "}
      <section id="faq" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "How does the self-cleaning feature work?",
                answer:
                  "Our self-cleaning litter boxes use advanced sensors to detect when your cat has used the box, then automatically remove waste into a sealed compartment.",
              },
              {
                question: "Is the litter box safe for my cat?",
                answer:
                  "Absolutely! Our products are designed with multiple safety features to ensure your cat is always safe.",
              },
              {
                question: "What kind of litter should I use?",
                answer: "We recommend clumping litter for optimal performance.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-2xl font-bold">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
