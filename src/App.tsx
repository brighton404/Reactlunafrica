import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Flow from "./pages/Flow";
import About from "./pages/About";
import Dashblog from "./pages/DashBlog";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "Reactlunafrica/":
        title = "";
        metaDescription = "";
        break;
      case "Reactlunafrica/blog":
        title = "";
        metaDescription = "";
        break;
      case "Reactlunafrica/flow":
        title = "";
        metaDescription = "";
        break;
      case "Reactlunafrica/About":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Reactlunafrica/" element={<Home />} /> {/** supporting github routing */}
        <Route path="Reactlunafrica/About" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/dashblog" element={<Dashblog />} />
      </Routes>
  );
}
export default App;
