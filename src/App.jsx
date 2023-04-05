import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1 className="text-xl">Welcome to nextPage!</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
