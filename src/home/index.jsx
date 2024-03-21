import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/colourblind">Colour Blind</Link>
      </div>
    </div>
  );
};

export default Home;
