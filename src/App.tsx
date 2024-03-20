import Background from "./shared/bg-cafe.jpg"
import Catalog from "./components/catalog/Catalog.tsx";
import "./App.css"


const App = () => {

  return (
    <div className="app-container">
      <img className="background" src={Background} alt="" />
      <Catalog />
    </div>

  )
}

export default App