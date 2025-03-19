import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Pages/Login";
import Admin from "./Component/Pages/Admin";
import Header from "./Component/Header";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Teams from "./Component/Teams";
import Footer from "./Component/Footer";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page (No Header/Footer) */}
        <Route path="/login" element={<Login />} />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} />

        {/* Home Page (With Header/Footer) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Blog />
              <Teams />              
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}