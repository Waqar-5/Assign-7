'use client';
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function Page() {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const jsonResponse = await response.json();
                setData(jsonResponse); // Set the fetched product data
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12 w-full mb-6 bg-gray-50 hover:cursor-pointer">
            <Navbar />
            {loading ? (
                <p className="text-2xl w-full h-full text-red-500 border-2 shadow-sm py-4 px-6 rounded-md">Loading...</p>
            ) : (
                <div className="text-center text-3xl font-bold mt-14 border-none shadow-lg text-[#D4F61C] px-9 py-10 hover:text-white hover:bg-gray-500 cursor-pointer rounded-lg transition-transform hover:scale-105 duration-200">
                    <h1>Client-Side Rendering</h1>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-4 sm:px-6 lg:px-12">
                {data.map((product) => (
                    <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full transform transition-all hover:scale-105 hover:shadow-xl">
                        <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                        <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-800">{product.title}</h2>
                        <p className="text-lg text-indigo-600 mt-2 hover:text-indigo-800">{product.category}</p>
                        <p className="text-xl font-semibold text-green-500 mt-2">${product.price}</p>
                        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                        <div className="mt-auto">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full mt-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
