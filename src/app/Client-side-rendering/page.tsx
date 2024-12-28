'use client';
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

interface Quote {
    id: number;
    quote: string;
    author: string;
}

export default function Page() {
    const [data, setData] = useState<Quote[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        const fetchQuotes = async () => {
            const response = await fetch('https://dummyjson.com/quotes');
            const jsonResponse = await response.json();

            // Check the structure of the response, adjust accordingly
            const parsedQuotes: Quote[] = jsonResponse.quotes || []; // Assuming quotes is a property in the response
            setData(parsedQuotes); // Use setData to update the state
        };
        fetchQuotes();
    }, []);

    return (
        <div className="h-screen flex flex-col items-center  px-[10px] sm:px-[0] w-full mb-[20px]">
            <Navbar />
            {loading ? (
                <p className="text-[20px] w-full h-full text-red-500 border-2 shadow-sm">Loading...</p>
            ) : (

                <div className="text-center text-3xl font-bold mt-14 border-none shadow-lg text-[#D4F61C] px-9 py-10 hover:text-white hover:bg-gray-500 cursor-pointer rounded-lg transition-transform hover:scale-105 duration-200">
                    <h1>Fetching Data on Client Side!</h1>
                </div>
            )}
               {data.map((quote, index) => (
                    <div key={index} className="text-[20px] mt-32 rounded-lg
                    text-black border-b-4 shadow-sm p-[10px]   px-[30px] hover:bg-slate-100 cursor-pointer transition-transform duration-200 hover:scale-105 ease-in-out w-[80%] py-7 hover:text-slate-900 
                    
                    ">
                        <p className="text-[20px] text-red-500 font-bold">id: <span className="text-black">{quote.id}</span> </p>
                        <p className="text-[25px] font-semibold text-green-500">quote: <span className="text-black">{quote.quote}</span></p>
                        <p className="text-[30px] font-extralight text-blue-800">author: <span className="text-black">{quote.author}</span>
                        </p>
                        <div>
                        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"><Link href={`/server-side-rendering/${quote.id}`}>Read Now</Link></button> */}
                        </div>
                        
                    </div>
                ))}
        </div>
    );
}
