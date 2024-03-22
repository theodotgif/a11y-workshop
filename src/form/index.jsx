import { Link } from "react-router-dom";
import Input from "@brighthr/component-input";
import { useState } from "react";
import Select from "@brighthr/component-select";
import CustomTypeahead from "./components/CustomTypeahead";

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    country: "",
  });

  const selectOptions = [
    "Select an age range...",
    "18 - 24",
    "25 - 30",
    "31 - 40",
    "41 - 55",
    "56 - 65",
    "65+",
  ];
  const countrySelected = formValues.country !== "";

  console.log(formValues);

  return (
    <section className="flex flex-col items-center bg-grey">
      <div className="pb-4">
        <Link to="/" className="text-blue-600 underline hover:text-blue-900">
          Home
        </Link>
        <h1 className="text-neutral-400">A bad form</h1>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col w-1/4 gap-5"
      >
        <Input
          label="First Name"
          placeholder="Joe..."
          value={formValues.firstName}
          onChange={(e) => {
            setFormValues({ ...formValues, firstName: e.target.value });
          }}
          required
        />
        <Input
          label="Last Name"
          placeholder="Blogs..."
          value={formValues.lastName}
          onChange={(e) => {
            setFormValues({ ...formValues, lastName: e.target.value });
          }}
          required
        />
        <Select
          label="Age"
          onChange={(e) => {
            setFormValues({ ...formValues, age: e.target.value });
          }}
          className="focus-visible:border-neutral-300"
        >
          {selectOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
        <CustomTypeahead
          formValues={formValues}
          setFormValues={setFormValues}
        />
        {countrySelected && (
          <div className="flex flex-col-reverse gap-5">
            <Input label="Postal/zip code" required />
            <Input label="City/town" required />
            <Input label="2nd Line of Address" />
            <Input label="1st Line of Address" required />
          </div>
        )}
      </form>
    </section>
  );
};

export default Form;
