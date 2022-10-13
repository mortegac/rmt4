import PropTypes from "prop-types";
import {NavDesktopItemContainer} from "./NavDesktopItemStyles";

export const NavDesktopItem = ({ index, id, url, label, isSelected}) => {
  const selected = isSelected ? "selected" : "";

  return (
    <NavDesktopItemContainer>
      <a
        key={`top-nav-${index}`}
        id={id}
        href={url || "#"}
        className={selected}
      >
        <li>
          {label}
          <div className="underline"></div>
        </li>
      </a>
    </NavDesktopItemContainer>
  );
};

NavDesktopItem.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  url: PropTypes.string,
  label: PropTypes.string,
  isSelected: PropTypes.bool,
};

NavDesktopItem.defaultProps = {
  index: null,
  id: null,
  url: "#",
  label: "Default link",
  isSelected: false,
};
