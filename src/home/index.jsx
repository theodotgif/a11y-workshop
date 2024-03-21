import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="flex gap-4 underline text-blue-600">
        <Link to="/form" className="hover:text-blue-900">
          Form
        </Link>
        <Link to="/colourblind" className="hover:text-blue-900">
          Colour Blind
        </Link>
      </div>
    </>
  );
};

export default Home;
