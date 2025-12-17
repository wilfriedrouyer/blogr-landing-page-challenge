import Home from "./pages/Home";
import Header from "./components/Header/HeroSection";

import "./styles/App.css"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
