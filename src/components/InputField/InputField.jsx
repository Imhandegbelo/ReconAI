import { useState } from "react";
import { PropTypes } from "prop-types";

export default function InputField({
  id = "",
  resDesign = "",
  type = "",
  label = "",
  value = "",
  placeholder = "",
  onChange,
  ...otherProps
}) {
  const [inputValue, setInputValue] = useState(value || "");

  return (
    <div
      className={`form-contro/l ${resDesign} ${
        type === "checkbox"
          ? "flex flex-row-reverse justify-end items-stretch gap-5 text-gray-600"
          : ""
      } pb-4`}
    >
      <label
        htmlFor={id}
        className={`block text-sm ${type === "checkbox" ? "" : "pb-1"}`}
      >
        {label}
      </label>

      <input
        id={id}
        className={`${
          type === "checkbox" ? "w-[16px]" : ""
        }  w-full px-2.5 py-3.5 rounded-lg border border-gray-300 text-base`}
        type={type}
        value={value || inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange && onChange(e.target.value);
        }}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
}

InputField.defaultProps = {
	placeholder: '',
	resDesign: 'w-full',
};

// InputField.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	resDesign: PropTypes.string,
// 	type: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// 	name: PropTypes.string.isRequired,
// 	placeholder: PropTypes.string,
// };

// export default InputField;
