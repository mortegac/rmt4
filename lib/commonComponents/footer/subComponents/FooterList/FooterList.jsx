import PropTypes from 'prop-types'
import Link from "next/link";
import { hrefResolver } from '../../../../../prismicio';
import { FooterListContainer } from './FooterListStyles';

// eslint-disable-next-line no-unused-vars
const FooterList = ({ title = "", items = [], socialLinks }) => {
	
	return (
		<FooterListContainer>
			<h3>{title}</h3>
			<ul>
				{items.map((item, id) => (
					<li key={id}>
						{ item?.link?.slug && 
							<Link href={hrefResolver(item.link)} scroll={false} passHref>
								{item.label}
							</Link>
						}
					</li>
				))
				}
			</ul>
		</FooterListContainer>
	)
}


FooterList.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array
};

FooterList.defaultProps = {
	title: "Company",
	items: [
		{name: "item-1", url: "/url-1"},
		{name: "item-2", url: "/url-2"},
		{name: "item-3", url: "/url-3"},
		{name: "item-4", url: "/url-4"}
	]
};

export default FooterList