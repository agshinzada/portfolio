import "animate.css";
import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import WorksPage from "./WorksPage";

function App() {
  return (
    <div className="animate__animated animate__fadeIn shadow-sm">
      <div className="min-w-[1200px] bg-white min-h-screen rounded-sm ">
        <header className="flex items-center justify-between px-28 py-16">
          <div>
            <Link to="/" className="text-2xl font-bold">
              agshin.dev
            </Link>
          </div>
          <nav>
            <ul className="flex gap-10 font-medium">
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
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <footer className="flex justify-between px-28 py-10">
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
