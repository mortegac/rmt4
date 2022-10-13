import { useEffect } from "react";
import { SettingsInactiveSVG } from "./svg/settings-inactive";
import { SettingsXeActiveSVG } from "./svg/settings-xe-active";
import { SettingsActiveSVG } from "./svg/settings-active";
import { StyledInputGeoCoder } from "./InputGeoCoder.styles";
import { getMapbox } from "../Maps/mapbox";
import { getGeocoder } from "./geocoder";

export const InputGeoCoder = ({ theme, filterActive, onClick }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (getGeocoder()) {
        clearInterval(interval);
        document.querySelector("#geo .mapboxgl-ctrl-geocoder")?.remove();
        getMapbox().geocoder(getGeocoder(), "geo");
      }
    }, 1);
  }, []);

  const openFilter = () => {
    if (onClick !== undefined) {
      onClick();
    }
  };

  const onKeyUpEnter = (e) => {
    if (e.keyCode === 13) {
      document.activeElement.blur();
      return false;
    }
  };

  return (
    <StyledInputGeoCoder id="geo" className="search-box" onKeyUp={onKeyUpEnter}>
      <span onClick={openFilter}>
        {!filterActive ? (
          <SettingsInactiveSVG />
        ) : theme === "xe" ? (
          <SettingsXeActiveSVG />
        ) : (
          <SettingsActiveSVG />
        )}
      </span>
    </StyledInputGeoCoder>
  );
};
