import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ path, isPrimary, title }) => (
  <Link
    to={path}
    className={`rounded-md py-[10px] px-[20px] min-w-max cursor-pointer text-sm flex items-center ${
      isPrimary
        ? "bg-[#2E90FA] text-white"
        : "bg-[#FFFFFF}] text-[#1570EF] border border-[#1570EF]"
    }  `}
  >
    {title}
  </Link>
);
export default Button;

Button.propTypes = {
  path: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isPrimary: true,
};
