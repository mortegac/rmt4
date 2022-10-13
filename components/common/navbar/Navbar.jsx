import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import OptOut from "./OptOut";

import CountryMobileSelector from "./subcomponents/CountryMobileSelector/CountryMobileSelector";
import LanguageMobileSelector from "./subcomponents/LanguageMobileSelector/LanguageMobileSelector";
import CountryDropdown from "../CountryDropdown";
import LanguageDropdown from "../LanguageDropdown";
import { linkResolver } from "../../../prismicio";
import { Btn } from "../index";
import { LogoRiaWalmart, LogoRia } from "../logos/";
import {
  container,
  navMenuItems,
  NavContainer,
  SectionContainer,
  LeftWrap,
  MobileNavContainer,
} from "./NavbarStyle";

import { separateUrl } from "../../../utils/urlHandling";
import { langOption } from "./utils/LanguagesList";

const Navbar = ({
  topMenu = {
    data: { menu_links: [] },
  },
  activeDocMeta,
  microsite = null,
  optOutState,
  setOptOutState,
  pagename,
  theme,
}) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [langToggle, setLangToggle] = useState(false);
  const [countryToggle, setCountryToggle] = useState(false);
  const menu_links = topMenu?.data?.menu_links || [];

  const currentLang = activeDocMeta.lang;
  const HamburgerBehavior = () => {
    setOpen(!open);
    setLangToggle(false);
    setCountryToggle(false);
  };

  const LinkLogo = () => (
    <Link
      href={
        microsite === "walmart"
          ? `/${activeDocMeta?.lang}/${microsite}`
          : `/${activeDocMeta.lang}`
      }
      passHref
    >
      {(microsite && microsite === "walmart") || theme === "walmart" ? (
        <a>
          <LogoRiaWalmart className={`logo-ria`} />
        </a>
      ) : (
        <a>
          <LogoRia className={`logo-ria`} />
        </a>
      )}
    </Link>
  );

  const LinkPage = (data) => {
    const dataMenu = {
      _meta: {
        type: data.type,
        lang: data.lang,
        uid: data.uid,
        url: data.url,
      },
    };
    return (
      <Link
        key={`top-nav-${data.id}`}
        href={data.url === "" ? `/${linkResolver(dataMenu)}` : data.url}
        passHref
      >
        <a id={data.id} className={data.uid === pagename ? "selected" : ""}>
          <motion.li className="nav-item" animate>
            {data.text}
            <div className="underline"></div>
          </motion.li>
        </a>
      </Link>
    );
  };

  const menuLinks = menu_links;
  const renderedMenuLinks = Array.isArray(menu_links)
    ? menu_links.map((menuLink, index) => {
        const { label, link } = menuLink;

        return LinkPage({
          uid: link?.uid || "",
          lang: link?.lang || "",
          type: link?.type || "",
          text: label[0]?.text || "#",
          id: link?.id || "#",
          slug: link?.slug || "#",
          url: link?.url || "",
        });
      })
    : null;

  const clickHandler = (e, type) => {
    e.preventDefault();
    const slug = separateUrl();

    if (typeof document !== undefined) {
      const data = {
        i18n: {
          locale: slug,
        },
      };
      document.cookie = `public-site-local=${JSON.stringify({
        ...data,
      })};path=/`;
      document.cookie = `public-private=${JSON.stringify({
        ...data,
      })};domain=.riamoneytransfer.com;path=/;`;

       if (type === "login")
         window.location.href = topMenu?.data?.login_url?.url;
       if (type === "register")
         window.location.href = topMenu?.data?.register_url?.url;
    }
  };

  const buttonsSecureSite = (fullWidth) => (
    <>
      <Btn
        innerText={
          topMenu?.data?.login_text ? topMenu?.data?.login_text[0].text : ""
        }
        url={topMenu?.data?.login_url?.url}
        onClick={(e) => clickHandler(e, "login")}
        type="outline-orange"
        fullwidth={fullWidth}
      />
      <Btn
        innerText={
          topMenu?.data?.register_text
            ? topMenu?.data?.register_text[0]?.text
            : ""
        }
        url={topMenu?.data?.register_url?.url}
        onClick={(e) => clickHandler(e, "register")}
        fullwidth={fullWidth}
        type="solid-orange"
      />
    </>
  );

  return (
    <>
      <NavContainer optOut={optOutState}>
        {optOutState && (
          <OptOut
            welcomeText={topMenu?.data?.optout_welcome_text[0].text}
            subText={topMenu?.data?.optout_subtext[0].text}
            ctaText={topMenu?.data?.optout_cta_text[0].text}
            rmtUrl={topMenu?.data?.optout_rmt3_url.url}
            isVisible={() => setOptOutState(!optOutState)}
          />
        )}
        <SectionContainer optOut={optOutState}>
          <LinkLogo />
          <LeftWrap id="NavDesktop">
            <ul>{renderedMenuLinks}</ul>
            <CountryDropdown activeDocMeta={activeDocMeta} />
            <LanguageDropdown activeDocMeta={activeDocMeta} />
            <div className="button-container">
              {topMenu?.data?.available_secure_site
                ? buttonsSecureSite(false)
                : topMenu?.data?.call_to_action_text && (
                    <Btn
                      innerText={
                        topMenu?.data?.call_to_action_text
                          ? topMenu?.data?.call_to_action_text[0]?.text
                          : ""
                      }
                      url={topMenu?.data?.call_to_action_url?.url}
                      fullwidth={true}
                      type="solid-orange"
                    />
                  )}
            </div>
          </LeftWrap>
          <svg
            className={`ham hamRotate ham8 ${open && "active"}`}
            viewBox="0 0 100 100"
            width="50"
            onClick={HamburgerBehavior}
            id="NavIcoHamburger"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>{" "}
          <MobileNavContainer className={open && "on"}>
            {open && (
              <>
                <div className="logo-container" id="NavMobile">
                  <Link href={`/${activeDocMeta?.lang}`} passHref>
                    {microsite && microsite === "walmart" ? (
                      <a>
                        <LogoRiaWalmart className={`logo-ria`} />
                      </a>
                    ) : (
                      <a>
                        <LogoRia className={`logo-ria`} />
                      </a>
                    )}
                  </Link>
                </div>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="show"
                  id="NavMenuMobile"
                >
                  {menuLinks.map((menuLink, index) => (
                    <motion.li
                      className="nav-item"
                      variants={navMenuItems}
                      key={`mobile-nav-item-${index}`}
                    >
                      <Link
                        class="selected"
                        key={`mobile-nav-link'-${index}`}
                        href={
                          menuLink.link.link_type === "Document"
                            ? `/${activeDocMeta?.lang}/${menuLink.link.uid}`
                            : menuLink.link.url
                        }
                      >
                        <a
                          className={
                            menuLink.link.uid === pagename && "selected"
                          }
                          onClick={() => setOpen(!open)}
                        >
                          {menuLink.label[0].text}
                        </a>
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    onClick={() => setCountryToggle(true)}
                    className="nav-item lang"
                    variants={navMenuItems}
                  >
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 2.125C4.65076 2.125 1.125 5.65076 1.125 10C1.125 14.3492 4.65076 17.875 9 17.875C13.3492 17.875 16.875 14.3492 16.875 10C16.875 7.91142 16.0453 5.90838 14.5685 4.43153C13.0916 2.95469 11.0886 2.125 9 2.125ZM15.75 9.4375H12.375C12.3093 7.36586 11.7726 5.3364 10.8056 3.50312C13.5345 4.24959 15.5084 6.61866 15.75 9.4375ZM9 16.75C8.87452 16.7584 8.74861 16.7584 8.62312 16.75C7.45779 14.8916 6.81104 12.7552 6.75 10.5625H11.25C11.194 12.7536 10.5532 14.8899 9.39375 16.75C9.26266 16.7592 9.13109 16.7592 9 16.75ZM6.75 9.4375C6.80596 7.24638 7.44685 5.11009 8.60625 3.25C8.85671 3.22186 9.10954 3.22186 9.36 3.25C10.5313 5.1067 11.1839 7.24322 11.25 9.4375H6.75ZM7.1775 3.50312C6.21635 5.3378 5.68544 7.36719 5.625 9.4375H2.25C2.49161 6.61866 4.46546 4.24959 7.19438 3.50312H7.1775ZM2.27813 10.5625H5.65312C5.71183 12.6324 6.24081 14.6617 7.2 16.4969C4.47993 15.7425 2.51653 13.3752 2.27813 10.5625ZM10.8056 16.4969C11.7726 14.6636 12.3093 12.6341 12.375 10.5625H15.75C15.5084 13.3813 13.5345 15.7504 10.8056 16.4969Z"
                        fill="#001133"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </motion.li>
                  <motion.li
                    onClick={() => setLangToggle(true)}
                    className="nav-item"
                    variants={navMenuItems}
                  >
                    {langOption(currentLang.slice(0, 2).toLowerCase())}
                  </motion.li>
                </motion.ul>
                <motion.div
                  className="button-wrapper"
                  animate={{ opacity: [0, 1] }}
                  transition={{ ease: "easeOut", duration: 0.2, delay: 0.4 }}
                >
                  {topMenu?.data?.available_secure_site ? (
                    buttonsSecureSite(true)
                  ) : (
                    <Btn
                      innerText={
                        topMenu?.data?.call_to_action_text
                          ? topMenu?.data?.call_to_action_text[0]?.text
                          : ""
                      }
                      url={topMenu?.data?.call_to_action_url?.url}
                      fullwidth={true}
                      type="solid-orange"
                    />
                  )}
                </motion.div>
              </>
            )}
          </MobileNavContainer>
          <CountryMobileSelector
            countryToggle={countryToggle}
            activeDocMeta={activeDocMeta}
            setCountryToggle={setCountryToggle}
          />
          <LanguageMobileSelector
            langToggle={langToggle}
            activeDocMeta={activeDocMeta}
            setLangToggle={setLangToggle}
          />
        </SectionContainer>
      </NavContainer>
      {/* <pre style={{    maxWidth: '1000px'}}>{JSON.stringify(menu_links, null, 2)}</pre> */}
    </>
  );
};

export default Navbar;
