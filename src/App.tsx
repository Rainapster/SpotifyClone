import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
import PlaylistDetail from "./components/PlaylistDetail/PlaylistDetail";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="playlists" element={<Playlists />} />
          {/* Rotta dinamica per le playlist specifiche */}
          <Route path=":playlistName" element={<Playlists />} />
          <Route path="playlist/:playlistId" element={<PlaylistDetail />} />
          <Route path="search" element={<SearchPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
