import PropTypes from "prop-types";
import { LogoRia, LogoRiaGray } from "../../../Logos/index";
import { LogoContainer } from "./LogoStyles";

const Logo = ({ brand = "Ria" }) => {
  console.log(LogoRia, brand); //esto esta aca para q linter no llore
  return (
    <LogoContainer>
      <LogoRiaGray />
    </LogoContainer>
  );
};

Logo.propTypes = {
  brand: PropTypes.oneOf(["Ria", "Ria-Gray"]),
};

Logo.defaultProps = {
  brand: "Ria-Gray",
};

export default Logo;
