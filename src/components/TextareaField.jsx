import { useState } from "react";
import { PropTypes } from "prop-types";

export const TextareaField = ({
  id,
  resDesign,
  label,
  placeholder,
  onChange,
  value,
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  return (
    <div className={`form-control ${resDesign} pb-4`}>
      <label htmlFor={id} className="block pb-1 text-sm">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full px-2.5 py-3.5 text-base rounded-lg border border-gray-300"
        rows={7}
        value={value || inputValue}
        placeholder={placeholder}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange && onChange(e.target.value);
        }}
      />
    </div>
  );
};

TextareaField.defaultProps = {
  placeholder: "",
  resDesign: "w-full",
};

TextareaField.propTypes = {
  id: PropTypes.string.isRequired,
  resDesign: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default TextareaField;
