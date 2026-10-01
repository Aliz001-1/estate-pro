import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agents from "./pages/Agents";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Map from "./pages/Map";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/properties"
          element={<Properties />}
        />

        <Route
          path="/properties/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/agents"
          element={<Agents />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route path="/map" element={<Map />} />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;