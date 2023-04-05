import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-xl text-center">Welcome to nextPage!</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
