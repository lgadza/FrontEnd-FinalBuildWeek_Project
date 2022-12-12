import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import TopNavBar from "./components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Container>
      <TopNavBar />
      <ProfilePage />
    </Container>
  );
}

export default App;
