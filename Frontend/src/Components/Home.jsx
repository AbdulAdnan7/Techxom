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
            <section className='bg-gradient-to-b from-rose-200 via-rose-50 to-white px-20 py-20 flex flex-row items-center justify-between'>
                {/** for header section */}
                <header className='max-w-4xl text-start'>
                    <div>
                        <h1 className='text-4xl md:text-5xl text-gray-600 font-semibold'>Let's dive into <span className='text-rose-600'>Tech</span></h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0 mt-4">
                            Explore the world of smart devices, modern gadgets, and innovative tools built for tech enthusiasts.
                        </p>
                        <button className='bg-rose-500 px-4 py-2 text-white hover:bg-rose-700 mt-6'>Get Started</button>
                        <button className='border-rose-500 border px-4 py-2 ml-2'>Learn More</button>
                    </div>
                </header>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src={HeadImage}
                        alt="Headphones"
                        className="w-[250px] md:w-[350px] object-contain"
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
        </>
    )
}

export default Home