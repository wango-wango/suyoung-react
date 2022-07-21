import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 路由
import Home from "./pages/Home";
import Act from "./pages/Act";
import Booking from "./pages/Booking";
import Member from "./pages/Member";
import Recipes from "./pages/Recipes";
import SuMap from "./pages/SuMap";
import Login from "./pages/Login";

function App() {
    const [auth, setAuth] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/suyoung" element={<Home auth={auth} />} />
                <Route path="/suyoung/Act" element={<Act auth={auth} />} />
                <Route
                    path="/suyoung/Booking"
                    element={<Booking auth={auth} />}
                />
                <Route
                    path="/suyoung/Member"
                    element={<Member auth={auth} />}
                />
                <Route
                    path="/suyoung/Recipes"
                    element={<Recipes auth={auth} />}
                />
                <Route path="/suyoung/SuMap" element={<SuMap auth={auth} />} />
                <Route
                    path="/suyoung/Login"
                    element={<Login auth={auth} setAuth={setAuth} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
