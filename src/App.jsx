import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./home";
import Form from "./form";
import SportPage from "./sports";
import BotaoshiPage from "./sports/botaoshi";
import KabaddiPage from "./sports/kabaddi";
import KorfballPage from "./sports/korfball";
import SepakTakrawPage from "./sports/sepaktakraw";

function App() {
  return (
    <main className="p-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/sports" element={<SportPage />} />
        <Route path="/bo-taoshi" element={<BotaoshiPage />} />
        <Route path="/sports/kabaddi" element={<KabaddiPage />} />
        <Route path="/korfball" element={<KorfballPage />} />
        <Route path="/sports/sepaktakraw" element={<SepakTakrawPage />} />
      </Routes>
    </main>
  );
}

export default App;
