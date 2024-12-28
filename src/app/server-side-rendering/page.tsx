import Navbar from '@/components/navbar';
import React from 'react'

interface Data {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const page = async () => {
  const response = await fetch('https://simple-books-api.glitch.me/books');
  const  data: Data[] = await response.json();
  return (
    <div>
      <Navbar />
      <div className='px-[10px] py-[30px] sm:px-[20px] md:px-[30px] lg:[40px]'>
        <h1 className='text-[20px] mb-4 text-center sm:text-[28px] md:text-[32px] font-bold text-[#D4F61C]'>Fetching Data on Server Side</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          data.map((item: Data) => (
            <div key={item.id}  className='w-full hover:bg-slate-100 bg-white shadow-lg p-7 rounded-md hover:shadow-lg cursor-pointer transition-all duration-200 hover:scale-105'>
              <p className='mb-2'> <span  className='font-bold'>ID: </span>{item.id}</p>
              <p className='text-[20px] mb-[4px] text-[]'><span className=''></span>{item.name}</p>
              <p className='text-[#585CDC]'> <span className='font-bold text-black'>type: </span>{item.type}</p>
              <p className={`${item.available == true ? 'text-[green]' : 'text-[red]'} font-bold`}>{item.available == true ? 'Available' : 'Not Available'} </p>
              <p className={`text-center mt-3 ${item.available == true ? 'text-[red]' : 'text-[green]'}`}>Read More...</p>
            </div>
          ))
        }
        </div>
      </div>

    </div>
  )
}

export default page
