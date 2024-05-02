import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Homepage from "./components/Homepage";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Belandi from "./components/Belandi";
import MovieDetails from "./components/MovieDetails";

// import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <MyNavbar />
        </header>

        <main>
          <Routes>
            <Route path="/TVShows" element={<Homepage />} />
            <Route path="/MovieDetails/:dynamicId" element={<MovieDetails />} />
            <Route path="*" element={<Belandi />} />
          </Routes>
          {/* <Homepage /> */}

          {/* profile page should be visualized without navbar and footer  */}
          {/* <MyProfile /> */}
        </main>

        <footer>
          <MyFooter />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
