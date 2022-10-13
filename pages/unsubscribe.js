import dynamic from "next/dynamic";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

// import Unsubscribe from "../components/unsubscribe/index";
const Unsubscribe = dynamic(() => import("../components/unsubscribe/index"));

export default function UnsubscribePage({ page, menu, error = null }) {
  if (error) {
    return <>{console.error(props, "Unsubscribe")}</>;
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

  return (
    <>
      <Layout
        header={menu}
        activeDocMeta={activeDoc}
        page={page}
        hideNavbar={false}
      >
        <Unsubscribe data={page.data} activeDocMeta={activeDoc} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale, locales, previewData }) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      page = await client.getSingle("unsubscribe", { lang: locale });
    } catch (error) {
      page = await client.getSingle("unsubscribe", { lang: "en-us" });
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
      props: {
        error: JSON.stringify(error),
        locale,
      },
    };
  }
};