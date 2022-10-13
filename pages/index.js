import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import SliceZone from "../components/SliceZone";
import generateSchema from "../utils/schemaGenerator";
import { Helmet } from "react-helmet";

const Home = props => {
  if (props.error) {
    return <>{console.error(props, "index")}</>;
  }
  const { page, footer, menu, consentManager } = props;
  const { lang, type, url, alternate_languages: alternateLanguages } = page;
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
    sitename: process.env.NEXT_PUBLIC_SITENAME,
  };
  const schemaMarkup = generateSchema(page.data.body, lang);

  return (
    <Layout
      header={menu}
      page={page}
      footer={footer}
      activeDocMeta={activeDoc}
      consentManager={consentManager}
    >
      <Helmet>
        <script type="application/ld+json">{schemaMarkup}</script>
      </Helmet>
      <SliceZone slices={page?.data?.body || []} />
    </Layout>
  );
};

export async function getStaticProps({ locale, locales, previewData }) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      page = await client.getByUID("homepage", "home", { lang: locale });
    } catch (error) {
      page = await client.getByUID("homepage", "home", { lang: "en-us" });
    }
    let menu;
    try {
      menu = await client.getSingle("top_menu", { lang: locale });
    } catch (error) {
      menu = await client.getSingle("top_menu", { lang: "en-us" });
    }
    let footer;
    try {
      footer = await client.getSingle("footer", {
        lang: locale,
      });
    } catch (error) {
      footer = await client.getSingle("footer", {
        lang: "en-us",
      });
    }
    let consentManager;
    try {
      consentManager = await client.getSingle("consent_manager", {
        lang: locale,
      });
    } catch (error) {
      consentManager = await client.getSingle("consent_manager", {
        lang: "en-us",
      });
    }
    return {
      props: {
        page,
        menu,
        footer,
        consentManager,
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

export default Home;
