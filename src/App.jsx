import Hero from "./components/Hero/Hero"
import NavBar from "./components/Navbar/NavBar"

function App() {

  return (
    <main className="bg-[#030014] h-screen overflow-y-scroll overflow-x-hidden">
      <NavBar />

      <div className="flex flex-col gap-20 h-[850px]">
        <Hero />
      </div>

    </main>
  )
}

export default App
