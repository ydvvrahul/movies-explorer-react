import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import MovieDetails from "./pages/MovieDetails.jsx"
import About from "./pages/About.jsx"
import Error from "./pages/Error.jsx"
import { useState } from "react"

function App() {

  const [movieData , setMovieData] = useState([]);

  const fetchMovieData = async (query)=>{
    const res = await fetch(`http://www.omdbapi.com/?apikey=40cc9e16&s=${query}`)
    const data = await res.json();
    console.log(data.Search)
    setMovieData(data.Search)
  }

  return (
    <BrowserRouter>
      <div className="h-screen w-full bg-slate-950 text-slate-100 flex flex-col  relative font-sans">
        <Navbar />
        <div className="min-w-full h-2/15  bg-slate-900"></div>
        <Routes>
          <Route path="/" element={<Home movieData={movieData} fetchMovieData={fetchMovieData}/>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
