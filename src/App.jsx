import "animate.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import WorksPage from "./WorksPage";

function App() {
  const [works, setWorks] = useState([]);

  const fetchWorks = async () => {
    const res = await fetch("./projects.json");
    const data = await res.json();
    setWorks(data);
  };

  useEffect(() => {
    try {
      fetchWorks();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="animate__animated animate__fadeIn shadow-sm">
      <div className="xl:min-w-[1200px] sm:w-full bg-white min-h-screen rounded-sm ">
        <header className="flex items-center justify-between xl:px-28 xl:py-16 sm:px-6 sm:py-6">
          <div>
            <Link to="/" className="xl:text-2xl sm:text-lg font-bold">
              agshin.dev
            </Link>
          </div>
          <nav>
            <ul className="flex gap-10 font-medium xl:text-lg sm:text-sm">
              <li>
                <Link
                  to={"/about"}
                  className=" hover:text-red-700 transition-colors"
                >
                  Haqqımda
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className=" hover:text-red-700 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" hover:text-red-700 transition-colors"
                >
                  Əlaqə
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              index
              element={<HomePage works={works} setWorks={setWorks} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/works"
              element={<WorksPage works={works} setWorks={setWorks} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <footer className="flex justify-between xl:px-28 xl:py-16 sm:px-6 sm:py-6">
        <div>
          <p>© {new Date().getFullYear()} agshin.dev</p>
        </div>
        <nav>
          <ul className="flex gap-3 items-center">
            <li>
              <a href="https://www.linkedin.com/in/agshinzada/">
                <img src="./linkedin-icon.svg" alt="linkedin" className="w-5" />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/agshinzada">
                <img src="./github-icon.svg" alt="github" className="w-5" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/agshinzada">
                <img src="./facebook-icon.svg" alt="facebook" className="w-5" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/agshinzada">
                <img
                  src="./instagram-icon.svg"
                  alt="instagram"
                  className="w-5"
                />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
