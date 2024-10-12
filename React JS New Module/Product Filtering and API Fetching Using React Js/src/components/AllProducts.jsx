import React, { useEffect } from "react";
import { Input } from "react-daisyui";
import { useState } from "react";
import { Rating } from "@mui/material"; // Import Rating component

export default function AllProducts() {
  const [input, setInput] = useState("");
  const [APIData, setAPIData] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const getApiData = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    res = await res.json();
    console.log(res);
    setAPIData(res);
    console.log(APIData);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-center">All Products Section</h2>
        <div className="w-full p-4 text-center">
          <Input
            className="w-1/4 border border-gray-400 p-3"
            placeholder="Search Your Products here"
            value={input}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="products-container flex flex-col gap-4 p-4">
        {/* Product cards will be generated here */}

        {APIData.map((item) => {
          return (
            <>
              <div className="border p-5 flex items-center gap-4 rounded-md bg-slate-900 ">
                <img src={item.image} className="w-14 h-auto " alt="" />
                <h2 className="text-xl"> {item.title} </h2>

                <Rating
                  name="product-rating"
                  value={item.rating.rate} // Use the rating from API
                  precision={0.5} // Show half-star increments
                  readOnly // Make the stars read-only
                />
                <p>Reviews {item.rating.rate} </p>
                <h3 className="">{item.category}</h3>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
