import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Navbar /> {/* Render Navbar at the top */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* HomeBox component on root path */}
                <Route path="*" element={<h1>Error page</h1>} />
            </Routes>
        </>
    );
}

export default App;
