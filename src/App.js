

import IssueBook from './pages/issueBook/issueBook';

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from "./components/Navbar/navBar";
import Login from "./pages/Login/login";
import Home from "./pages/Home/Home";
import Hero from "./pages/Hero/hero";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="hero" element={<Hero />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="issuebook" element={<IssueBook />} />
      </Routes>
    </Router>
  );
};

export default App;
