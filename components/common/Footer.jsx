import { PrismicRichText } from "@prismicio/react";
import React from "react";
import Link from "next/link";
// import Image from 'next/image'
// import instagram from "../../images/instagram.svg";

import { LogoRia, LogoRiaWalmart } from "../common/logos";
import {
  PageContainer,
  SectionContainer,
  FooterItem,
  FooterText,
} from "./FooterStyle";
// import { hrefResolver } from '../../prismicio';
const Footer = ({ footerData, footerBgColor, microsite = "", uid }) => {
  const data = footerData?.data || {};
  return data ? (
    <PageContainer
      style={{
        backgroundColor: microsite === "walmart" ? "#0A1F3F" : "white",
      }}
    >
      <SectionContainer>
        <FooterItem colorMicrosite={uid === "walmart" ? "#FFF" : null}>
          {/* { microsite && microsite==='walmart' ? 
            (
            <LogoRiaWalmart className={`logowalmart`} bgColor='var(--Light)' />
            )
            :(
              
              <LogoRia className={`logo`} bgColor='var(--Text-secondary)' />
              )} */}
          {microsite === "walmart" ? (
            <LogoRiaWalmart className={`logowalmart`} bgColor="var(--Light)" />
          ) : (
            <LogoRia className={`logo`} bgColor="var(--Text-secondary)" />
          )}
        </FooterItem>
        <FooterItem colorMicrosite={microsite === "walmart" ? "#FFF" : null}>
          <h3>{data?.company_title[0]?.text?.toUpperCase() || ""}</h3>
          {data.company_links.map((item, index) => {
            if (
              item.link_url.link_type === "Web" ||
              item.link_url.link_type === "Media"
            ) {
              return (
                <a key={index} href={item.link_url.url}>
                  <span>{item?.link_text[0]?.text || ""}</span>
                </a>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={`/${item.link_url.lang}/${item.link_url.uid}`}
                  passHref
                >
                  <a>{item?.link_text[0]?.text || ""}</a>
                </Link>
              );
            }
          })}
        </FooterItem>
        <FooterItem colorMicrosite={microsite === "walmart" ? "#FFF" : null}>
          <h3>{data?.support_title[0]?.text?.toUpperCase() || ""}</h3>
          {data.support_links.map((item, index) => {
            if (
              item.link_url.link_type === "Web" ||
              item.link_url.link_type === "Media"
            ) {
              return (
                <a key={index} href={item.link_url.url}>
                  <span>{item?.link_text[0]?.text || ""}</span>
                </a>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={`/${item.link_url.lang}/${item.link_url.uid}`}
                  passHref
                >
                  <a>{item?.link_text[0]?.text || ""}</a>
                </Link>
              );
            }
          })}
          {
            // (footerData.lang === 'en-us') &&
            //   <Link to={'/en-us/sitemap/'} key={'support-link-sitemap'}>
            //     Sitemap
            //   </Link>
          }
        </FooterItem>
        <FooterItem colorMicrosite={microsite === "walmart" ? "#FFF" : null}>
          <h3>{data?.social_media_title[0]?.text?.toUpperCase() || ""}</h3>
          <div className="social-media-icons">
            <a href={data.instagram_url.url} target="_blank" rel="noreferrer">
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.9234 14.7321C33.8578 13.2443 33.6172 12.2215 33.2726 11.3352C32.917 10.3945 32.3701 9.5522 31.6534 8.85202C30.9533 8.14095 30.1054 7.58841 29.1756 7.23843C28.2842 6.89378 27.2667 6.6532 25.7789 6.5876C24.2801 6.51645 23.8043 6.5 20.0027 6.5C16.2012 6.5 15.7254 6.51645 14.2321 6.58205C12.7443 6.64764 11.7215 6.88844 10.8354 7.23287C9.89447 7.58841 9.0522 8.13539 8.35202 8.85202C7.64094 9.5522 7.08862 10.4 6.73843 11.3299C6.39378 12.2215 6.1532 13.2388 6.0876 14.7265C6.01645 16.2254 6 16.7012 6 20.5027C6 24.3043 6.01645 24.7801 6.08205 26.2734C6.14764 27.7611 6.38844 28.784 6.73308 29.6702C7.08862 30.611 7.64094 31.4533 8.35202 32.1534C9.0522 32.8645 9.90002 33.4171 10.8299 33.767C11.7215 34.1117 12.7388 34.3523 14.2267 34.4179C15.7198 34.4837 16.1959 34.4999 19.9974 34.4999C23.7989 34.4999 24.2747 34.4837 25.768 34.4179C27.2558 34.3523 28.2786 34.1117 29.1647 33.767C31.0464 33.0395 32.5342 31.5518 33.2617 29.6702C33.6061 28.7786 33.8469 27.7611 33.9125 26.2734C33.9781 24.7801 33.9946 24.3043 33.9946 20.5027C33.9946 16.7012 33.989 16.2254 33.9234 14.7321ZM31.402 26.164C31.3417 27.5315 31.112 28.2699 30.9206 28.7622C30.4501 29.982 29.482 30.9501 28.2621 31.4206C27.7699 31.612 27.0261 31.8417 25.664 31.9018C24.1871 31.9676 23.7442 31.9838 20.0083 31.9838C16.2724 31.9838 15.8239 31.9676 14.3524 31.9018C12.9849 31.8417 12.2465 31.612 11.7542 31.4206C11.1472 31.1962 10.5946 30.8407 10.1462 30.3758C9.68123 29.9217 9.32569 29.3747 9.10134 28.7677C8.9099 28.2754 8.68021 27.5315 8.62017 26.1696C8.55436 24.6927 8.53812 24.2496 8.53812 20.5136C8.53812 16.7777 8.55436 16.3292 8.62017 14.8579C8.68021 13.4905 8.9099 12.752 9.10134 12.2598C9.32569 11.6525 9.68123 11.1002 10.1517 10.6515C10.6055 10.1866 11.1525 9.83103 11.7598 9.6069C12.252 9.41546 12.996 9.18577 14.3579 9.12551C15.8348 9.05992 16.2779 9.04347 20.0136 9.04347C23.7551 9.04347 24.198 9.05992 25.6695 9.12551C27.037 9.18577 27.7754 9.41546 28.2677 9.6069C28.8747 9.83103 29.4273 10.1866 29.8757 10.6515C30.3407 11.1055 30.6962 11.6525 30.9206 12.2598C31.112 12.752 31.3417 13.4958 31.402 14.8579C31.4675 16.3348 31.484 16.7777 31.484 20.5136C31.484 24.2496 31.4675 24.6871 31.402 26.164ZM20.0027 13.3099C16.0318 13.3099 12.8099 16.5316 12.8099 20.5027C12.8099 24.4739 16.0318 27.6955 20.0027 27.6955C23.9739 27.6955 27.1956 24.4739 27.1956 20.5027C27.1956 16.5316 23.9739 13.3099 20.0027 13.3099ZM20.0027 25.1685C17.4266 25.1685 15.337 23.0791 15.337 20.5027C15.337 17.9264 17.4266 15.8369 20.0027 15.8369C22.5791 15.8369 24.6685 17.9264 24.6685 20.5027C24.6685 23.0791 22.5791 25.1685 20.0027 25.1685ZM27.4799 14.7047C28.4075 14.7047 29.1594 13.9528 29.1594 13.0255C29.1594 12.098 28.4075 11.3463 27.4799 11.3463C26.5526 11.3463 25.8008 12.098 25.8008 13.0255C25.8008 13.9528 26.5526 14.7047 27.4799 14.7047Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href={data.facebook_url.url} target="_blank" rel="noreferrer">
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0137 22.25L27.7913 17.1827H22.9291V13.8943C22.9291 12.508 23.6083 11.1566 25.786 11.1566H27.9964V6.84234C27.9964 6.84234 25.9905 6.5 24.0726 6.5C20.0684 6.5 17.451 8.92703 17.451 13.3206V17.1827H13V22.25H17.451V34.5H22.9291V22.25H27.0137Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href={data.twitter_url.url} target="_blank" rel="noreferrer">
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.1219 15.1675C31.1397 15.4162 31.1397 15.665 31.1397 15.9137C31.1397 23.5 25.3656 32.2412 14.8122 32.2412C11.5609 32.2412 8.54063 31.2995 6 29.6651C6.46195 29.7183 6.90607 29.7361 7.38579 29.7361C10.0685 29.7361 12.5381 28.83 14.5102 27.2843C11.9873 27.231 9.87309 25.5787 9.14465 23.3046C9.50001 23.3579 9.85532 23.3934 10.2285 23.3934C10.7437 23.3934 11.2589 23.3223 11.7386 23.198C9.10916 22.665 7.13701 20.3553 7.13701 17.566V17.495C7.90095 17.9214 8.78935 18.1879 9.73091 18.2233C8.18521 17.1929 7.17256 15.434 7.17256 13.4441C7.17256 12.3782 7.45677 11.401 7.95427 10.5482C10.7792 14.0304 15.0254 16.3045 19.7868 16.5533C19.698 16.1269 19.6446 15.6828 19.6446 15.2386C19.6446 12.0761 22.203 9.5 25.3832 9.5C27.0355 9.5 28.5279 10.1929 29.5761 11.3122C30.8731 11.0635 32.1167 10.5837 33.2183 9.9264C32.7918 11.2589 31.8858 12.3782 30.6954 13.0888C31.8503 12.9645 32.9696 12.6447 34 12.2005C33.2184 13.3375 32.2412 14.3502 31.1219 15.1675Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href={data.youtube_url.url} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="40"
                fill="white"
                viewBox="0 0 16 16"
                style={{ paddingTop: "4px", marginLeft: "-4px" }}
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
            <a href={data.linkedin_url.url} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="26"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
        </FooterItem>
      </SectionContainer>
      <FooterText colorMicrosite={microsite === "walmart" ? "#FFF" : null}>
        <PrismicRichText field={data.footer_rights} />
      </FooterText>
    </PageContainer>
  ) : null;
};

export default Footer;
