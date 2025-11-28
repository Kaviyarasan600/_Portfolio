import { About } from "./About/About"
import { Skills } from "./Skills/Skills"
import { Home } from "./Home/Home"
import { Project } from "./Project/Project"
import { Footer } from "./Footer/Footer"
import { NavBar } from "./NavBar/NavBar"



export const Portfolio = () => {
    return (
        <>
            {/* <div className="scroll-watcher"></div> */}
            <NavBar />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Project />
            </main>
            <Footer />
        </>
    )
}
