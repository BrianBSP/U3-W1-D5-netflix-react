import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import MyFooter from "./components/MyFooter";
import GalleriaFilms from "./components/GalleriaFilms";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MainSection />
      <GalleriaFilms />
      <MyFooter />
    </div>
  );
}

export default App;
