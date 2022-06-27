import Header from "./Header";
import HeroSection from "./HeroSection";
import Nav from "./Nav";
import coffee from "./coffee.webp";

function App() {
  return (
    <div className="font-primary">
      <Nav />    
      <Header />
      <HeroSection />
      <img src={coffee} />
    </div>
  );
}

export default App; 