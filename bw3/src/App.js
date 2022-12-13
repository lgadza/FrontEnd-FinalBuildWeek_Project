import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import TopNavBar from "./components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResuts";
import UserProfile from "./components/UserProfile";
import PostSection from "./components/PostSection";
import MainProfilePage from "./components/MainProfilePage";
import EditIntro from "./components/EditIntro";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <TopNavBar />
        <ProfilePage />
        <UserProfile />
        <PostSection />
        <MainProfilePage />
        <EditIntro />
      </Container>

      <Routes>
        {/* <Route element={<SearchResults />} path="/search" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
