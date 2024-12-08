import React, { useState } from "react";
import NavBar from "../../components/Navbar/navBar";
import SearchIcon from "@mui/icons-material/Search";
import AddBook from "../../pages/AddBook/addBook";
import "./Home.css";

const Home = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handleOpen = () => {
    setFormOpen(true);
    
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  return (
    <div className="homesec">
      <NavBar />
      <div className="home">
        <div className="buttonSection">
          <span>Add/Issue/Return Books</span>
          <div className="addBookContainer">
                <button className="AddBook" onClick={handleOpen}>Add Book</button>

                {/* Popup Form */}
                {formOpen && (
                  <div className="popupContent">
                    <AddBook onClose={handleClose} />
                  </div>
                )}
          </div>
          <button className="IssueBook">Issue Book</button>
          <button className="ReturnBook">Return Book</button>
        </div>

        <div className="summaryTable">
          <div className="searchbar">
            <input className="search1" placeholder="Search For The Book"></input>
            <button>
              <SearchIcon style={{ color: "black", marginTop: "10px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      
    </div>
  );
};

export default Home;
