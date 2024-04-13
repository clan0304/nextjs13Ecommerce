'use client';

import React, { useState } from 'react';
import { Slider } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';

const PriceRange = () => {
  const [value, setValue] = useState<[number, number]>([40, 300]);

  const handleClick = () => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('minPrice', value[0].toString());
    newUrl.searchParams.set('maxPrice', value[1].toString());

    window.history.pushState({}, '', newUrl);
  };

  return (
    <NextUIProvider>
      <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
        <Slider
          label="Price Range"
          step={50}
          minValue={0}
          maxValue={1000}
          value={value}
          onChange={(newValue) => setValue(newValue as [number, number])}
          formatOptions={{ style: 'currency', currency: 'AUD' }}
          className="max-w-md"
        />
      </div>
      <div>
        <button onClick={handleClick}>Search</button>
      </div>
    </NextUIProvider>
  );
};

export default PriceRange;
