import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { LogoDandelion } from "../Logos/LogoDandelion";

import {
  container,
  LeftWrap,
  NavContainer,
  SectionContainer,
  MobileNavContainer,
  navMenuItems,
} from "./HeaderStyles";

import Button from "../../commonComponents/Buttons/ButtonBase";

export const Header = ({ header, pagename }) => {
  const [open, setOpen] = useState(false);

  const HamburgerBehavior = () => {
    setOpen(!open);
  };

  const menuLinks = header?.data?.menulinks || [];

  const renderedMenuLinks = menuLinks ? (
    menuLinks.length < 6 ? (
      menuLinks.map((menuLink, index) => {
        return (
          <Link
            key={`top-nav-${index}`}
            href={menuLink.link.slug === "homepage" ? "/" : menuLink.link.slug}
            passHref
          >
            <a
              id={menuLink.link.id}
              className={menuLink.link.slug === pagename ? "selected" : ""}
            >
              <motion.li className="nav-item" animate>
                {menuLink.label[0].text}
                <div className="underline"></div>
              </motion.li>
            </a>
          </Link>
        );
      })
    ) : (
      <Link href="/" passHref>
        <a>
          <motion.li className="nav-item" animate key={"max-nav-items"}>
            {
              "At the moment we can only display a maximum of 5 pages on the navigation bar. Remove some pages from the navbar."
            }
          </motion.li>
        </a>
      </Link>
    )
  ) : null;

  return (
    <NavContainer>
      <SectionContainer>
        <Link key={"dandelion-logo"} href="/" passHref>
          <a>
            <LogoDandelion className={`logo-ria`}></LogoDandelion>
          </a>
        </Link>
        <LeftWrap>
          <ul>{renderedMenuLinks}</ul>
          {/* <Button
            innerText={header?.data?.calltoactiontext[0]?.text || "Contact Us"}
            fullwidth={true}
            url={header?.data?.calltoactionurl[0]?.uid || "/contact-us"}
          ></Button> */}
        </LeftWrap>
        <svg
          className={`ham hamRotate ham8 ${open && "active"}`}
          viewBox="0 0 100 100"
          width="50"
          onClick={HamburgerBehavior}
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
        </svg>
        <MobileNavContainer className={open && "on"}>
          {open && (
            <>
              <LogoDandelion />
              <motion.ul variants={container} initial="hidden" animate="show">
                {menuLinks.map((menuLink, index) => (
                  <motion.li
                    className={
                      menuLink.link.slug === pagename
                        ? "selected nav-item"
                        : "nav-item"
                    }
                    variants={navMenuItems}
                    key={`mobile-nav-item-${index}`}
                  >
                    <Link
                      key={`top-nav-${index}`}
                      href={
                        menuLink.link.slug === "homepage"
                          ? "/"
                          : menuLink.link.slug
                      }
                      passHref
                      onClick={() => setOpen(!open)}
                    >
                      {menuLink?.label[0]?.text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="button-wrapper"
                animate={{ opacity: [0, 1] }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.4 }}
              >
                {/* <Button
                  innerText={
                    header?.data?.calltoactiontext[0]?.text || "Contact Us"
                  }
                  fullwidth={true}
                  url={header?.data?.calltoactionurl[0]?.uid || "/contact-us"}
                ></Button> */}
              </motion.div>
            </>
          )}
        </MobileNavContainer>
      </SectionContainer>
    </NavContainer>
  );
};
