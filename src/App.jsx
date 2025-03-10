import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import AboutPage from "./Pages/AboutPage";
import Footer from "./Components/Footer";

function App() {
  return (<>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
      </>
    // 
    // </Router>
  );
}

export default App;

