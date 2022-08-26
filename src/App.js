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
import CreateProduct from "./Pages/Admin/CreateProduct";
import Education from "./Pages/Education.js";
import ProductDetails1 from "./Pages/ProductDetails1.js";
import ProductDetails2 from "./Pages/ProductDetails2.js";
import SHGDetails from "./Pages/SHGDetails.js";
import Collaboration from "./Pages/Collaboration";
import Advanced from "./CollaborationCard/CollabCard";
import "./App.css";
import Shg_sales from "./Pages/Shg_sales";
function App() {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi,kn", // include this for selected languages
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
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/collaborate" element={<Collaboration />} />
          <Route path="/education" element={<Education />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* product pages */}
          <Route path="/productDetails/1" element={<ProductDetails1 />} />
          <Route path="/productDetails/2" element={<ProductDetails2 />} />
          <Route path="/products" element={<Products />} />

          <Route path="/shgdetails" element={<SHGDetails />} />
          <Route path="/collab" element={<Advanced />} />
          <Route path="/SHGdashboard" element={<Shg_sales />} />
        </Routes>
        <div
          dangerouslySetInnerHTML={{
            __html: `
   <df-messenger
     intent="Hello"
     chat-title="Sambhav_Sahayta"
     agent-id="8211dd2f-1779-4567-8049-08fbe4b3b6f0"
     language-code="kn">
   </df-messenger>
`,
          }}
        />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
