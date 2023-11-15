import Hero from "./components/Hero/Hero"
import StarsCanvas from "./components/Hero/StarBackground"
import NavBar from "./components/Navbar/NavBar"
import Skills from "./components/Skills/Skills"

function App() {

  return (
    <main className="bg-[#030014] overflow-hidden ">
      <NavBar />

      <StarsCanvas />

      <div className="flex flex-col gap-20 h-[750px]">
        <Hero />
      </div>
      <Skills />

    </main >
  )
}

export default App
