import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./pages/Login/sub-pages/AuthProvider";
import { MemberProvider } from "./pages/Login/sub-pages/MemberProvider";
import { ThemeProvider } from "./utils/useBackground";

import { useSpinner } from "./useSpinner";

// import 路由
import Home from "./pages/Home";
import Act from "./pages/Act";
import Booking from "./pages/Booking";
import Member from "./pages/Member/Member";
import Recipes from "./pages/Recipes";
import SuMap from "./pages/SuMap";
import Login from "./pages/Login";
import NoFound from "./pages/noFound";
// import Create from "./pages/Booking/sub-pages/Create";
import Cart from "./pages/Carts";
// import Navbar from "./components/Navbar";
// import Footer from "./components/footer";
import Layout from "./components/Layout";
import MRegister from "./pages/Register/components/MRegister";

function App() {
    const [auth, setAuth] = useState(false);

    const { spinner, setLoading } = useSpinner(1300);

    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <MemberProvider>
                        <ThemeProvider>
                            <Layout>
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <>
                                                <h1>Welcome Home</h1>{" "}
                                                <p>
                                                    please insert suyouong in
                                                    your URL, thanks.
                                                </p>
                                            </>
                                        }
                                    />
                                    <Route path="/shuyoung">
                                        <Route
                                            index
                                            element={<Home auth={auth} />}
                                        />
                                        <Route
                                            path="Act"
                                            element={<Act auth={auth} />}
                                        />
                                        <Route path="Booking">
                                            <Route
                                                index
                                                element={
                                                    <Booking auth={auth} />
                                                }
                                            />
                                            {/* <Route path="Create" element={<Create />} /> */}
                                        </Route>

                                        <Route path="Member">
                                            <Route
                                                index
                                                element={<Member auth={auth} />}
                                            />
                                            {/* <Route path="Coupon" element={<Coupon />} />
                            <Route path="Keep" element={<Keep />} /> */}
                                        </Route>
                                        <Route
                                            path="Recipes"
                                            element={<Recipes auth={auth} />}
                                        />
                                        <Route
                                            path="SuMap"
                                            element={<SuMap auth={auth} />}
                                        />
                                        <Route
                                            path="Cart"
                                            element={<Cart auth={auth} />}
                                        />
                                        <Route path="Join">
                                            <Route
                                                index
                                                element={
                                                    <Login
                                                        auth={auth}
                                                        setAuth={setAuth}
                                                    />
                                                }
                                            />
                                            <Route
                                                path="Register"
                                                element={
                                                    <MRegister auth={auth} />
                                                }
                                            />
                                        </Route>
                                        {/* 404未找到的頁面路由，需放在最下方 */}
                                        <Route path="*" element={<NoFound />} />
                                    </Route>
                                </Routes>
                            </Layout>
                        </ThemeProvider>
                    </MemberProvider>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
