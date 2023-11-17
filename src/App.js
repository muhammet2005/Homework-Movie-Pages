// App.js
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Popular from './components/Pages/Popular';
import NowPlaying from './components/Pages/NowPlaying';
import UpComing from './components/Pages/UpComing';
import TopRated from './components/Pages/TopRated';
import Home from './components/Home';
import MovieDetail from './components/Pages/MovieDetail';
import { useState } from 'react';

function App() {
    const [dark, setDark] = useState(false);

    return (
        <>
            <Header dark={dark} setDark={setDark} />
            <Routes>
                <Route path={'/'} element={<Home dark={dark} setDark={setDark} />} />
                <Route path={'/popular'} element={<Popular dark={dark} />} />
                <Route path={'/now_playing'} element={<NowPlaying dark={dark} />} />
                <Route path={'/up_coming'} element={<UpComing dark={dark} />} />
                <Route path={'/top_rated'} element={<TopRated dark={dark} />} />
                <Route path={'/movie-detail/:id'} element={<MovieDetail />} />
            </Routes>
        </>
    );
}

export default App;
