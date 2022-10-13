import dynamic from "next/dynamic";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
// import LocationsWrapper from "../components/locations/LocationsWrapper";
const LocationsWrapper = dynamic(() => import("../components/locations/LocationsWrapper"));

export default function FindALocation({ page, menu, error = null }) {
  if (error) {
    return <>{console.error(props, "locations")}</>;
  }

  const {
    lang = "en-us",
    type,
    url,
    alternate_languages: alternateLanguages,
    theme,
    data,
  } = page;

  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
    sitename: process.env.NEXT_PUBLIC_SITENAME,
  };

  let hideNavbar = "false";
  if (typeof window !== "undefined") {
    hideNavbar =
      new URLSearchParams(window.location.search).get("hideNavbar") === "true";
  }

  return (
    <>
      <Layout
        header={menu}
        activeDocMeta={activeDoc}
        page={page}
        // consentData={consentManager.data}
        // consentLocale={findALocation.lang}
        hideNavbar={hideNavbar}
      >
        <LocationsWrapper
          textData={data}
          hideNavbar={hideNavbar}
          theme={theme}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale, locales, previewData }) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      page = await client.getSingle("find_a_location", { lang: locale });
    } catch (error) {
      page = await client.getSingle("find_a_location", { lang: "en-us" });
    }
    let menu;
    try {
      menu = await client.getSingle("top_menu", { lang: locale });
    } catch (error) {
      menu = await client.getSingle("top_menu", { lang: "en-us" });
    }
    return {
      props: {
        page,
        menu,
        locales: locales || {},
        locale: locale || {},
      },
    };
  } catch (error) {
    return {
      notFound: true,
      props: {
        error: JSON.stringify(error),
        locale,
      },
    };
  }
}
