import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
