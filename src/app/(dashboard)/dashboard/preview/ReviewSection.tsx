import React from "react";

const ReviewSection = () => {
  return (
    <div className="font-sans">
      {" "}
      <section id="reviews" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold">
            What Our Customers Are Saying
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                name: "Sarah L.",
                review:
                  "Toniepie Max changed our lives! No more daily scooping and our house smells fresh.",
                rating: "★★★★★",
              },
              {
                name: "John D.",
                review:
                  "I love the convenience of the smart features. The app makes it so easy to monitor the litter box.",
                rating: "★★★★★",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-2xl font-bold">{testimonial.name}</h3>
                <p className="mb-4 text-left">{testimonial.review}</p>
                <p className="text-yellow-500">{testimonial.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
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
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold">Get in Touch with Us</h2>
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@toniepie.com" className="text-blue-500">
              support@toniepie.com
            </a>
          </p>
          <p className="mb-4">
            <strong>Phone:</strong>{" "}
            <a href="tel:+18001234567" className="text-blue-500">
              +1 (800) 123-4567
            </a>
          </p>
          <p className="mb-8">
            <strong>Address:</strong> 1234 Pet Care Avenue, Petville, CA 90210,
            USA
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { link: "https://facebook.com/xxx", label: "Facebook" },
              { link: "https://instagram.com/xxx", label: "Instagram" },
              { link: "https://youtube.com/xxx", label: "YouTube" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {social.label}
              </a>
            ))}
          </div>
          {/* <div className="mt-8">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Contact"
          className="mx-auto"
        />
      </div> */}
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
