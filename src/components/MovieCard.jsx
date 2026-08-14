import React, { useState } from "react"
import { Link } from "react-router-dom"

const MovieCard = ({ ID, Title, Poster, Year, Type }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group h-11/12 relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-950/30 flex flex-col w-full max-w-sm mx-auto mb-2">
      <div className="relative aspect-2/3 w-full overflow-hidden bg-slate-800">
        <img
          src={Poster}
          alt={Title}
          className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-slate-950/80 to-transparent pointer-events-none" />

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Add to favorites"
          className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md border transition-all duration-200 ${
            isFavorite
              ? "bg-red-600 border-red-500 text-white shadow-md shadow-red-600/40"
              : "bg-slate-950/70 border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-900"
          }`}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      <div className="p-4 sm:p-5 flex flex-col grow justify-between  space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-base sm:text-lg text-slate-100 group-hover:text-red-400 transition-colors line-clamp-1">
              {Title}
            </h3>
            <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/50">
              {Year}
            </span>
          </div>

          <div className="mt-2">
            <span className="inline-block px-2.5 py-0.5 bg-red-950/50 border border-red-800/40 text-red-300 text-[11px] font-semibold rounded-full tracking-wide uppercase">
              {Type}
            </span>
          </div>
        </div>

        <Link
          to={`/movie/${ID}`}
          className="w-full mt-2 py-2.5 bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border border-slate-700/60 hover:border-red-500 shadow-sm flex justify-center"
        >
          Watch Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
