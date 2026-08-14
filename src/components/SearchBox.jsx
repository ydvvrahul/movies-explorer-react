import React, { useRef, useState } from 'react';

const SearchBox = ({
    fetchMovieData,
}) => {
  const [inp, setInp] = useState("");
  const inpRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanInp = inpRef.current.value.trim();
    fetchMovieData(inp)
    
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center w-full max-w-xl mx-auto gap-2"
    >
      {/* Input Field */}
      <div className="relative grow">
        <input
          type="text"
          ref={inpRef}
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          placeholder="Search for movies, actors, genres..."
          className="w-full bg-slate-900 text-white placeholder-slate-500 border border-slate-700 rounded-lg py-3 px-4 pr-10 text-sm sm:text-base focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all shadow-sm"
        />
        {/* Clear Button (appears when user types) */}
        {inp && (
          <button
            type="button"
            onClick={() => setInp("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold bg-slate-800 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold py-3 px-5 rounded-lg text-sm sm:text-base transition-all duration-200 shadow-md shadow-red-600/20 whitespace-nowrap"
      >
        <span>🔍</span>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBox;