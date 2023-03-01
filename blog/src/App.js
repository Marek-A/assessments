import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Blogpage from "./pages/Blogpage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Footer />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="blog" element={<Blogpage />} />
      </Routes>
    </div>
  );
}

export default App;
