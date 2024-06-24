import React from "react";

const ContactSection = () => {
  return (
    <div className="font-sans">
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

export default ContactSection;
