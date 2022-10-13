import styled from 'styled-components'

export const FooterListContainer = styled.div`
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	font-family: 'Nunito Sans', sans-serif;
		h3 {
					font-size: 16px;
					line-height: 24px;
					color:var(--Text-primary);
					font-weight: 700;
					letter-spacing: .4px;
					text-transform: uppercase;
					margin: 0;
					margin-bottom: 24px;    
				}
		ul {
			margin: 0;
			padding: 0;
			li {
				list-style: none;
				&:not(:last-child)  {
						margin-bottom: 8px;
					}
				a {
					text-decoration: none;
					font-size: 16px;
					font-weight: 400;
					line-height: 24px;
					color: var(--Text-secondary);
					transition: color .3s ease;
					&:hover {
						color: var(--Text-primary);
					}
				}
			}
	}
`

