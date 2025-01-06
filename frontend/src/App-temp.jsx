import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from "./components/Navbar/navBar";
// import Login from "./pages/Login/login";
// import Home from "./pages/Home/Home";
//import Hero from "./pages/Hero/hero";
import IssueBook from './pages/issueBook/issueBook';
import Members from "./pages/members/Members";
import Hero from "./pages/Hero/hero";
import ReturnBookTable from "./pages/ReturnBook/ReturnBook";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="issuebook" element={<IssueBook />} />
        <Route path="members" element={<Members />} />
        <Route path="/return-book" element={<ReturnBookTable />} />
        </Routes>
        
    </Router>
   
  );


};

export default App;


// <Route path="hero" element={<Hero />} />
