import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contacts from "./Pages/Contacts/Contacts";
import Webtv from "./videoswalk/Webtv";
import Certifications from "./Pages/Certifications/Certifications";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <div>
        <Home/>
      </div>
      
    },
   
    {
      path: "/projects",
      element : <div>
      <Projects/>
    </div>
    },
    {
      path: "/contact",
      element : <div>
      <Contacts/>
    </div>
    },
    {
      path: "/webtv",
      element : <div>
      <Webtv/>
    </div>
    },
    {
      path: "/certifications",
      element : <div>
      <Certifications/>
    </div>
    },
  ]);
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
