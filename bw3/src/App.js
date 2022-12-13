import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import TopNavBar from "./components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import MainProfilePage from "./components/MainProfilePage";
import EditIntro from "./components/EditIntro";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <TopNavBar />
      </Container>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<EditIntro />} path="/edit" />
        <Route element={<MainProfilePage />} path="/profile" />
        <Route element={<UserProfile />} path="/user-profile/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
