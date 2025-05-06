import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Mainsection from "./Components/Mainsection";
import Footer from "./Components/footer";
import YoutubeVideos from "./Components/YoutubeVideos";
import Iphone from "./pages/Iphone";
import SingleAppleProduct from "./pages/SingleAppleProduct";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mainsection />
              <YoutubeVideos />
            </>
          }
        />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:id" element={<SingleAppleProduct />} />{" "}
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// Imports:

// React Router components (Router, Routes, Route) to set up navigation.

// Other components like Header, Footer, Mainsection, YoutubeVideos, Iphone, and SingleAppleProduct.

// Router Setup:

// Wraps the whole app in a <Router> to enable routing/navigation.

// Page Layout:

// Always shows <Header /> at the top and <Footer /> at the bottom on all pages.

// Route Definitions:

// / → Loads Mainsection and YoutubeVideos as the homepage.

// /iphone → Loads the Iphone component that lists all iPhones.

// /iphone/:id → Loads SingleAppleProduct, showing detailed info for one product (based on ID from URL).