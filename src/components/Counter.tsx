import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center text-center">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="bg-red-700 text-white w-8 h-8"
      >
        -
      </button>
      <h3 className="w-10">{count}</h3>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-700 text-white w-8 h-8"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
