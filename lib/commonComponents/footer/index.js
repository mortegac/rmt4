import styled from "styled-components";
import PropTypes from "prop-types";

import FooterList from "./subComponents/FooterList/FooterList";
import SocialLinks from "./subComponents/SocialLinks/SocialLinks";
import Logo from "./subComponents/Logo/Logo";
import FooterCopyright from "./subComponents/FooterCopyright/FooterCopyright";

const FooterWrapper = styled.footer`
  font-family: "Nunito Sans", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 48px 24px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

const FooterItemsContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const Footer = ({
  logo = "Ria",
  copyrightText,
  backgroundColor,
  columnTitle,
  items,
  socialTitle,
  footer,
}) => {
  return (
    <FooterWrapper backgroundColor={backgroundColor}>
      <FooterItemsContainer>
        <Logo brand={logo} />
        {/* Need to define how data is fetched */}
        <FooterList title={columnTitle} items={footer?.data?.menulinks || []} />
        <FooterList title={columnTitle} items={items} />
        <SocialLinks socialTitle={socialTitle} />
      </FooterItemsContainer>
      <FooterCopyright copyrightText={copyrightText} />
    </FooterWrapper>
  );
};

Footer.propTypes = {
  logo: PropTypes.string,
  copyrightText: PropTypes.string,
  backgroundColor: PropTypes.string,
  columnTitle: PropTypes.string,
  items: PropTypes.array,
  socialTitle: PropTypes.string,
};

Footer.defaultProps = {
  logo: "/logo-ria-gray.svg",
  copyrightText:
    "Ria Financial Services © 2022 Continental Exchange Solutions, Inc. Todos los derechos reservados.",
  backgroundColor: "var(--Bg-gray)",
  columnTitle: "Company",
  socialTitle: "Follow us",
};

export default Footer;
