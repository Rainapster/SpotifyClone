import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="playlists" element={<Playlists />} />
          {/* Rotta dinamica per le playlist specifiche */}
          <Route path=":playlistName" element={<Playlists/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
