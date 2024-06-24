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
    </div>
  );
};

export default ReviewSection;
