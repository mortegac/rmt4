import React from 'react'
import { OptOutLayout, OptOutContainer, OptOutText, OptOutCta } from './OptOutStyle'

const OptOut = ({welcomeText, subText, ctaText, rmtUrl, isVisible}) => {

	const setKey = (value) => {
		if (typeof window !== "undefined") return window.sessionStorage.setItem("optout", value);
		return true;
	  };

  const clickHandler = (e, type) => {
    e.preventDefault();

    if (typeof document !== undefined) {
    	
		if(typeof window !== undefined) setKey(true);

		document.cookie = `new-experience=false;domain=.riamoneytransfer.com;path=/;`
		if(type==='optout') window.location.href=rmtUrl;
    }
  }

  const closeBanner = (e)=>{
	e.preventDefault();
	if(typeof window !== undefined) setKey(false);
	isVisible()
  }

	return (
		<OptOutLayout>
			<OptOutContainer>
				<OptOutText>
					<p>{welcomeText ? welcomeText : "Welcome to our new Ria experience! 🎉"}</p>
				</OptOutText>
				<OptOutCta>
					<p>{subText ? subText : "Looking for the old version?"}<a onClick={(e) => clickHandler(e,"optout")}>{ctaText ? ctaText : "Click here"}</a></p>
					<a className="close" onClick={(e) => closeBanner(e) }>
						<svg width="12" height="12" viewBox="0 0 12 12"  xmlns="http://www.w3.org/2000/svg">
							<path d="M11.5685 1.22714L10.773 0.431641L5.99999 5.20461L1.22703 0.431641L0.431519 1.22714L5.20449 6.00011L0.431519 10.7731L1.22702 11.5686L5.99999 6.7956L10.773 11.5686L11.5685 10.7731L6.79549 6.00011L11.5685 1.22714Z" fill="#001133" fill-opacity="0.6"/>
						</svg>
					</a>
						
				</OptOutCta>
				</OptOutContainer>
		</OptOutLayout>
	)
}

export default OptOut
