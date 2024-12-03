import "./App.css";

import NavBar from "./components/navBar";
import Login from "./pages/Login/login";

import Home from "./pages/Home";
import IssueBook from "./components/issueBook/issueBook";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Home />
      <IssueBook />
    </div>
  );
}

export default App;
