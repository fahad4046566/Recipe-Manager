
import Navbar from "./Components/Navbar";
import { Outlet } from 'react-router-dom'
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
