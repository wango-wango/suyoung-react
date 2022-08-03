import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./pages/Login/sub-pages/AuthProvider";
import { MemberProvider } from "./pages/Login/sub-pages/MemberProvider";
import { ThemeProvider } from "./utils/useBackground";
import { BookingProvider } from "./utils/useBookingList";
import { useSpinner } from "./useSpinner";

// import 路由
import Home from "./pages/Home";
import Atv from "./pages/Act/Atv";
import Float from "./pages/Act/Float";
import Night from "./pages/Act/Night";
import Upstream from "./pages/Act/Upstream";
import Booking from "./pages/Booking";
import Member from "./pages/Member/Member";
import Recipes from "./pages/Recipes";
import SuMap from "./pages/SuMap/SuMap";
import Login from "./pages/Login";
import NoFound from "./pages/noFound";
// import Create from "./pages/Booking/sub-pages/Create";
import Cart from "./pages/Carts";
// import Navbar from "./components/Navbar";
// import Footer from "./components/footer";
import Layout from "./components/Layout";
import MRegister from "./pages/Register/components/MRegister";
import BookingDetail from "./pages/Booking/sub-pages/BookingDetail";
import SuMapBeauty from "./pages/SuMap/SuMapBeauty"

function App() {
    const [auth, setAuth] = useState(false);

    const { spinner, setLoading } = useSpinner(1300);

    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <MemberProvider>
                        <ThemeProvider>
                            <BookingProvider>
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
                                        <Route path="Act">
                                            <Route
                                                path="Atv"
                                                element={<Atv auth={auth} />}
                                            />
                                            <Route
                                                path="Float"
                                                element={<Float auth={auth} />}
                                            />
                                            <Route
                                                path="Night"
                                                element={<Night auth={auth} />}
                                            />
                                            <Route
                                                path="Upstream"
                                                element={
                                                    <Upstream auth={auth} />
                                                }
                                            />
                                        </Route>

                                        <Route path="Booking">
                                            <Route
                                                index
                                                element={
                                                    <Booking auth={auth} />
                                                }
                                            />
                                            <Route
                                                path="BookingDetail"
                                                element={<BookingDetail />}
                                            />
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
                                        <Route path="SuMap">
                                            <Route
                                                index
                                                element={<SuMap auth={auth} />}
                                            />
                                            <Route
                                                path="beauty"
                                                element={<SuMapBeauty auth={auth} />}
                                            />
                                        </Route>
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
                       
                   
                            </BookingProvider>
                   
                    
                        </ThemeProvider>
                    </MemberProvider>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
