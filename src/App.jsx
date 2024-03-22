import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./home";
import Form from "./form";
import SportPage from "./sports";

function App() {
  return (
    <main className="p-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/sports" element={<SportPage />} />
      </Routes>
    </main>
  );
}

export default App;
