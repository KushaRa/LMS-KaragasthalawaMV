import React from "react";
import NavBar from "../components/Navbar/navBar";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="buttonSection">
          <span>Add/Issue/Return Books</span>
          <button className="AddBook">Add Book</button>
          <button className="IssueBook">Issue Book</button>
          <button className="ReturnBook">Return Book</button>
        </div>

        <div className="summaryTable">
          <div className="searchbar">
            <input className="search1" placeholder="Sarch For The Book"></input>
            <button>
              <SearchIcon style={{ color: "black", marginTop: "10px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
