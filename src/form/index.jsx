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
  const [formHasErrors, setFormHasErrors] = useState({
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

  const validator = (field, input) => {
    if (["firstName", "lastName"].includes(field)) {
      if (input) {
        setFormHasErrors((prev) => ({ ...prev, [field]: false }));
      } else {
        console.log("hello");
        setFormHasErrors((prev) => ({ ...prev, [field]: true }));
      }
    } else {
      if (input) {
        setFormHasErrors((prev) => ({
          ...prev,
          address: { ...prev.address, [field]: false },
        }));
      } else {
        setFormHasErrors((prev) => ({
          ...prev,
          address: { ...prev.address, [field]: true },
        }));
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-12">
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
                setFormValues((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }));
                validator("firstName", e.target.value);
              }}
              required
              error={formHasErrors.firstName}
            />
            <Input
              label="Last Name"
              placeholder="Bloggs..."
              value={formValues.lastName}
              onChange={(e) => {
                setFormValues((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }));
                validator("lastName", e.target.value);
              }}
              required
              error={formHasErrors.lastName}
            />
          </div>
          <CustomListTypeahead
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <Select
            label="Age"
            onChange={(e) => {
              setFormValues((prev) => ({ ...prev, age: e.target.value }));
            }}
            className="focus-visible:border-neutral-300"
          >
            {selectOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </Select>
          <div>
            <CustomTypeahead
              formValues={formValues}
              setFormValues={setFormValues}
              formHasErrors={formHasErrors}
              validator={validator}
            />
            <p className="mt-1 text-xs text-neutral-400">
              Please select USA to complete the form
            </p>
          </div>
          {formValues.address.country === "United States of America" && (
            <div className="flex flex-col-reverse gap-5">
              <Input
                label="Post/Zip code"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    address: {
                      ...formValues.address,
                      postCode: e.target.value,
                    },
                  });
                  validator("postCode", e.target.value);
                }}
                required
                error={formHasErrors.address.postCode}
              />
              <Input
                label="City/town"
                onChange={(e) => {
                  setFormValues((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      city: e.target.value,
                    },
                  }));
                  validator("city", e.target.value);
                }}
                required
                error={formHasErrors.address.city}
              />
              <Input
                label="2nd Line of Address"
                onChange={(e) => {
                  setFormValues((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      secondLine: e.target.value,
                    },
                  }));
                }}
              />
              <Input
                label="1st Line of Address"
                onChange={(e) => {
                  setFormValues((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      firstLine: e.target.value,
                    },
                  }));
                  validator("firstLine", e.target.value);
                }}
                required
                error={formHasErrors.address.firstLine}
              />
            </div>
          )}
          <Button
            text="Submit"
            className="self-center w-1/3"
            disabled={
              !formValues.firstName ||
              !formValues.lastName ||
              !formValues.address.country ||
              !formValues.address.firstLine ||
              !formValues.address.postCode ||
              !formValues.address.city
                ? true
                : false
            }
          />
        </form>
      </section>
    </div>
  );
};

export default Form;
