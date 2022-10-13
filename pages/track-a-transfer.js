import dynamic from "next/dynamic";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
// import TaTWrapper from "../components/track-a-transfer/TaTWrapper";
const TaTWrapper = dynamic(() => import("../components/track-a-transfer/TaTWrapper"));

export default function TrackATransfer(props) {
  if (props.error) {
    return <>{console.error(props, "track-a-transfer")}</>;
  }
  const { page, menu } = props;
  const { lang, type, url, alternate_languages: alternateLanguages } = page;
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
    sitename: process.env.NEXT_PUBLIC_SITENAME,
  };

  return (
    <>
      {}
      <Layout header={menu} activeDocMeta={activeDoc} page={page}>
        <TaTWrapper textData={page.data} language={lang} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale, locales, previewData }) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      page = await client.getSingle("track_a_transfer", { lang: locale });
    } catch (error) {
      page = await client.getSingle("track_a_transfer", { lang: "en-us" });
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
