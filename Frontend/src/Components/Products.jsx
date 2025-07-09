import React, { useState, useEffect } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { useCart } from '../context/CartContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCateogary, setSelectedCateogary] = useState('All');

   const { addToCart, removeFromCart, cartItems } = useCart()

    const category = ['All', 'Audio', 'Laptops', 'Phones', 'Accessories']

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched Products', data)
                setProducts(data);
            })
            .catch(err => console.log('Error', err))
    }, []);

    const isInCart = (id) => cartItems.some(item => item.id === id);

    const handleAdd = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart`)
    }

    const handleRemove = (id) => {
        removeFromCart(id);
        toast.error('Item removed from cart')
    }

    const filterProduct = selectedCateogary === 'All' ? products : products.filter((p) => 
        p.category?.toLowerCase().trim() === selectedCateogary.toLowerCase()
    )

    return (
        <section className='mb-20'>
            <Toaster position='top-right' />
            <div className='flex justify-center mt-10'>
                <h1 className='text-2xl'>All Products</h1>
            </div>
            <div className='flex justify-center flex-wrap gap-6'>
                {
                    category.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCateogary(cat)}
                            className={`px-4 py-2 rounded-full border-rose-400 border mt-6 ${selectedCateogary === cat ? 'bg-rose-600' : ''}`}
                        >{cat}</button>
                    ))
                }
            </div>

            <div className='flex flex-wrap gap-8 justify-center'>
                {filterProduct.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className='bg-rose-50 rounded-lg shadow-md w-[260px]'>
                            <img
                                className="h-48 w-full object-contain bg-white p-4"
                                src={product.image}
                                alt={product.name} />
                            <div className='p-4'>
                                <h1 className='text-lg font-semibold'>{product.name}</h1>
                                <p className='text-sm text-gray-600 truncate mb-2'>{product.description}</p>
                                <p className='text-rose-600 font-bold mb-2'>${product.price}</p>
                                <div>
                                    { isInCart(product.id) ? (
                                        <button
                                        className='bg-gray-800 text-white px-3 py-1 text-sm rounded hover:bg-gray-800 transition'
                                        onClick={() => handleRemove(product.id)} >Remove from Cart</button>
                                    ) :
                                    (
                                    <button onClick={() => handleAdd(product)} className="bg-rose-600 text-white px-3 py-1 text-sm rounded hover:bg-rose-700 transition">
                                        Add to Cart
                                    </button>
                                    )
                }
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>

        </section>
    )
};

export default Products;
