import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import 路由
import Home from "./pages/Home";
import Act from "./pages/Act";
import Booking from "./pages/Booking";
import Member from "./pages/Member/Member";
import Recipes from "./pages/Recipes";
import SuMap from "./pages/SuMap";
import Login from "./pages/Login/";
import NoFound from "./pages/noFound";

function App() {
    const [auth, setAuth] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1>Welcome Home</h1>{" "}
                            <p>please insert suyouong in your URL, thanks.</p>
                        </>
                    }
                />
                <Route path="/shuyoung">
                    <Route index element={<Home auth={auth} />} />
                    <Route path="Act" element={<Act auth={auth} />} />
                    <Route path="Booking" element={<Booking auth={auth} />} />
                    <Route path="Member">
                        <Route index element={<Member auth={auth} />} />
                        {/* <Route path="Coupon" element={<Coupon />} />
                        <Route path="Keep" element={<Keep />} /> */}
                    </Route>
                    <Route path="Recipes" element={<Recipes auth={auth} />} />
                    <Route path="SuMap" element={<SuMap auth={auth} />} />
                    <Route
                        path="Login"
                        element={<Login auth={auth} setAuth={setAuth} />}
                    />
                    {/* 404未找到的頁面路由，需放在最下方 */}
                    <Route path="*" element={<NoFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
