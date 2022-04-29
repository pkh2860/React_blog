import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import View from "./pages/view/View";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Join from "./pages/join/Join";
import Write from "./pages/write/Write";
import Mypage from "./pages/mypage/Mypage";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/Join">
                    <Join />
                </Route>
                <Route path="/View">
                    <View />
                </Route>
                <Route path="/Write">
                    <Write />
                </Route>
                <Route path="/Mypage">
                    <Mypage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
