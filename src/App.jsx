import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-50">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
