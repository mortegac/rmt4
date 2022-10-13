import styled from 'styled-components'
import { motion } from 'framer-motion'

export const OptOutLayout = styled(motion.div)`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
	background: rgba(0, 170, 255, .15);
	@media(max-width: 720px){
		height: 85px;
	}
`

export const OptOutContainer = styled(motion.div)`
	width: 100%;
	max-width: var(--container-width);
	padding: 0 24px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media(max-width: 720px){
		flex-direction: column;
		@media(max-width: 720px){
			padding: 14px 0;
		}
	}
`

export const OptOutText = styled(motion.div)`
	width: 50%;
	display: flex;
	@media(max-width: 720px){
		justify-content: center;
		width: 100%;
	}
	@media(max-width: 500px){
		padding-left: 24px;
		justify-content: flex-start;
	}
		p {
			font-size: 15px;
			font-weight: 700;
			line-height: 24px;
			letter-spacing: 0.25px;
			color: var(--Text-secondary);
			margin: 0;
			@media(max-width: 500px){
				margin-bottom: 8px;
			}
		}
`

export const OptOutCta = styled(motion.div)`
	width: 50%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	@media(max-width: 720px){
		justify-content: center;
		width: 100%;
	}
	@media(max-width: 500px){
		padding-left: 24px;
		justify-content: flex-start;
	}
	p {
		font-size: 15px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0.25px;
		color: var(--Text-secondary);
		margin-right: 45px;
		@media(max-width: 720px){
				margin: 0;
			}
			a {
			font-size: 14px;
			line-height: 20px;
			letter-spacing: 0.25px;
			font-weight: 700;
			text-decoration: underline;
			padding-left: 12px;
			color: var(--Text-secondary);	
		}
	}
	a {
		cursor: pointer;
	}
	a.close {
		width: 12px;
		height: 12px;
		border: none;
		outline: none;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 3px;
		
		@media(max-width: 720px){
			position: absolute;
			right: 20px;
			top: 30px;
			@media(max-width: 330px){
				right: 5px;
				top: 20px;
			}
		}
		svg {
			width: 12px;
			height: 12px;
		}
}
`

