import React, { useState } from "react";
import NavBar from "../../components/Navbar/navBar";
//import SearchIcon from "@mui/icons-material/Search";
import AddBook from "../AddBook/addBook";
import BookTable from "../BookTable/bookTable";
import "./Home.css";
import { useNavigate } from "react-router-dom";
// import issueBook from "../issueBook/issueBook";

const Home = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleOpen = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  const navigate = useNavigate();

  const handleIssueBook = () => {
    navigate("/issuebook"); // Redirects to the IssueBook route
  };

  const handleReturnBook = () => {
    navigate("/returnbook"); // Redirects to the ReturnBook route
  };



  return (
    <div className="homesec">
      <NavBar />
      <div className="home">
        <div className="container1">
          <div className="buttonSection">
            <span>Add/Issue/Return Books</span>
            <div className="addBookContainer">
              <button className="AddBook" onClick={handleOpen}>
                Add Book
              </button>
            </div>

            <button className="IssueBook" onClick={handleIssueBook}>
              Issue Book
            </button>
            <button className="ReturnBook" onClick={handleReturnBook}>
              Return Book
            </button>
          </div>

          {/* Popup Form */}
          {formOpen && (
            <div className="popupBackdrop">
              <div className="popupContent">
                <button className="popupCloseButton" onClick={handleClose}>
                  &times;
                </button>
                <AddBook onClose={handleClose} />
              </div>
            </div>
          )}
        </div>

        <div className="summaryTable" style={{ backgroundColor: "white" }}>
          <div className="search-bar" style={{ margin: "20px" }}>
          <input
              type="text"
              placeholder="Search for a book..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </div>

          <div className="bkTab" style={{ margin: "20px" }}>
            <BookTable searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
