import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonLink({ path, isPrimary, title }) {
  return (
    <Link
      to={path}
      className={`rounded-md py-[10px] px-[20px] min-w-max cursor-pointer text-sm flex items-center ${
        isPrimary
          ? "bg-[#2E90FA] text-white hover:bg-white hover:text-[#2E90FA]"
          : "bg-white text-[#1570EF] hover:bg-[#2E90FA] hover:text-white"
      } border border-[#1570EF] `}
    >
      {title}
    </Link>
  );
}

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  isPrimary: true,
};

export default ButtonLink;
