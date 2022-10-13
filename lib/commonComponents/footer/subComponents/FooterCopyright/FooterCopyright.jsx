import PropTypes from 'prop-types'

import { FooterCopyrightContainer } from "./FooterCopyrightStyles"

const FooterCopyright = ({ copyrightText }) => {
  return (
    <FooterCopyrightContainer>
        <p>{copyrightText}</p>
    </FooterCopyrightContainer>
  )
}

FooterCopyright.propTypes = {
	copyrightText : PropTypes.string
};

FooterCopyright.defaultProps = {
  copyrightText: "Ria Financial Services. © 2022 Continental Exchange Solutions, Inc. All rights reserved."
};

export default FooterCopyright