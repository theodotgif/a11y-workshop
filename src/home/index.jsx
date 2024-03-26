import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-2xl font-semibold">
        BrightHR A11y Workshop - 26/03/2024
      </h1>
      <div className="flex gap-6 text-lg text-blue-600 underline">
        <Link to="/form" className="hover:text-blue-900">
          Bad Form
        </Link>
        <Link to="/sports" className="hover:text-blue-900">
          Colour Blindness
        </Link>
      </div>
    </section>
  );
};

export default Home;
