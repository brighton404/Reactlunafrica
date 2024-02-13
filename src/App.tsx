import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Flow from "./pages/Flow";
import About from "./pages/About";
import Dashblog from "./pages/DashBlog";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/flow":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/BlogDashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {       document.title = title;    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashblog" element={<Dashblog />} />
      </Routes>
    </Router>
  );
}
export default App;
