import PropTypes from "prop-types";
import { NavMobileItemContainer } from "./NavMobileItemStyles";

export const NavMobileItem = ({ index, id, url, label, isSelected, open, setOpen}) => {
  const selected = isSelected ? "selected" : "";

  return (
    <NavMobileItemContainer>
    <a
      index={index}
      className={selected}
      id={id}
      href={url || "#"}
      onClick={() => setOpen(!open)}
    >
      {label}
    </a>
    </NavMobileItemContainer>
  );
};

NavMobileItem.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  url: PropTypes.string,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

NavMobileItem.defaultProps = {
  index: 1,
  id: 1,
  url: "#",
  label: "Default link",
  isSelected: false,
};
