import { useState } from "react";
import typeaheadItems from "../../assets/countryList";
import Typeahead from "@brighthr/component-typeahead";

// eslint-disable-next-line react/prop-types
const CustomTypeahead = ({ formValues, setFormValues }) => {
  const [typeaheadFilterValue, setTypeaheadFilterValue] = useState("");
  const typeaheadItemsFiltered = typeaheadItems.filter((item) =>
    item.toLowerCase().includes(typeaheadFilterValue.toLowerCase())
  );

  return (
    <label>
      <div className="flex items-center justify-between mb-2">
        <span className="text-base font-semibold text-neutral-700">
          Country
        </span>
        <span className="text-xs font-normal text-accent-600">Required</span>
      </div>
      <Typeahead
        filterValue={typeaheadFilterValue}
        setFilterValue={setTypeaheadFilterValue}
        // eslint-disable-next-line react/prop-types
        value={formValues.country}
        placeholder="Select your country..."
        closeOnChange
      >
        <>
          <option
            className="hover:bg-blue-100 py-0.5 cursor-pointer"
            key={"No country"}
            onClick={(e) => {
              e.preventDefault();
              setFormValues({
                ...formValues,
                country: "",
              });
            }}
          >
            No country
          </option>
          {typeaheadItemsFiltered.map((item) => {
            return (
              <option
                className="hover:bg-blue-100 py-0.5 cursor-pointer"
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  setFormValues({
                    ...formValues,
                    country: e.target.value,
                  });
                }}
              >
                {item}
              </option>
            );
          })}
        </>
      </Typeahead>
    </label>
  );
};

export default CustomTypeahead;
