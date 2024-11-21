import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/header";
import Hero from "./components/hero";
import Appabout from "./components/about";
import Appservice from "./components/services";
function App() {
  return(
    <div className="App">
      <header>
        <AppHeader></AppHeader>
      </header>
      <main>
        <Hero/>
        <Appabout/>
        <Appservice/>
      </main>
    </div>
  )

}

export default App;
