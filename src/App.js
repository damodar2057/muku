import Sidebar from "./components/Sidebar/Sidebar"
import Topbar from "./components/Topbar/Topbar"
import './app.css'
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <>
    <Topbar />
    <div className="container">
      <div className="timro">

      <Sidebar />
      </div>
      <div className="hamro">

      <Home />
      </div>
      </div>

   
    </>
  )
}

export default App