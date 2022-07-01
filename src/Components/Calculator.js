import React, { useState } from "react";

const Calculator = () => {
  const [calculate, setcalculate] = useState("");

  const handleclick = (e) => {
    setcalculate(calculate.concat(e.target.value));
  };

  const allClear = () => {
    setcalculate("");
  };

  const clearOne = () => {
    setcalculate(calculate.slice(0, -1));
  };

  const EqualTo = () => {
    try {
      setcalculate(eval(calculate).toString());
    } catch (error) {
      setcalculate("Invalid");
    }
  };
  return (
    <>
      <div className="grid place-item-center h-full place-content-center">
        <div className="bg-[#000] w-60 h-96 rounded-xl shadow drop-shadow-1xl shadow-indigo-100">
          <h1 className="text-white sm:text-3xl font-bold bg-green-900 p-2 uppercase rounded">
            Calculator
          </h1>
          <input
            type="text"
            defaultValue={calculate}
            placeholder="0"
            className="w-56 mt-2 h-16 rounded-lg text-5xl text-right font-bold px-3 shadow-gray-500 shadow-inner"
          />
          <div className="grid grid-cols-4 mt-2 gap-2 mx-2 mt-3">
            <button
              onClick={allClear}
              className="bg-white p-2 rounded font-bold col-span-2"
            >
              AC
            </button>
            <button
              onClick={clearOne}
              className="bg-white p-2 rounded font-bold"
            >
              C
            </button>
            <button
              value="+"
              onClick={handleclick}
              className="bg-[#309C54] text-white p-2 rounded font-bold "
            >
              +
            </button>

            <button
              value="9"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              9
            </button>
            <button
              value="8"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              8
            </button>
            <button
              value="7"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              7
            </button>
            <button
              value="-"
              onClick={handleclick}
              className="bg-[#309C54] text-white p-2 rounded font-bold"
            >
              -
            </button>

            <button
              value="6"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              6
            </button>
            <button
              value="5"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              5
            </button>
            <button
              value="4"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              4
            </button>
            <button
              value="*"
              onClick={handleclick}
              className="bg-[#309C54] text-white p-2 rounded font-bold"
            >
              *
            </button>

            <button
              value="3"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              3
            </button>
            <button
              value="2"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              2
            </button>
            <button
              value="1"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              1
            </button>
            <button
              value="/"
              onClick={handleclick}
              className="bg-[#70C1C3] p-2 rounded font-bold"
            >
              /
            </button>

            <button
              value="."
              onClick={handleclick}
              className="bg-[#70C1C3] p-2 rounded font-bold"
            >
              .
            </button>
            <button
              value="0"
              onClick={handleclick}
              className="bg-white p-2 rounded font-bold"
            >
              0
            </button>
            <button
              onClick={EqualTo}
              className="bg-[#70C1C3] p-2 rounded font-bold col-span-2"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
