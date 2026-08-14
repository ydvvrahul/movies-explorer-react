import React from "react"
import { Link } from "react-router-dom"

function MovieDetailList({ movie }) {

  return (
    <div className="w-full flex justify-center items-center p-2 sm:p-4 bg-slate-950">
      <div className="relative w-full max-w-6xl h-[86vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={movie?.Poster}
            alt={movie?.Title}
            className="w-full h-full object-cover opacity-20 filter blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/90 to-slate-900/40" />
        </div>

        <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between border-b border-slate-800/60 bg-slate-900/40 backdrop-blur-sm">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all border border-slate-700/50"
          >
            ← Back to Home
          </Link>

          <div className="flex items-center gap-2">
            <span className="bg-amber-400/10 text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              ⭐ {movie?.imdbRating} / 10
            </span>
          </div>
        </div>

        <div className="relative z-10 flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start h-full">
            <div className="md:col-span-4 lg:col-span-4 flex justify-center">
              <div className="relative aspect-2/3 w-48 sm:w-64 md:w-full max-w-xs rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl group">
                <img
                  src={movie?.Poster}
                  alt={movie?.Title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-8 space-y-5">
              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {movie?.Title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs sm:text-sm text-slate-400 font-medium">
                  <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300">
                    {movie?.Year}
                  </span>
                  <span>•</span>
                  <span>{movie?.Runtime}</span>
                  <span>•</span>
                  <span className="text-slate-300">Dir. {movie?.Director}</span>
                  <span>•</span>
                  <span className="text-slate-300">
                    Writers. {movie?.Writer}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-red-950/60 border border-red-800/40 text-red-300 text-xs font-semibold rounded-full">
                    {movie?.Genre}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider ">
                  Overview
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {movie?.Plot}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h2 className=" font-bold text-slate-200 uppercase tracking-wider text-xs">
                  Top Cast
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-800/80 border border-slate-700/60 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium">
                    {movie?.Actors}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailList;
