import * as prismicH from "@prismicio/helpers";
import PageSliceZone from "../components/PageSliceZone";
import { createClient, linkResolver } from "../prismicio";
import { Layout } from "../components/Layout";

const Page = props => {
  if (props?.error || !props || !props?.page?.lang) {
    return <>{console.error(props, "[uid]")}</>;
  }
  const { page, footer, menu } = props;
  const {
    lang,
    type,
    url,
    alternate_languages: alternateLanguages,
    ...rest
  } = page;
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
    sitename: process.env.NEXT_PUBLIC_SITENAME,
  };
  return (
    <Layout header={menu} page={page} footer={footer} activeDocMeta={activeDoc}>
      <PageSliceZone slices={page?.data?.body || []} />
    </Layout>
  );
};

export async function getStaticProps({
  locale,
  locales,
  previewData,
  params: { uid },
}) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      uid === "walmart"
        ? (page = await client.getByUID("micropages", uid, { lang: locale }))
        : (page = await client.getByUID("page", uid, { lang: locale }));
    } catch (error) {
      page = await client.getByUID("page", uid, { lang: "en-us" });
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

    return {
      props: {
        page,
        menu,
        footer,
        locales: locales || {},
        locale: locale || {},
        uid,
      },
      // revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
      props: {
        error: JSON.stringify({ ...error, uid }),
        uid,
        locale,
      },
    };
  }
}

export async function getStaticPaths(context) {
  const client = createClient({ context });
  const pages = await client.getAllByType("page", { lang: "*", pageSize: 60 });
  const micropages = await client.getAllByType("micropages", { lang: "*" });
  const allPages = [...pages, ...micropages];
  return {
    paths: allPages
      .filter((page) => page.uid !== "404")
      .map((page) => prismicH.asLink(page, linkResolver)),
    //    fallback: true,
    fallback: "blocking"
  };
}
export default Page;
