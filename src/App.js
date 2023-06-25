import Footer from "./components/Segment/Footer";
import IntroCover from "./components/Segment/IntroCover";
import Sections from "./components/Segment/Sections";
import FooterBar from "./components/UI/FooterBar";
function App() {
  return (
    <div>
      <header>
        <IntroCover />
      </header>

      <main className="max-w-screen-lg mx-auto">
        <Sections />
      </main>

      <footer>
        <Footer />
        <FooterBar />
      </footer>
    </div>
  );
}

export default App;
