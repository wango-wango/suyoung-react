import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import 路由
import Home from "./pages/Home";
import Act from "./pages/Act";
import Atv from "./pages/Act/sub-pages/Atv";
import Float from "./pages/Act/sub-pages/Float";
import Night from "./pages/Act/sub-pages/Night";
import Upstream from "./pages/Act/sub-pages/Upstream";
import Booking from "./pages/Booking";
import Member from "./pages/Member/Member";
import Recipes from "./pages/Recipes";
import SuMap from "./pages/SuMap";
import Login from "./pages/Login";
import NoFound from "./pages/noFound";
// import Create from "./pages/Booking/sub-pages/Create";
import Cart from "./pages/Carts";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
    const [auth, setAuth] = useState(false);
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <h1>Welcome Home</h1>{" "}
                                <p>
                                    please insert suyouong in your URL, thanks.
                                </p>
                            </>
                        }
                    />
                    <Route path="/shuyoung">
                        <Route index element={<Home auth={auth} />} />
                        <Route path="Act">
                            <Route index element={<Act auth={auth} />} />
                            <Route path="Atv" element={<Atv auth={auth} />} />
                            <Route path="Float" element={<Float auth={auth} />} />
                            <Route path="Night" element={<Night auth={auth} />} />
                            <Route path="Upstream" element={<Upstream auth={auth} />} />
                        </Route>
                        <Route path="Booking">
                            <Route index element={<Booking auth={auth} />} />
                            {/* <Route path="Create" element={<Create />} /> */}
                        </Route>

                        <Route path="Member">
                            <Route index element={<Member auth={auth} />} />
                            {/* <Route path="Coupon" element={<Coupon />} />
                            <Route path="Keep" element={<Keep />} /> */}
                        </Route>
                        <Route
                            path="Recipes"
                            element={<Recipes auth={auth} />}
                        />
                        <Route path="SuMap" element={<SuMap auth={auth} />} />
                        <Route path="Cart" element={<Cart auth={auth} />} />
                        <Route
                            path="Login"
                            element={<Login auth={auth} setAuth={setAuth} />}
                        />
                        {/* 404未找到的頁面路由，需放在最下方 */}
                        <Route path="*" element={<NoFound />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
