import { Link } from "react-router-dom";

const Form = () => {
  return (
    <section className="bg-grey">
      <Link to="/" className="underline text-blue-600 hover:text-blue-900">
        Home
      </Link>
      <h1>A bad form</h1>
      <form action=""></form>
    </section>
  );
};

export default Form;
