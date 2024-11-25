import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/header";
import Hero from "./components/hero";
import Appabout from "./components/about";
import Appservice from "./components/services";
import Appworks from "./components/works";
import Appteams from "./components/teams";
import Apptestimonials from "./components/testimonials"

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader></AppHeader>
      </header>
      <main>
        <Hero />
        <Appabout />
        <Appservice />
        <Appworks />
        <Appteams />
        <Apptestimonials/>
      </main>
    </div>
  );

}

export default App;
