'use client'

import { useState } from "react";

const PriceFilter = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER);

  return (
    <div className="p-5">
    <div className="flex space-x-4 justify-center mb-5">
      <input
        type="number"
        placeholder="Min Price"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
    </div>
  </div>
  )
};

export default PriceFilter;
