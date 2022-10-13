import PropTypes from 'prop-types'
import { SocialLinksContainer } from './SocialLinksStyles';
import { LogoInstagram, LogoFacebook, LogoTwitter } from '../../../Logos/index'


const SocialLinks = ({ socialTitle = "", socialUrl = [] }) => {
	return (
		<SocialLinksContainer>
			<h3>{socialTitle}</h3>
			<ul>
				<li>
					<a href={socialUrl[0].url}>
						<LogoInstagram/>
					</a>
				</li>
				<li>
					<a href={socialUrl[1].url}>
						<LogoFacebook/>
					</a>
				</li>
				<li>
					<a href={socialUrl[2].url}>
						<LogoTwitter/>
					</a>
				</li>
			</ul>
		</SocialLinksContainer>
	)
}

SocialLinks.propTypes = {
	socialTitle: PropTypes.string,
	socialUrl: PropTypes.array
};

SocialLinks.defaultProps = {
	socialTitle: "Follow us",
	socialUrl: [
		{ url: "#" },
		{ url: "#" },
		{ url: "#" },
	]
};


export default SocialLinks