import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import RootLayout from "./layouts/RootLayout";
import NameContext from "./context/name";
import { useState } from "react";

//new syntax for using react router, the whole app is built inside of the router which gets rendered in the app function componenet, the header is the main with everything else as a child, and those children can potentially have nested children as well

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
    </Route>
  )
);

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <NameContext.Provider value={{ name, setName }}>
        <RouterProvider router={router} />
      </NameContext.Provider>
    </div>
  );
}

export default App;
