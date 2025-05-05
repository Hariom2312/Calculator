import React,{ useState } from "react";
import { evaluate } from "mathjs";

const Home = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
  };
  
 const calculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const cross = (value) => {
    setInput(input.slice(0, -1));
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black ">
    
      <div className="bg-white p-6 rounded-lg shadow-lg text-center gap-2">
       <div className="mb-2 text-xl">Calculator</div>
        <input
          className="w-full text-right text-2xl p-2 mb-4 border rounded"
          value={input}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              className="p-4 bg-gray-200 rounded hover:bg-gray-300 text-xl"
              onClick={() =>
                btn === "=" ? calculate() : handleClick(btn)
              }
            >
              {btn}
            </button>
          ))}
          
          </div>
         <div className="flex justify-center">
             <button
            className=" w-44 m-2 p-4 bg-red-400 text-white rounded hover:bg-red-500"
            onClick={clear}
          >
            Clear
          </button>
          <button
           className=" my-2 p-4 bg-red-400 text-white rounded hover:bg-red-500"
           onClick={cross}>
           
            BackSpace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
