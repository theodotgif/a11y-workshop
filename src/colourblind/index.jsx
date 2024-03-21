import { Link } from "react-router-dom";

const ColourBlind = () => {
  return (
    <div>
      <Link to="/" className="underline text-blue-600 hover:text-blue-900">
        Home
      </Link>
      <h1>Colour Blind</h1>
    </div>
  );
};

export default ColourBlind;
