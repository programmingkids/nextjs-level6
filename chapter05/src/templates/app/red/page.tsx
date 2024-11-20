'use client';

import { useState } from 'react';

export default function Page() {
  console.log('This is red page');
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="main">
      <h1 className="p-4 bg-red-200 text-xl">Red</h1>
      <div className="py-4 px-6">{count}</div>
      <div className="py-4 px-6">
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        >
          UP
        </button>
      </div>
    </div>
  );
}
