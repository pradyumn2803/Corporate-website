import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/header";
import Hero from "./components/hero";
import Appabout from "./components/about";
function App() {
  return(
    <div className="App">
      <header>
        <AppHeader></AppHeader>
      </header>
      <main>
        <Hero></Hero>
        <Appabout></Appabout>
      </main>
    </div>
  )

}

export default App;
