import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ path, isPrimary, title, width }) => (
  <button
    to={path}
    className={`rounded-md flex justify-center py-3 px-5 border border-[#2E90FA] min-w-max ${width} cursor-pointer text-sm flex items-center ${
      isPrimary
        ? "bg-[#2E90FA] text-white hover:bg-white hover:text-[#2E90FA]"
        : "bg-[#FFFFFF] text-[#2E90FA] hover:bg-[#2E90FA] hover:text-white"
    }  `}
  >
    {title}
  </button>
);
export default Button;

Button.propTypes = {
  path: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  title: PropTypes.string.isRequired,
  width: PropTypes.string
};

Button.defaultProps = {
  isPrimary: true,
};
