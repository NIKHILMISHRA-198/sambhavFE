// importing from packages
import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importing pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import RegisterForm from "./Pages/Register";
import CreateProduct from "./Pages/Admin/createProduct";
import Collaboration from "./Pages/Collaboration";

function App() {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [""]);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi", // include this for selected languages
        // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <Header />
        <div id="google_translate_element"> </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/collaborate" element={<Collaboration />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
