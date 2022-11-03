import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Character from "./components/Character";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/characters/:page" element={<Home />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
