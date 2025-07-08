import React, { useState, useEffect } from 'react'
import HeadImage from '../assets/HeadImage.png'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log("Error fetching products:", err))
    }, [])

    return (
        <>
            <section className='bg-gradient-to-b from-rose-200 via-rose-50 to-white px-8 py-6 md:px-20 md:py-20 flex flex-row items-center justify-between'>
                {/** for header section */}
                <header className='max-w-4xl text-start'>
                    <div>
                        <h1 className='text-4xl md:text-5xl text-gray-600 font-semibold'>Let's dive into <span className='text-rose-600'>Tech</span></h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0 mt-4">
                            Explore the world of smart devices, modern gadgets, and innovative tools built for tech enthusiasts.
                        </p>
                        <div className='flex flex-wrap gap-4 mt-6'>
                            <button className='bg-rose-500 px-6 py-2 text-white rounded-md hover:bg-rose-700 transition duration-300'>
                                Get Started
                            </button>
                            <button className='border border-rose-500 text-rose-500 px-6 py-2 rounded-md hover:bg-rose-50 transition duration-300'>
                                Learn More
                            </button>
                        </div>


                    </div>
                </header>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src={HeadImage}
                        alt="Headphones"
                        className="w-[250px] md:w-[350px] object-contain hidden md:block"
                    />
                </div>
            </section>
    

            {/** Top pick's Sections */}

            <section className='py-16'>
                <div className='flex justify-center text-center'>
                    <h1 className='text-4xl'>
                        Top Pick's this Month
                    </h1>
                </div>

                <div className='flex flex-wrap justify-center gap-x-10 gap-y-10 mt-10'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative bg-rose-50 shadow-md w-[90%] sm:w-[280px] rounded-lg overflow-hidden"
                        >
                            {/* Top Image */}
                            <div className="w-full h-[200px] bg-rose-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-contain h-[180px] transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Bottom Info Box (Overlapping slightly) */}
                            <div className="-mt-6 bg-gray-300 rounded-t-lg px-4 pb-4 pt-6 relative z-10">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                                <p className="text-sm text-gray-600 mb-2 truncate">{product.description}</p>
                                <p className="text-rose-600 font-bold mb-2">${product.price}</p>
                                <button className="bg-rose-600 text-white px-3 py-1 text-sm rounded hover:bg-rose-700 transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}

                </div>

            </section>
            {/** Testimonial Section */}
            <section className='bg-rose-50 py-16 px-6 md:px-20'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>What our <span className='text-rose-600'>Customers</span> Say</h2>
                    <p className='mx-auto max-w-xl mt-4'>
                        What our Techkies are saying
                    </p>
                </div>
                <div className='grid gap-8 md:grid-cols-3'>
                    {[
                        {
                            name: 'Sarah johnson',
                            feedback: "I love the sleek design and amazing performance of the products! TechXom never disappoints.",
                            image: "https://randomuser.me/api/portraits/women/68.jpg"
                        },
                        {
                            name: 'John Doe',
                            feedback: "Great value for money! The wireless headset I bought works like a charm.",
                            image: "https://randomuser.me/api/portraits/men/75.jpg"
                        },
                        {
                            name: "Priya Kumar",
                            feedback:
                                "Fast delivery, stylish gadgets, and responsive support. TechXom is my go-to tech shop now.",
                            image:
                                "https://randomuser.me/api/portraits/women/65.jpg",
                        },
                    ].map((testimonial, index) => (
                        <div key={index} className='bg-white shadow-lg p-6 rounded-xl border-t-4 border-rose-500 text-center'>
                            <img src={testimonial.image}
                                alt={testimonial.name}
                                className='w-20 h-20 rounded-full mx-auto object-cover border-4 border-rose-200'
                            />
                            {/** className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-rose-200" */}
                            <h1 className='text-gray-800 italic mb-4'>{testimonial.feedback}</h1>
                            <p className='text-gray-900 font-semibold'>{testimonial.name}</p>
                        </div>
                    ))
                    }
                </div>
            </section>

{}


        </>
    )
}

export default Home