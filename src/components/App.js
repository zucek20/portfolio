import "../styles/App.scss"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Nav from "./Nav"
import Footer from "./Footer"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Skills from "../pages/Skills"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"
import Provider from "./AppContext"

function App() {
  const location = useLocation()

  return (
    <Provider>
      <Nav />

      <main>
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </AnimatePresence>

        <Footer />
      </main>
    </Provider>
  );
}

export default App;
