// import { PageContainer } from "../lib/commonComponents/Containers";
import React, { useState, useEffect } from "react";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/Footer";

import { ConsentManager } from "./consentManager";
import { initializeAnalytic } from "../utils/analytics/index";
import OptOutHeader from "./common/navbar/OptOutHeader";
import Head from "next/head";
import { linkResolver } from "../prismicio";
import { asText } from "@prismicio/helpers";


/**
 * The default layout for all pages.
 */
export const Layout = (props) => {
  const {
    children,
    header,
    footer,
    page,
    activeDocMeta,
    hideNavbar,
    consentManager,
    theme,
  } = props;


  const [optOutState, setOptOutState] = useState(false);

  const dummy = (content = "") => [
    { text: content, type: "heading 1", spans: [] },
  ];

  const newChildren = React.Children.map(children, function (child) {
    return React.cloneElement(child, { optOutState: optOutState });
  });

  useEffect(() => { initializeAnalytic(); } ,[])

  useEffect(() => {
    header?.data?.optout_handler && setOptOutState(true);
    if (typeof window !== "undefined") {

      if (window.sessionStorage.getItem("optout") === "false") {
        setOptOutState(false);
      }
    }
  }, [optOutState]);

  return (
    <>
      <Head>
        <title>
          {page?.type === "find_a_location"
            ? "Locations | Ria Money Transfer"
            : page.type === "track-a-transfer" ||
              page.type === "track_a_transfer"
            ? "Track a transfer | Ria Money Transfer"
            : asText(page?.data?.title)}
        </title>
        <link
          rel="canonical"
          href={`${activeDocMeta.sitename}${linkResolver(page)}`}
        />
        {page.alternate_languages.map((page, i) => (
          <link
            key={i}
            hrefLang={page.lang}
            rel="alternate"
            href={`${activeDocMeta.sitename}${linkResolver(page)}/`}
          />
        ))}
        {[
          {
            name: `description`,
            content: asText(page?.data?.description || dummy("")),
          },
          {
            property: `og:title`,
            content: asText(page?.data?.title || dummy("")),
          },
          {
            property: `og:description`,
            content: asText(page?.data?.description || dummy("")),
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: asText(page?.data?.author || dummy("@RIA")),
          },
          {
            name: `twitter:title`,
            content: asText(page?.data?.title || dummy("")),
          },
          {
            name: `twitter:description`,
            content: asText(page?.data?.description || dummy("")),
          },
          {
            name: `viewport`,
            content:
              "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1",
          },
        ].map((items, i) => (
          <meta key={`meta-${i}`} {...items}></meta>
        ))}
      </Head>
       

      {hideNavbar !== true && (
        <>
          <Navbar
            siteTitle={""}
            topMenu={header}
            header={header}
            pagename={page ? (page?.uid ? page?.uid : page?.slugs[0]) : "Home"}
            activeDocMeta={activeDocMeta}
            microsite={page?.uid || null}
            theme={theme}
            optOutState={optOutState}
            setOptOutState={setOptOutState}
          />
        </>
      )}
      {optOutState && <OptOutHeader />}
      <main>{newChildren}</main>
      {page.uid !== "cookies" && (
        <ConsentManager
          consentData={consentManager?.data}
          uid={page.uid}
          consentLocale={consentManager?.lang}
        />
      )}
      {footer && <Footer footerData={footer} microsite={page?.uid} />}
    </>
  );
};