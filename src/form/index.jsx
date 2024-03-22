import { Link } from "react-router-dom";
import Input from "@brighthr/component-input";
import { useState } from "react";
import Select from "@brighthr/component-select";
import CustomTypeahead from "./components/CustomTypeahead";
import CustomListTypeahead from "./components/CustomListTypeahead";
import Button from "@brighthr/component-button";

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    team: "",
    age: "",
    address: {
      country: "",
      firstLine: "",
      secondLine: "",
      city: "",
      postCode: "",
    },
  });
  const [formIsValid, setFormIsValid] = useState({
    firstName: false,
    lastName: false,
    address: { country: false, firstLine: false, city: false, postCode: false },
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

  const validator = (field) => {
    if (["firstName", "lastName"].includes(field)) {
      if (formValues[field]) {
        setFormIsValid({ ...formIsValid, [field]: true });
      } else {
        setFormIsValid({ ...formIsValid, [field]: false });
      }
    } else {
      if (formValues.address[field]) {
        setFormIsValid({
          ...formIsValid,
          address: { ...formIsValid.address, [field]: true },
        });
      } else {
        setFormIsValid({
          ...formIsValid,
          address: { ...formIsValid.address, [field]: false },
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Link
        to="/"
        className="self-start text-blue-600 underline hover:text-blue-900"
      >
        Home
      </Link>
      <section className="flex flex-col items-center w-1/2 p-8 border border-blue-300 rounded">
        <h1 className="pb-6 text-xl">A Bad Form 😢</h1>

        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-6">
            <Input
              label="First Name"
              placeholder="Joe..."
              value={formValues.firstName}
              onChange={(e) => {
                setFormValues({ ...formValues, firstName: e.target.value });
                validator("firstName");
              }}
              required
              error={formIsValid.firstName}
            />
            <Input
              label="Last Name"
              placeholder="Bloggs..."
              value={formValues.lastName}
              onChange={(e) => {
                setFormValues({ ...formValues, lastName: e.target.value });
                validator("lastName");
              }}
              required
              error={formIsValid.lastName}
            />
          </div>
          <CustomListTypeahead
            formValues={formValues}
            setFormValues={setFormValues}
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
            formIsValid={formIsValid}
            validator={validator}
          />
          {formValues.address.country === "United Kingdom" && (
            <div className="flex flex-col-reverse gap-5">
              <Input
                label="Post code"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    address: {
                      ...formValues.address,
                      postCode: e.target.value,
                    },
                  });
                  validator("postCode");
                }}
                required
                error={formIsValid.address.postCode}
              />
              <Input
                label="City/town"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    address: {
                      ...formValues.address,
                      city: e.target.value,
                    },
                  });
                  validator("city");
                }}
                required
                error={formIsValid.address.city}
              />
              <Input
                label="2nd Line of Address"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    address: {
                      ...formValues.address,
                      secondLine: e.target.value,
                    },
                  });
                }}
              />
              <Input
                label="1st Line of Address"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    address: {
                      ...formValues.address,
                      firstLine: e.target.value,
                    },
                  });
                  validator("firstLine");
                }}
                required
                error={formIsValid.address.firstLine}
              />
            </div>
          )}
          <Button text="Submit" className="self-center w-1/3" />
        </form>
      </section>
    </div>
  );
};

export default Form;
