// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Footer,
  Blogs,
  BlogList,
  BlogDetails,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative z-0">
                  <Hero />
                  <StarsCanvas />
                </div>
                <About />
                <Works />
                <Feedbacks />
                <Experience />
                <Blogs /> {/* Add the Blogs component here */}
                <div className="relative z-0">
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          {/* Add any additional routes here */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
