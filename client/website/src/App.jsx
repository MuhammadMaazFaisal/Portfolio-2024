import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense } from "react";

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

// Layout Component
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet /> {/* Renders the child route */}
      </div>
      <Footer />
    </div>
  );
};

// Router Configuration with Future Flags
const router = createBrowserRouter(
  [
    {
      element: <MainLayout />, // Wrap all routes with MainLayout
      children: [
        {
          path: "/",
          element: (
            <>
              <div className="relative z-0 bg-primary">
                <Hero />
                <StarsCanvas />
              </div>
              <About />
              <Works />
              <Feedbacks />
              <Experience />
              <Blogs />
              <div className="relative z-0">
                <Contact />
              </div>
            </>
          ),
        },
        {
          path: "/blogs",
          element: <BlogList />,
        },
        {
          path: "/blogs/:slug",
          element: <BlogDetails />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
