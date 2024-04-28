import "./App.css";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CoinPage from "./Pages/CoinPage";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/coins/:id" element={ <CoinPage /> } />
            </Routes>
        </div>
    );
}

export default App;
