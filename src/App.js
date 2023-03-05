import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Blog from "./pages/blog/blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
