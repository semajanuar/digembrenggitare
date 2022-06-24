/* This example requires Tailwind CSS v2.0+ */
import Navbar from './komponen/Navbar'
import Axios from "axios";
import React, { useState, useEffect } from "react";


export default function Example() {
  
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      getProduct();
    }, []);
  
    const getProduct = () => {
      Axios.get(`https://raw.githubusercontent.com/semajanuar/api2/main/chord`)
        .then((res) => {
          const data = res.data;
          setProduct(data.products);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };

    return (
        <>
        <Navbar/>
      <div className="max-w-screen-xl sm:mx-auto">
      {product.map((products) => (
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <a key={products.id} href={product.href} className="group">
              <p className="mb-4 text-xl font-semibold">
                {products.judul}
              </p>
              <p className="text-gray-700">
                {products.text}
              </p>
              
              </a>
            </div>
            </div>
          </div>
            ))}
            
          </div>
        <div className='mt-4'>
            <a class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out text-yellow-400 hover:text-red-500 font-semibold">LIRIS CHORD TERBARU</a>
            <p><a href="Mangu" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out font-semibold text-yellow-400 hover:text-red-500">Fourtwnty - Mangu (ft. Charita Utami)</a></p>
            <p><a href="Tulus" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out font-semibold text-yellow-400 hover:text-red-500">Tulus - Hati-Hati Di Jalan</a></p>
            <p><a href="Akutenang" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out font-semibold text-yellow-400 hover:text-red-500">Fourtwnty - Aku Tenang</a></p>
            <p><a href="Comingsoon" class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out font-semibold text-yellow-400 hover:text-red-500">COMINGSOON</a></p>
        </div>
    
      </>
    );
  };
