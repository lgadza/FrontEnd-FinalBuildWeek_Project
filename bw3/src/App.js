import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import TopNavBar from "./components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResuts";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <TopNavBar />
        <ProfilePage />
        <SearchResults />
      </Container>
      <Routes>
        <Route element={<SearchResults />} path="/search" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
