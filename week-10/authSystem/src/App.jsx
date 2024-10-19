import AuthContext from "./components/AuthContext"
import "./index.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"


function App() {
  return (
    <div className="bg-[#242424] min-h-screen font-authFont text-gray-400">
      <AuthContext>
        <Navbar/>
        <Home/>
      </AuthContext>
    </div>
  )
}

export default App
