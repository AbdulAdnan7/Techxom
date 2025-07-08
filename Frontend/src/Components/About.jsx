import React from 'react';
import Logos from '../assets/Logo.png'

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About TechXom</h1>
        <p className="text-gray-600 text-lg">
          Your one-stop destination for cutting-edge gadgets, latest tech, and innovative solutions.
        </p>
      </div>

      {/* Brand Story */}
      <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6">
        <p>
          Founded in 2025, <span className="text-rose-600 font-medium">TechXom</span> was built with a passion for making the latest technology accessible to everyone. From wireless audio to powerful laptops, we curate only the best.
        </p>
        <p>
          Our goal is to bring you devices that combine performance, style, and value. Whether you're a tech enthusiast or just looking for your next favorite gadget, we've got you covered.
        </p>
        <p>
          We believe in transparency, fast shipping, and excellent customer service. Our team is always working to bring new innovations to your doorstep.
        </p>
      </div>

      {/* Optional Image */}
      <div className="mt-12 flex justify-center">
        <img
          src={Logos}
          alt="Team TechXom"
          className="rounded-xl shadow-lg w-full max-w-3xl object-cover"
        />
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a href="/products">
          <button className="bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition">
            Browse Products
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
