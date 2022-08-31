import "../styles/App.scss"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Nav from "./Nav"
import Footer from "./Footer"


function App() {
  const location = useLocation()

  return (
    <>
      <Nav />

      <main>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>

          </Routes>
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}

export default App;
