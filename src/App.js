import "./App.css";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFound/NotFound";
import Signup from "./component/Signup/Signup";
import Login from "./component/Login/Login";
import About from "./component/About/About";
import Landing from "./component/Landing/Landing";
import Download from "./component/Download/Download";
import React from "react";
import Footer from "./component/Footer/Footer";
import NewNav from "./component/NewNav/NewNav";
import Nabbar from "./component/Nabbar1/Nabbar1";
import Blog from "./component/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <NewNav /> */}
      <Nabbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
