/* eslint-disable react/prop-types */
import ListTypeahead from "@brighthr/component-listtypeahead";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CustomListTypeahead = ({ formValues, setFormValues }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <label>
      <div className="mb-2 text-base font-semibold text-neutral-700">Team</div>
      <ListTypeahead
        selectedItems={selectedItems}
        setSelectedItems={(e) => {
          if (formValues.team === e[0].id) {
            setSelectedItems([]);
            setFormValues((prev) => ({ ...prev, team: "" }));
          } else {
            setSelectedItems(e);
            setFormValues((prev) => ({ ...prev, team: e[0].id }));
          }
        }}
        options={[
          { id: "red", label: "Red" },
          { id: "blue", label: "Blue" },
        ]}
        placeholder="Select your team..."
        isMultiSelect={false}
      />
    </label>
  );
};

export default CustomListTypeahead;
