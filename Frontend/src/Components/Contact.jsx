import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

emailjs.sendForm('service_hwg71bl','template_i8hfidq', form.current, 'EFmc325Y9L_px_8i8')
.then((result) => {
  console.log('Message Sent:', result.text)
}).catch((err) => {
  console.log("Error Sending Message", err)
  alert("Failed to send Message")
})
e.target.reset()
  }

  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-between py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Get in Touch</h2>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <Mail className="mx-auto mb-3 text-rose-700" size={32} />
            <h4 className="font-semibold text-gray-700">Email</h4>
            <p className="text-sm text-gray-500">TechXom@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <Phone className="mx-auto mb-3 text-rose-700" size={32} />
            <h4 className="font-semibold text-gray-700">Phone</h4>
            <p className="text-sm text-gray-500">+91 98123 4567</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <MapPin className="mx-auto mb-3 text-rose-700" size={32} />
            <h4 className="font-semibold text-gray-700">Address</h4>
            <p className="text-sm text-gray-500">Tech Park, Hyderabad, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-rose-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
