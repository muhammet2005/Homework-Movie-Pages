
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Popular from "./components/Pages/Popular";
import NowPlaying from "./components/Pages/NowPlaying";
import UpComing from "./components/Pages/UpComing";
import TopRated from "./components/Pages/TopRated";
import Home from "./components/Home";
import MovieDetail from "./components/Pages/MovieDetail";

function App() {

  return (
    <>
        <Header/>
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/popular"} element={<Popular/>} />
          <Route path={"/now_playing"} element={<NowPlaying/>} />
          <Route path={"/up_coming"} element={<UpComing/>}  />
          <Route path={"/top_rated"} element={<TopRated/>} />
          <Route path={"/movie-detail/:id"} element={<MovieDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
